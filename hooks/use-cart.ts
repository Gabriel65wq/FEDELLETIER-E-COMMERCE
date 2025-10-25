"use client"

import { useState, useEffect } from "react"
import type { CartItem } from "@/types/product"

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("fedeLettierCart")
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch (e) {
        setItems([])
      }
    }
  }, [])

  const saveToStorage = (newItems: CartItem[]) => {
    localStorage.setItem("fedeLettierCart", JSON.stringify(newItems))
    setItems(newItems)
  }

  const addItem = (nombre: string, cantidad: number, precioUnitario: number, imagen: string) => {
    const existingIndex = items.findIndex((item) => item.nombre === nombre)

    if (existingIndex >= 0) {
      const newItems = [...items]
      newItems[existingIndex].cantidad += cantidad
      newItems[existingIndex].total = newItems[existingIndex].cantidad * newItems[existingIndex].precioUnitario
      saveToStorage(newItems)
    } else {
      const newItems = [
        ...items,
        {
          nombre,
          cantidad,
          precioUnitario,
          total: cantidad * precioUnitario,
          imagen,
        },
      ]
      saveToStorage(newItems)
    }
  }

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index)
    saveToStorage(newItems)
  }

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.cantidad, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.total, 0)
  }

  const clear = () => {
    saveToStorage([])
  }

  return {
    items,
    addItem,
    removeItem,
    getTotalItems,
    getTotalPrice,
    clear,
  }
}
