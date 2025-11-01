import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN || ""
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!MERCADOPAGO_ACCESS_TOKEN) {
      return NextResponse.json({ error: "MercadoPago no está configurado" }, { status: 500 })
    }

    // Generar número de pedido único
    const numeroPedido = `PED-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Preparar items para MercadoPago
    const items = body.items.map((item: any) => ({
      title: item.nombre,
      quantity: item.cantidad,
      unit_price: item.precioUnitario,
      currency_id: "USD",
    }))

    // Crear preferencia en MercadoPago
    const preference = {
      items,
      payer: {
        name: body.nombreApellido,
        email: body.gmail,
        phone: {
          number: body.telefono,
        },
        identification: {
          type: "DNI",
          number: body.dni,
        },
      },
      back_urls: {
        success: `${BASE_URL}?payment_id={{payment_id}}&status=approved&external_reference=${numeroPedido}`,
        failure: `${BASE_URL}?payment_id={{payment_id}}&status=failure`,
        pending: `${BASE_URL}?payment_id={{payment_id}}&status=pending`,
      },
      auto_return: "approved",
      external_reference: numeroPedido,
      notification_url: `${BASE_URL}/api/webhook-mp`,
      statement_descriptor: "FEDE LETTIER",
    }

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(preference),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Error de MercadoPago:", errorData)
      return NextResponse.json({ error: "Error al crear preferencia de pago" }, { status: 500 })
    }

    const data = await response.json()

    // Guardar pedido en la base de datos con estado "pendiente_pago"
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey)

      const pedidoData = {
        numero_pedido: numeroPedido,
        nombre_apellido: body.nombreApellido,
        dni: body.dni,
        email: body.gmail,
        telefono: body.telefono,
        metodo_entrega: body.metodoEntrega,
        metodo_pago: "mercadopago",
        estado: "pendiente_pago",
        total: body.total,
        items: JSON.stringify(body.items),
        dia_retiro: body.diaRetiro || null,
        horario_retiro: body.horarioRetiro || null,
        direccion: body.direccion || null,
        altura: body.altura || null,
        piso_depto: body.pisoDepto || null,
        localidad: body.localidad || null,
        provincia: body.provincia || null,
        codigo_postal: body.codigoPostal || null,
        instrucciones_entrega: body.instruccionesEntrega || null,
        mp_preference_id: data.id,
        created_at: new Date().toISOString(),
      }

      await supabase.from("pedidos").insert([pedidoData])
    }

    return NextResponse.json({
      success: true,
      init_point: data.init_point,
      preference_id: data.id,
      numeroPedido,
    })
  } catch (error) {
    console.error("Error en crear-preferencia-mp:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
