import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN || ""
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // MercadoPago envía notificaciones de tipo "payment"
    if (body.type === "payment") {
      const paymentId = body.data.id

      if (!MERCADOPAGO_ACCESS_TOKEN) {
        return NextResponse.json({ received: true })
      }

      // Consultar el pago en MercadoPago
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
        },
      })

      if (response.ok) {
        const payment = await response.json()

        // Actualizar estado del pedido en la base de datos
        if (supabaseUrl && supabaseKey) {
          const supabase = createClient(supabaseUrl, supabaseKey)

          const estadoMap: Record<string, string> = {
            approved: "pagado",
            pending: "pendiente_pago",
            in_process: "procesando",
            rejected: "rechazado",
            cancelled: "cancelado",
          }

          await supabase
            .from("pedidos")
            .update({
              estado: estadoMap[payment.status] || "pendiente_pago",
              mp_payment_id: paymentId,
              mp_status: payment.status,
              updated_at: new Date().toISOString(),
            })
            .eq("numero_pedido", payment.external_reference)
        }
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error en webhook-mp:", error)
    return NextResponse.json({ received: true })
  }
}
