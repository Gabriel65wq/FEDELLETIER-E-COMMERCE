"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { ProductName } from "./products-db"

interface CartItem {
  nombre: ProductName
  cantidad: number
  precioUnitario: number
  total: number
  imagen: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (nombre: ProductName, cantidad: number, precioUnitario: number, imagen: string) => void
  removeItem: (index: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  showCart: boolean
  setShowCart: (show: boolean) => void
  showCheckout: boolean
  setShowCheckout: (show: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("fedeLettierCart")
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch (e) {
        setItems([])
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fedeLettierCart", JSON.stringify(items))
    }
  }, [items, isLoaded])

  useEffect(() => {
    if (showCart || showCheckout) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [showCart, showCheckout])

  const addItem = (nombre: ProductName, cantidad: number, precioUnitario: number, imagen: string) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.nombre === nombre)

      if (existingIndex >= 0) {
        const newItems = [...prevItems]
        newItems[existingIndex].cantidad += cantidad
        newItems[existingIndex].total = newItems[existingIndex].cantidad * newItems[existingIndex].precioUnitario
        return newItems
      } else {
        return [
          ...prevItems,
          {
            nombre,
            cantidad,
            precioUnitario,
            total: cantidad * precioUnitario,
            imagen,
          },
        ]
      }
    })
  }

  const removeItem = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.cantidad, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.total, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        getTotalItems,
        getTotalPrice,
        showCart,
        setShowCart,
        showCheckout,
        setShowCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
