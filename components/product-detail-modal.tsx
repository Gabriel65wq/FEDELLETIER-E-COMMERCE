"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { PRODUCTOS_DB, type ProductName, calcularPrecioPorTiers, calcularPrecioPerfume } from "@/lib/products-db"
import { useCart } from "@/lib/cart-context"

interface ProductDetailModalProps {
  productName: ProductName
  productImage: string
  onClose: () => void
}

export function ProductDetailModal({ productName, productImage, onClose }: ProductDetailModalProps) {
  const [cantidad, setCantidad] = useState(1)
  const [selectedTier, setSelectedTier] = useState<number | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const { addItem } = useCart()

  const product = PRODUCTOS_DB[productName]

  const precioUnitario =
    product.categoria === "Perfumes" && product.rangosPerfume
      ? calcularPrecioPerfume(cantidad, product.rangosPerfume)
      : calcularPrecioPorTiers(cantidad, product.precios || [])

  const total = cantidad * precioUnitario

  const handleAddToCart = () => {
    addItem(productName, cantidad, precioUnitario, productImage)
    setShowSuccess(true)
    setTimeout(() => {
      onClose()
    }, 1500)
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <section
      className="detalle-modal"
      style={{ display: "flex" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="detalle-contenido">
        <button className="cerrar-detalle" onClick={onClose} aria-label="Cerrar detalle del producto">
          <X />
        </button>

        <div className="detalle-info">
          <div className="detalle-imagen-container">
            <img src={productImage || "/placeholder.svg"} alt={productName} />
          </div>

          <div className="detalle-texto">
            <h2>{productName}</h2>
            <p className="detalle-categoria">{product.categoria}</p>
            <hr className="detalle-divider" />

            <div className="detalle-descripcion-section">
              <h3>Descripción</h3>
              <p>{product.descripcion}</p>
            </div>

            <div className="detalle-detalles-section">
              <h3>Detalles</h3>
              <ul>
                {product.detalles.map((detalle, index) => (
                  <li key={index}>{detalle}</li>
                ))}
              </ul>
            </div>

            <hr className="detalle-divider" />

            <div className="detalle-precios-section">
              <h3>Precios por Cantidad</h3>
              <div className="detalle-tabla-moderna">
                {product.categoria === "Perfumes" && product.rangosPerfume
                  ? product.rangosPerfume.map(([min, max, price], index) => {
                      const rangoTxt = max === Number.POSITIVE_INFINITY ? `${min}+` : `${min}-${max}`
                      return (
                        <div
                          key={index}
                          className={`precio-card ${selectedTier === min ? "selected" : ""}`}
                          onClick={() => {
                            setCantidad(min)
                            setSelectedTier(min)
                          }}
                        >
                          <span className="precio-cantidad">{rangoTxt}</span>
                          <span className="precio-valor">${price.toFixed(2)} USD</span>
                        </div>
                      )
                    })
                  : product.precios?.map(([cant, price], index) => {
                      const cantidadNumerica = Number.parseInt(String(cant).replace(/\D/g, ""), 10)
                      return (
                        <div
                          key={index}
                          className={`precio-card ${selectedTier === cantidadNumerica ? "selected" : ""}`}
                          onClick={() => {
                            setCantidad(cantidadNumerica)
                            setSelectedTier(cantidadNumerica)
                          }}
                        >
                          <span className="precio-cantidad">{cant}</span>
                          <span className="precio-valor">${price.toFixed(2)} USD</span>
                        </div>
                      )
                    })}
              </div>
            </div>

            <div className="detalle-cantidad">
              <label htmlFor="cantidad">Cantidad:</label>
              <input
                type="number"
                id="cantidad"
                value={cantidad}
                onChange={(e) => setCantidad(Math.max(1, Number.parseInt(e.target.value) || 1))}
                min="1"
                aria-label="Cantidad de productos"
              />
            </div>

            <p className="detalle-precio-total">Total: ${total.toFixed(2)} USD</p>
            <button
              className="detalle-boton"
              onClick={handleAddToCart}
              style={showSuccess ? { background: "linear-gradient(90deg, #28a745, #34ce57)" } : {}}
            >
              {showSuccess ? "✓ Agregado" : "Agregar al carrito"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
