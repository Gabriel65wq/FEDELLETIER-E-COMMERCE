"use client"

import { X } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function CartModal() {
  const { items, removeItem, getTotalItems, getTotalPrice, showCart, setShowCart, setShowCheckout } = useCart()

  if (!showCart) return null

  const handleContinueToCheckout = () => {
    setShowCart(false)
    setShowCheckout(true)
  }

  return (
    <section className="carrito-seccion" style={{ display: "flex" }}>
      <div className="carrito-container">
        <div className="carrito-header">
          <h2>Mi Carrito</h2>
          <button className="cerrar-carrito" onClick={() => setShowCart(false)} aria-label="Cerrar carrito">
            <X />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="carrito-vacio">
            <svg className="carrito-vacio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h3>Tu carrito está vacío</h3>
            <p>No tienes productos en tu carrito de compras.</p>
            <button
              className="btn-primary"
              onClick={() => {
                setShowCart(false)
                document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Ver productos
            </button>
          </div>
        ) : (
          <div className="carrito-con-items">
            <div className="carrito-items">
              {items.map((item, index) => (
                <div key={index} className="carrito-item">
                  <img src={item.imagen || "/placeholder.svg"} alt={item.nombre} className="carrito-item-imagen" />
                  <div className="carrito-item-info">
                    <h4>{item.nombre}</h4>
                    <p className="carrito-item-cantidad">Cantidad: {item.cantidad}</p>
                    <p>Precio unitario: ${item.precioUnitario.toFixed(2)} USD</p>
                  </div>
                  <div className="carrito-item-acciones">
                    <span className="carrito-item-precio">${item.total.toFixed(2)} USD</span>
                    <button className="btn-eliminar" onClick={() => removeItem(index)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="carrito-resumen">
              <h3>Resumen del Pedido</h3>
              <div className="resumen-linea">
                <span>Total de productos:</span>
                <span>{getTotalItems()}</span>
              </div>
              <div className="resumen-linea total">
                <span>Total a pagar:</span>
                <span>${getTotalPrice().toFixed(2)} USD</span>
              </div>
              <button className="btn-primary" onClick={handleContinueToCheckout}>
                Continuar con el pago
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
