import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Iniciando guardar-pedido")

    const body = await request.json()
    console.log("[v0] Datos recibidos:", { ...body, items: `${body.items?.length} items` })

    if (!supabaseUrl || !supabaseKey) {
      console.error("[v0] Error: Variables de Supabase no configuradas")
      console.error("[v0] SUPABASE_URL:", supabaseUrl ? "✓ Configurada" : "✗ No configurada")
      console.error("[v0] SUPABASE_SERVICE_ROLE_KEY:", supabaseKey ? "✓ Configurada" : "✗ No configurada")
      return NextResponse.json(
        {
          error:
            "Configuración de base de datos no disponible. Por favor, configura las variables de entorno SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY",
        },
        { status: 500 },
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Generar número de pedido único
    const numeroPedido = `PED-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    console.log("[v0] Número de pedido generado:", numeroPedido)

    // Preparar datos del pedido
    const pedidoData = {
      numero_pedido: numeroPedido,
      nombre_apellido: body.nombreApellido,
      dni: body.dni,
      email: body.gmail,
      telefono: body.telefono,
      metodo_entrega: body.metodoEntrega,
      metodo_pago: body.metodoPago || "efectivo",
      estado: body.estado || "pendiente",
      total: body.total,
      items: JSON.stringify(body.items),
      // Datos de retiro
      dia_retiro: body.diaRetiro || null,
      horario_retiro: body.horarioRetiro || null,
      // Datos de envío
      direccion: body.direccion || null,
      altura: body.altura || null,
      piso_depto: body.pisoDepto || null,
      localidad: body.localidad || null,
      provincia: body.provincia || null,
      codigo_postal: body.codigoPostal || null,
      instrucciones_entrega: body.instruccionesEntrega || null,
      created_at: new Date().toISOString(),
    }

    console.log("[v0] Insertando pedido en base de datos...")

    // Insertar en la base de datos
    const { data, error } = await supabase.from("pedidos").insert([pedidoData]).select()

    if (error) {
      console.error("[v0] Error al guardar pedido en Supabase:", error)
      return NextResponse.json(
        {
          error: `Error al guardar el pedido: ${error.message}`,
        },
        { status: 500 },
      )
    }

    console.log("[v0] Pedido guardado exitosamente:", numeroPedido)

    return NextResponse.json({
      success: true,
      numeroPedido,
      data: data[0],
    })
  } catch (error) {
    console.error("[v0] Error en guardar-pedido:", error)
    return NextResponse.json(
      {
        error: `Error interno del servidor: ${error instanceof Error ? error.message : "Error desconocido"}`,
      },
      { status: 500 },
    )
  }
}
