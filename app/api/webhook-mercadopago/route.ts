import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@vercel/postgres"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Verificar el tipo de notificación
    if (body.type === "payment") {
      const mercadopago = require("mercadopago")
      mercadopago.configure({
        access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
      })

      // Obtener información del pago
      const payment = await mercadopago.payment.findById(body.data.id)
      const externalReference = JSON.parse(payment.body.external_reference)

      // Actualizar o crear pedido según el estado del pago
      if (payment.body.status === "approved") {
        await sql`
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
            mercadopago_payment_id,
            fecha_creacion
          ) VALUES (
            ${externalReference.nombreApellido},
            ${externalReference.dni},
            ${externalReference.gmail},
            ${externalReference.telefono},
            ${externalReference.metodoEntrega},
            'mercadopago',
            ${JSON.stringify(externalReference.items)},
            ${externalReference.total},
            ${externalReference.diaRetiro || null},
            ${externalReference.horarioRetiro || null},
            ${externalReference.direccion || null},
            ${externalReference.altura || null},
            ${externalReference.pisoDepto || null},
            ${externalReference.localidad || null},
            ${externalReference.provincia || null},
            ${externalReference.codigoPostal || null},
            ${externalReference.instruccionesEntrega || null},
            'pagado',
            ${payment.body.id},
            NOW()
          )
        `
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error en webhook de MercadoPago:", error)
    return NextResponse.json({ error: "Error al procesar webhook" }, { status: 500 })
  }
}
