"use client"

import { useState } from "react"

export function ReferencesSection() {
  const [showGallery, setShowGallery] = useState(false)

  const allReferences = Array.from({ length: 20 }, (_, i) => `/imagenes/referencias${i + 1}.jpg`)

  return (
    <>
      <section id="referencias">
        <h2 className="referencias-titulo">Referencias</h2>

        <p className="referencias-descripcion">
          ✅ +1000 clientes satisfechos en todo el país
          <br />📦 Envíos diarios por transporte y retiros coordinados
          <br />💬 Testimonios reales de WhatsApp
        </p>

        <div className="referencias-galeria">
          <img src="/imagenes/referencias1.jpg" alt="Testimonio de cliente satisfecho 1" className="ref-img" />
          <img src="/imagenes/referencias2.jpg" alt="Testimonio de cliente satisfecho 2" className="ref-img" />
          <img src="/imagenes/referencias3.jpg" alt="Testimonio de cliente satisfecho 3" className="ref-img" />
        </div>

        <div className="referencias-boton">
          <button className="ver-todas-btn" onClick={() => setShowGallery(true)}>
            <span>Ver todas las referencias</span>
          </button>
        </div>
      </section>

      {showGallery && (
        <section className="galeria-oculta" style={{ display: "flex" }}>
          <div className="galeria-container">
            <div className="galeria-top">
              <button
                className="ver-todas-btn volver-animado"
                onClick={() => setShowGallery(false)}
                aria-label="Volver a la sección de referencias"
              >
                ← Volver atrás
              </button>
              <h2 className="galeria-titulo">Galería de Referencias</h2>
            </div>

            <div className="galeria-imagenes" role="list">
              {allReferences.map((src, index) => (
                <img
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt={`Referencia ${index + 1}`}
                  onClick={(e) => {
                    const viewer = document.createElement("div")
                    viewer.classList.add("galeria-imagen-principal")
                    viewer.innerHTML = `<img src="${src}" alt="Referencia ampliada">`
                    document.body.appendChild(viewer)
                    viewer.addEventListener("click", (e) => {
                      if (e.target === viewer) viewer.remove()
                    })
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
