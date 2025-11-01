import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Iniciando guardar-pedido...")

    const body = await request.json()
    console.log("[v0] Datos recibidos:", JSON.stringify(body, null, 2))

    // Validar variables de entorno
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error("[v0] ERROR: Faltan variables de entorno de Supabase")
      console.error("[v0] SUPABASE_URL:", supabaseUrl ? "Configurada" : "NO configurada")
      console.error("[v0] SUPABASE_SERVICE_ROLE_KEY:", supabaseKey ? "Configurada" : "NO configurada")

      return NextResponse.json(
        {
          error: "Error de configuración del servidor. Por favor, contacta al administrador.",
          details: "Faltan variables de entorno de Supabase",
        },
        { status: 500 },
      )
    }

    console.log("[v0] Variables de entorno OK")

    // Crear cliente de Supabase
    const supabase = createClient(supabaseUrl, supabaseKey)
    console.log("[v0] Cliente de Supabase creado")

    // Generar número de pedido único
    const numeroPedido = `PED-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    console.log("[v0] Número de pedido generado:", numeroPedido)

    // Preparar datos del pedido
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
      metodo_pago: body.metodoPago || "efectivo",
      estado: body.estado || "pendiente",
      mp_payment_id: null,
      mp_preference_id: null,
      mp_status: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    console.log("[v0] Datos del pedido preparados:", JSON.stringify(pedidoData, null, 2))

    // Insertar en Supabase
    console.log("[v0] Insertando en Supabase...")
    const { data, error } = await supabase.from("pedidos").insert([pedidoData]).select()

    if (error) {
      console.error("[v0] ERROR al insertar en Supabase:", error)
      return NextResponse.json(
        {
          error: "Error al guardar el pedido en la base de datos",
          details: error.message,
        },
        { status: 500 },
      )
    }

    console.log("[v0] Pedido guardado exitosamente:", data)

    return NextResponse.json({
      success: true,
      numeroPedido,
      pedido: data[0],
    })
  } catch (error: any) {
    console.error("[v0] ERROR en guardar-pedido:", error)
    return NextResponse.json(
      {
        error: "Error al procesar el pedido",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
