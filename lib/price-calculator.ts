import type { Product, PerfumeRange, ProductPrice } from "@/types/product"

export function calcularPrecioPorTiers(cantidad: number, precios: ProductPrice[]): number {
  let mejorPrecio = precios[0].price
  for (const { tier, price } of precios) {
    const cantidadTier = Number.parseInt(tier.replace(/\D/g, ""), 10)
    if (!isNaN(cantidadTier) && cantidad >= cantidadTier) {
      mejorPrecio = price
    }
  }
  return mejorPrecio
}

export function calcularPrecioPerfume(totalPerfumes: number, rangosPerfume: PerfumeRange[]): number {
  if (totalPerfumes < 3) {
    return rangosPerfume[0].price
  }
  for (const { min, max, price } of rangosPerfume) {
    if (totalPerfumes >= min && totalPerfumes <= max) {
      return price
    }
  }
  return rangosPerfume[rangosPerfume.length - 1].price
}

export function calcularPrecioProducto(producto: Product, cantidad: number): number {
  if (producto.categoria === "Perfumes" && producto.rangosPerfume) {
    return calcularPrecioPerfume(cantidad, producto.rangosPerfume)
  } else if (producto.precios) {
    return calcularPrecioPorTiers(cantidad, producto.precios)
  }
  return 0
}
