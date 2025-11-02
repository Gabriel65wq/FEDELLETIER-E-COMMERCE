import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fede Lettier - Importador Directo",
  description:
    "Importador directo de productos. Venta minorista y mayorista con envíos y retiros. +1000 clientes satisfechos.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/mobile-adjustments.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
