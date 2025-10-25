"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { ProductDetailModal } from "./product-detail-modal"
import { PRODUCTOS_DB, type ProductName } from "@/lib/products-db"

const categories = ["todos", "Accesorios Apple", "Varios", "Vapes", "Perfumes"] as const

const products: Array<{ name: ProductName; image: string }> = [
  { name: "AirPods Pro 2da Gen", image: "/imagenes/apple1.jpg" },
  { name: "Cable + Cargador", image: "/imagenes/apple2.jpg" },
  { name: "Cargadores Completos", image: "/imagenes/apple3.jpg" },
  { name: "Battery Pack 🔋", image: "/imagenes/apple4.jpg" },
  { name: "Funda Silicon Case I11 - 16Pro Max 📱", image: "/imagenes/apple5.jpg" },
  { name: "AirPods Max 🎧", image: "/imagenes/apple6.jpg" },
  { name: "​Aspiradora Robot 🤖", image: "/imagenes/varios.jpg" },
  { name: "JBL GO3", image: "/imagenes/varios.jpg" },
  { name: "Torch 7.5G 🌸", image: "/imagenes/vapes1.jpg" },
  { name: "ElfThc 5g Edición Limitada 💨", image: "/imagenes/vapes2.jpg" },
  { name: "ElfThc 3000mg Edición Limitada 💨", image: "/imagenes/vapes3.jpg" },
  { name: "Elfbar 40K Puff 💨", image: "/imagenes/vapes4.jpg" },
  { name: "Ignite V400 40mil 💨", image: "/imagenes/vapes5.jpg" },
  { name: "Lost Mary Mixer 30.000 Puffs 💨", image: "/imagenes/vapes6.jpg" },
  { name: "IGNITE V250 25.000 Puffs 💨", image: "/imagenes/vapes7.jpg" },
  { name: "IGNITE V150 15.000 Puffs 💨", image: "/imagenes/vapes8.jpg" },
  { name: "Elfbar Ice King 40.000 Puffs 💨", image: "/imagenes/vapes9.jpg" },
  { name: "AL HARAMAIN AMBER OUD GOLD EDITION EDP 100ml 🌟", image: "/imagenes/perfumes1.jpg" },
  { name: "BHARARA KING EDP 150ml 👑", image: "/imagenes/perfumes2.jpg" },
  { name: "LATTAFA FAKHAR DORADO EDP 100ml ✨", image: "/imagenes/perfumes3.jpg" },
  { name: "ARMAF CLUB DE NUIT INTENSE MAN EDT 105ml 🖤", image: "/imagenes/perfumes4.jpg" },
  { name: "LATTAFA KHAMRAH EDP 100ml 🍯", image: "/imagenes/perfumes5.jpg" },
  { name: "LATTAFA ASAD EDP 100ml 🦁", image: "/imagenes/perfumes6.jpg" },
  { name: "LATTAFA BADE'E AL OUD SUBLIME 100ml 🌹", image: "/imagenes/perfumes8.jpg" },
  { name: "LATTAFA YARA PINK EDP 100ml 🌸", image: "/imagenes/perfumes9.jpg" },
  { name: "LATTAFA YARA CANDY EDP 100ml 🍭", image: "/imagenes/perfumes10.jpg" },
  { name: "LATTAFA YARA MOI EDP 100ml 💖", image: "/imagenes/perfumes11.jpg" },
  { name: "LATTAFA BADEE AL OUD NOBLE BLUSH EDP 100ml 🌺", image: "/imagenes/perfumes12.jpg" },
  { name: "LATTAFA FAKHAR ROSE EDP 100ml 🌹", image: "/imagenes/perfumes13.jpg" },
]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("todos")
  const [selectedProduct, setSelectedProduct] = useState<{ name: ProductName; image: string } | null>(null)

  const filteredProducts = products.filter((product) => {
    if (activeCategory === "todos") return true
    return PRODUCTOS_DB[product.name].categoria === activeCategory
  })

  return (
    <>
      <section id="productos">
        <h2 className="productos-titulo">Nuestros Productos</h2>

        <div className="productos-filtros">
          {categories.map((category) => (
            <button
              key={category}
              className={`filtro-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              <span>{category === "todos" ? "Todos" : category}</span>
            </button>
          ))}
        </div>

        <div className="productos-grid">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`}
              name={product.name}
              image={product.image}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </section>

      {selectedProduct && (
        <ProductDetailModal
          productName={selectedProduct.name}
          productImage={selectedProduct.image}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  )
}
