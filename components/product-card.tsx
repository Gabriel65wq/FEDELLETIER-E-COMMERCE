"use client"

import { PRODUCTOS_DB, type ProductName } from "@/lib/products-db"

interface ProductCardProps {
  name: ProductName
  image: string
  onClick: () => void
}

export function ProductCard({ name, image, onClick }: ProductCardProps) {
  const product = PRODUCTOS_DB[name]

  // Get the starting price
  let startingPrice = ""
  if (product.categoria === "Perfumes" && product.rangosPerfume) {
    startingPrice = `Desde $${product.rangosPerfume[0][2]} USD`
  } else if (product.precios) {
    const maxQuantity = product.precios[product.precios.length - 1][0]
    const minPrice = product.precios[product.precios.length - 1][1]
    startingPrice = `Desde $${minPrice} USD (hasta ${maxQuantity})`
  }

  return (
    <div className="producto-card visible" data-category={product.categoria} data-nombre={name} onClick={onClick}>
      <img src={image || "/placeholder.svg"} alt={name} />
      <h3>{name}</h3>
      <p>{startingPrice}</p>
      <span>{product.categoria}</span>
    </div>
  )
}
