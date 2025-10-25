export interface ProductPrice {
  tier: string
  price: number
}

export interface PerfumeRange {
  min: number
  max: number
  price: number
}

export interface Product {
  categoria: string
  descripcion: string
  detalles: string[]
  precios?: ProductPrice[]
  rangosPerfume?: PerfumeRange[]
}

export interface CartItem {
  nombre: string
  cantidad: number
  precioUnitario: number
  total: number
  imagen: string
}

export interface CheckoutFormData {
  metodoEntrega: "retiro" | "envio"
  nombreApellido: string
  dni: string
  gmail: string
  telefono: string
  diaRetiro?: string
  horarioRetiro?: string
}
