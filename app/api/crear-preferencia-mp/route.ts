import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Iniciando crear-preferencia-mp...")

    const body = await request.json()
    console.log("[v0] Datos recibidos:", JSON.stringify(body, null, 2))

    // Validar variables de entorno
    const mpAccessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    console.log("[v0] Variables de entorno:")
    console.log("[v0] - MP_ACCESS_TOKEN:", mpAccessToken ? "Configurada" : "NO configurada")
    console.log("[v0] - BASE_URL:", baseUrl)
    console.log("[v0] - SUPABASE_URL:", supabaseUrl ? "Configurada" : "NO configurada")
    console.log("[v0] - SUPABASE_SERVICE_ROLE_KEY:", supabaseKey ? "Configurada" : "NO configurada")

    if (!mpAccessToken) {
      console.error("[v0] ERROR: Falta MERCADOPAGO_ACCESS_TOKEN")
      return NextResponse.json(
        {
          error: "MercadoPago no está configurado. Por favor, contacta al administrador.",
          details: "Falta MERCADOPAGO_ACCESS_TOKEN",
        },
        { status: 500 },
      )
    }

    if (!supabaseUrl || !supabaseKey) {
      console.error("[v0] ERROR: Faltan variables de entorno de Supabase")
      return NextResponse.json(
        {
          error: "Error de configuración del servidor. Por favor, contacta al administrador.",
          details: "Faltan variables de entorno de Supabase",
        },
        { status: 500 },
      )
    }

    // Generar número de pedido único
    const numeroPedido = `PED-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    console.log("[v0] Número de pedido generado:", numeroPedido)

    // Preparar items para MercadoPago
    const items = body.productos.map((producto: any) => ({
      title: producto.nombre,
      quantity: producto.cantidad,
      unit_price: producto.precio,
      currency_id: "ARS", // Cambiado de USD a ARS para Argentina
    }))

    console.log("[v0] Items preparados para MP:", JSON.stringify(items, null, 2))

    // Crear preferencia en MercadoPago
    const preferenceData = {
      items,
      payer: {
        name: body.nombreApellido || body.nombre || "",
        email: body.gmail || body.email || "",
        phone: {
          number: body.telefono || "",
        },
        identification: {
          type: "DNI",
          number: body.dni || "",
        },
      },
      back_urls: {
        success: `${baseUrl}/pago-exitoso`,
        failure: `${baseUrl}/pago-fallido`,
        pending: `${baseUrl}/pago-pendiente`,
      },
      auto_return: "approved",
      external_reference: numeroPedido,
      notification_url: `${baseUrl}/api/webhook-mp`,
      statement_descriptor: "FEDE LETTIER",
      payment_methods: {
        excluded_payment_types: [],
        installments: 12,
      },
    }

    console.log("[v0] Datos de preferencia:", JSON.stringify(preferenceData, null, 2))
    console.log("[v0] Creando preferencia en MercadoPago...")

    const mpResponse = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mpAccessToken}`,
      },
      body: JSON.stringify(preferenceData),
    })

    const mpData = await mpResponse.json()
    console.log("[v0] Respuesta de MercadoPago:", JSON.stringify(mpData, null, 2))

    if (!mpResponse.ok) {
      console.error("[v0] ERROR de MercadoPago:", mpData)
      return NextResponse.json(
        {
          error: "Error al crear la preferencia de pago en MercadoPago",
          details: mpData.message || "Error desconocido",
        },
        { status: 500 },
      )
    }

    // Guardar pedido en Supabase con preference_id
    console.log("[v0] Guardando pedido en Supabase...")
    const supabase = createClient(supabaseUrl, supabaseKey)

    const pedidoData = {
      numero_pedido: numeroPedido,
      nombre_completo: body.nombreApellido || body.nombre || "",
      dni: body.dni || "",
      email: body.gmail || body.email || "",
      telefono: body.telefono || "",
      metodo_entrega: body.metodoEntrega || "retiro",
      direccion: body.direccion || null,
      altura: body.altura || null,
      piso_depto: body.pisoDepto || null,
      localidad: body.localidad || null,
      provincia: body.provincia || null,
      codigo_postal: body.codigoPostal || null,
      instrucciones_entrega: body.instruccionesEntrega || null,
      dia_retiro: body.diaRetiro || null,
      horario_retiro: body.horarioRetiro || null,
      productos: body.productos || [],
      total: body.total || 0,
      metodo_pago: "mercadopago",
      estado: "pendiente_pago",
      mp_payment_id: null,
      mp_preference_id: mpData.id,
      mp_status: "pending",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    const { data: pedidoGuardado, error: supabaseError } = await supabase.from("pedidos").insert([pedidoData]).select()

    if (supabaseError) {
      console.error("[v0] ERROR al guardar en Supabase:", supabaseError)
      // No retornamos error aquí porque la preferencia ya fue creada
      console.warn("[v0] Preferencia creada pero no se pudo guardar en DB")
    } else {
      console.log("[v0] Pedido guardado en Supabase:", pedidoGuardado)
    }

    console.log("[v0] Preferencia creada exitosamente")
    console.log("[v0] init_point:", mpData.init_point)

    return NextResponse.json({
      success: true,
      init_point: mpData.init_point,
      preference_id: mpData.id,
      numeroPedido,
    })
  } catch (error: any) {
    console.error("[v0] ERROR en crear-preferencia-mp:", error)
    return NextResponse.json(
      {
        error: "Error al procesar la solicitud",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
