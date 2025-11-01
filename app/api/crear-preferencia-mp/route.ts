import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, total, nombreApellido, gmail, telefono } = body

    // Configurar MercadoPago
    const mercadopago = require("mercadopago")
    mercadopago.configure({
      access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
    })

    // Crear preferencia de pago
    const preference = {
      items: items.map((item: any) => ({
        title: item.nombre,
        unit_price: item.precioUnitario,
        quantity: item.cantidad,
      })),
      payer: {
        name: nombreApellido,
        email: gmail,
        phone: {
          number: telefono,
        },
      },
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL}/pago-exitoso`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/pago-fallido`,
        pending: `${process.env.NEXT_PUBLIC_BASE_URL}/pago-pendiente`,
      },
      auto_return: "approved",
      notification_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhook-mercadopago`,
      external_reference: JSON.stringify(body),
    }

    const response = await mercadopago.preferences.create(preference)

    return NextResponse.json({
      success: true,
      init_point: response.body.init_point,
      preference_id: response.body.id,
    })
  } catch (error) {
    console.error("Error al crear preferencia de MercadoPago:", error)
    return NextResponse.json({ error: "Error al crear preferencia de pago" }, { status: 500 })
  }
}
