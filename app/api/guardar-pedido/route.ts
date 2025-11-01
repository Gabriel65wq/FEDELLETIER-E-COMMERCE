import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Configuración de base de datos no disponible" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Generar número de pedido único
    const numeroPedido = `PED-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

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

    // Insertar en la base de datos
    const { data, error } = await supabase.from("pedidos").insert([pedidoData]).select()

    if (error) {
      console.error("Error al guardar pedido:", error)
      return NextResponse.json({ error: "Error al guardar el pedido en la base de datos" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      numeroPedido,
      data: data[0],
    })
  } catch (error) {
    console.error("Error en guardar-pedido:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
