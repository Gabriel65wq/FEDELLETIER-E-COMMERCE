import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const paymentId = searchParams.get("payment_id")
    const numeroPedido = searchParams.get("external_reference")

    console.log("[v0] Verificando pago:", { paymentId, numeroPedido })

    if (!paymentId || !numeroPedido) {
      return NextResponse.json({ error: "Faltan parámetros requeridos" }, { status: 400 })
    }

    const mpAccessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!mpAccessToken || !supabaseUrl || !supabaseKey) {
      console.error("[v0] ERROR: Faltan variables de entorno")
      return NextResponse.json({ error: "Error de configuración del servidor" }, { status: 500 })
    }

    // Obtener información del pago desde MercadoPago
    const paymentResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${mpAccessToken}`,
      },
    })

    if (!paymentResponse.ok) {
      console.error("[v0] ERROR al obtener información del pago")
      return NextResponse.json({ error: "No se pudo verificar el pago" }, { status: 404 })
    }

    const payment = await paymentResponse.json()
    console.log("[v0] Información del pago:", payment)

    // Actualizar pedido en Supabase
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data, error } = await supabase
      .from("pedidos")
      .update({
        estado: payment.status === "approved" ? "pagado" : "pendiente_pago",
        mp_payment_id: payment.id,
        mp_status: payment.status,
        updated_at: new Date().toISOString(),
      })
      .eq("numero_pedido", numeroPedido)
      .select()

    if (error) {
      console.error("[v0] ERROR al actualizar pedido:", error)
      return NextResponse.json({ error: "Error al actualizar el pedido" }, { status: 500 })
    }

    console.log("[v0] Pedido actualizado:", data)

    return NextResponse.json({
      success: true,
      payment,
      pedido: data[0],
    })
  } catch (error: any) {
    console.error("[v0] ERROR en verificar-pago:", error)
    return NextResponse.json({ error: "Error al verificar el pago", details: error.message }, { status: 500 })
  }
}
