"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"

export function CheckoutModal() {
  const { items, getTotalPrice, showCheckout, setShowCheckout, setShowCart, clearCart } = useCart()
  const [metodoEntrega, setMetodoEntrega] = useState<"retiro" | "envio">("retiro")

  if (!showCheckout) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = {
      metodoEntrega,
      nombreApellido: (form.elements.namedItem("nombreApellido") as HTMLInputElement).value,
      dni: (form.elements.namedItem("dni") as HTMLInputElement).value,
      gmail: (form.elements.namedItem("gmail") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      diaRetiro: (form.elements.namedItem("diaRetiro") as HTMLInputElement)?.value,
      horarioRetiro: (form.elements.namedItem("horarioRetiro") as HTMLInputElement)?.value,
      items,
      total: getTotalPrice(),
    }

    console.log("Pedido realizado:", formData)
    alert("¡Pedido realizado con éxito! Federico se pondrá en contacto contigo para confirmar.")

    clearCart()
    setShowCheckout(false)
    form.reset()
  }

  return (
    <section className="checkout-seccion" style={{ display: "block" }}>
      <div className="checkout-container">
        <div className="checkout-header">
          <h2>Finalizar Compra</h2>
        </div>

        <div className="checkout-content">
          <div className="checkout-resumen">
            <h3>Resumen del Pedido</h3>
            <div className="checkout-items">
              {items.map((item, index) => (
                <div key={index} className="checkout-item">
                  <div className="checkout-item-info">
                    <div className="checkout-item-nombre">{item.nombre}</div>
                    <div className="checkout-item-cantidad">Cantidad: {item.cantidad}</div>
                  </div>
                  <div className="checkout-item-precio">${item.total.toFixed(2)} USD</div>
                </div>
              ))}
            </div>
            <div className="checkout-total">
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)} USD</span>
            </div>
          </div>

          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Método de entrega</h3>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="metodo-entrega"
                      value="retiro"
                      checked={metodoEntrega === "retiro"}
                      onChange={(e) => setMetodoEntrega(e.target.value as "retiro")}
                    />
                    <span>Retiro en persona</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="metodo-entrega"
                      value="envio"
                      checked={metodoEntrega === "envio"}
                      onChange={(e) => setMetodoEntrega(e.target.value as "envio")}
                    />
                    <span>Envío por Vía Cargo</span>
                  </label>
                </div>
              </div>

              <div className="form-section">
                <h3>Información personal</h3>
                <p className="form-disclaimer">
                  Por favor, complete sus datos personales para procesar correctamente su pedido.
                </p>

                <div className="form-group">
                  <label htmlFor="nombre-apellido">Nombre y Apellido</label>
                  <input type="text" id="nombre-apellido" name="nombreApellido" required />
                </div>

                <div className="form-group">
                  <label htmlFor="dni">DNI</label>
                  <input type="text" id="dni" name="dni" required />
                </div>

                <div className="form-group">
                  <label htmlFor="gmail">Gmail</label>
                  <input type="email" id="gmail" name="gmail" required />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono de contacto</label>
                  <input type="tel" id="telefono" name="telefono" required />
                </div>
              </div>

              {metodoEntrega === "retiro" && (
                <div className="form-section">
                  <h3>Coordinar retiro</h3>
                  <p className="form-disclaimer">
                    Por favor, indique el día y horario para retirar su pedido. Federico se pondrá en contacto para
                    confirmar.
                  </p>

                  <div className="form-group">
                    <label htmlFor="dia-retiro">Día de retiro</label>
                    <input type="date" id="dia-retiro" name="diaRetiro" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="horario-retiro">Horario de retiro</label>
                    <input type="time" id="horario-retiro" name="horarioRetiro" min="09:00" max="17:00" required />
                    <small>Horario disponible: 9:00 AM a 5:00 PM</small>
                  </div>
                </div>
              )}

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setShowCheckout(false)
                    setShowCart(true)
                  }}
                >
                  Volver al carrito
                </button>
                <button type="submit" className="btn-primary">
                  Continuar al pago
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
