import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@vercel/postgres"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      nombreApellido,
      dni,
      gmail,
      telefono,
      metodoEntrega,
      metodoPago,
      items,
      total,
      diaRetiro,
      horarioRetiro,
      direccion,
      altura,
      pisoDepto,
      localidad,
      provincia,
      codigoPostal,
      instruccionesEntrega,
      estado = "pendiente",
    } = body

    // Insertar pedido en la base de datos
    const result = await sql`
      INSERT INTO pedidos (
        nombre_apellido,
        dni,
        email,
        telefono,
        metodo_entrega,
        metodo_pago,
        items,
        total,
        dia_retiro,
        horario_retiro,
        direccion,
        altura,
        piso_depto,
        localidad,
        provincia,
        codigo_postal,
        instrucciones_entrega,
        estado,
        fecha_creacion
      ) VALUES (
        ${nombreApellido},
        ${dni},
        ${gmail},
        ${telefono},
        ${metodoEntrega},
        ${metodoPago},
        ${JSON.stringify(items)},
        ${total},
        ${diaRetiro || null},
        ${horarioRetiro || null},
        ${direccion || null},
        ${altura || null},
        ${pisoDepto || null},
        ${localidad || null},
        ${provincia || null},
        ${codigoPostal || null},
        ${instruccionesEntrega || null},
        ${estado},
        NOW()
      )
      RETURNING id
    `

    const pedidoId = result.rows[0].id

    return NextResponse.json({
      success: true,
      pedidoId,
      message: "Pedido guardado exitosamente",
    })
  } catch (error) {
    console.error("Error al guardar pedido:", error)
    return NextResponse.json({ error: "Error al procesar el pedido" }, { status: 500 })
  }
}
