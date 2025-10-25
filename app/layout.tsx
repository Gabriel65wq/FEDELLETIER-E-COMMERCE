import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { CartModal } from "@/components/cart-modal"
import { CheckoutModal } from "@/components/checkout-modal"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fede Lettier - Importador Directo",
  description:
    "Importador directo de productos. Venta minorista y mayorista con envíos y retiros. +1000 clientes satisfechos.",
  keywords: "importador, productos apple, vapes, perfumes, mayorista, minorista",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.className} no-transition`}>
        <CartProvider>
          {children}
          <CartModal />
          <CheckoutModal />
        </CartProvider>
      </body>
    </html>
  )
}
