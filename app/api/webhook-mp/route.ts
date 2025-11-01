import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Webhook de MercadoPago recibido")

    const body = await request.json()
    console.log("[v0] Datos del webhook:", JSON.stringify(body, null, 2))

    const mpAccessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!mpAccessToken || !supabaseUrl || !supabaseKey) {
      console.error("[v0] ERROR: Faltan variables de entorno")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    if (body.type === "payment") {
      const paymentId = body.data.id
      console.log("[v0] Procesando notificación de pago:", paymentId)

      // Obtener información del pago desde MercadoPago
      const paymentResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${mpAccessToken}`,
        },
      })

      if (!paymentResponse.ok) {
        console.error("[v0] ERROR al obtener información del pago")
        return NextResponse.json({ error: "Payment not found" }, { status: 404 })
      }

      const payment = await paymentResponse.json()
      console.log("[v0] Información del pago:", JSON.stringify(payment, null, 2))

      // Actualizar pedido en Supabase
      const { data, error } = await supabase
        .from("pedidos")
        .update({
          estado: payment.status === "approved" ? "pagado" : "pendiente_pago",
          mp_payment_id: payment.id,
          mp_status: payment.status,
          updated_at: new Date().toISOString(),
        })
        .eq("numero_pedido", payment.external_reference)
        .select()

      if (error) {
        console.error("[v0] ERROR al actualizar pedido:", error)
        return NextResponse.json({ error: "Database error" }, { status: 500 })
      }

      console.log("[v0] Pedido actualizado:", data)
    }

    if (body.type === "merchant_order") {
      const orderId = body.data.id
      console.log("[v0] Procesando notificación de merchant_order:", orderId)

      // Obtener información de la orden desde MercadoPago
      const orderResponse = await fetch(`https://api.mercadopago.com/merchant_orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${mpAccessToken}`,
        },
      })

      if (!orderResponse.ok) {
        console.error("[v0] ERROR al obtener información de la orden")
        return NextResponse.json({ error: "Order not found" }, { status: 404 })
      }

      const order = await orderResponse.json()
      console.log("[v0] Información de la orden:", JSON.stringify(order, null, 2))

      const payment = order.payments?.[0]

      if (payment) {
        // Actualizar pedido en Supabase
        const { data, error } = await supabase
          .from("pedidos")
          .update({
            estado: payment.status === "approved" ? "pagado" : "pendiente_pago",
            mp_payment_id: payment.id,
            mp_status: payment.status,
            updated_at: new Date().toISOString(),
          })
          .eq("numero_pedido", order.external_reference)
          .select()

        if (error) {
          console.error("[v0] ERROR al actualizar pedido:", error)
          return NextResponse.json({ error: "Database error" }, { status: 500 })
        }

        console.log("[v0] Pedido actualizado desde merchant_order:", data)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("[v0] ERROR en webhook-mp:", error)
    return NextResponse.json({ error: "Internal server error", details: error.message }, { status: 500 })
  }
}
