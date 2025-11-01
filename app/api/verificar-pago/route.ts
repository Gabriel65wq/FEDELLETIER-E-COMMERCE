import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN || ""
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const paymentId = searchParams.get("payment_id")

    if (!paymentId) {
      return NextResponse.json({ error: "ID de pago no proporcionado" }, { status: 400 })
    }

    if (!MERCADOPAGO_ACCESS_TOKEN) {
      return NextResponse.json({ error: "MercadoPago no está configurado" }, { status: 500 })
    }

    // Consultar el pago en MercadoPago
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Error al verificar el pago" }, { status: 500 })
    }

    const payment = await response.json()

    // Actualizar estado del pedido en la base de datos
    if (supabaseUrl && supabaseKey && payment.status === "approved") {
      const supabase = createClient(supabaseUrl, supabaseKey)

      await supabase
        .from("pedidos")
        .update({
          estado: "pagado",
          mp_payment_id: paymentId,
          mp_status: payment.status,
          updated_at: new Date().toISOString(),
        })
        .eq("numero_pedido", payment.external_reference)
    }

    return NextResponse.json({
      success: payment.status === "approved",
      status: payment.status,
      amount: payment.transaction_amount,
      external_reference: payment.external_reference,
    })
  } catch (error) {
    console.error("Error en verificar-pago:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
