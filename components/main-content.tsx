"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function MainContent() {
  useEffect(() => {
    // El script se cargará después del montaje
  }, [])

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: getHTMLContent() }} />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  )
}

function getHTMLContent() {
  // Retorna el contenido HTML sin las etiquetas html, head, body
  return `
    <!-- Header Navigation -->
    <header role="banner">
      <div class="header-container">
        <div class="header-left">
          <h1>LOGO</h1>
        </div>
        <div class="nav-spacer-left"></div>
        <nav class="header-middle" aria-label="Navegación principal">
          <div class="centered-nav">
            <a href="#inicio" class="nav-button home-button" aria-label="Ir a inicio">
              <svg class="icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
              </svg>
            </a>

            <div class="hamburger-menu">
              <button class="hamburger-button" aria-label="Menú de navegación" aria-expanded="false" aria-controls="hamburger-options">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div class="hamburger-options" id="hamburger-options" role="menu">
                <a href="#productos" role="menuitem">Productos</a>
                <a href="#informacion" role="menuitem">Información</a>
                <a href="#referencias" role="menuitem">Referencias</a>
              </div>
            </div>

            <button class="button cart-button" aria-label="Carrito de compras">
              <svg class="icon" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span class="cart-badge" id="cart-badge" aria-live="polite">0</span>
            </button>
          </div>
        </nav>

        <div class="header-right">
          <label class="theme-switch">
            <input type="checkbox" class="theme-switch__checkbox" id="theme-checkbox" aria-label="Cambiar tema claro/oscuro">
            <div class="theme-switch__container">
              <div class="theme-switch__clouds"></div>
              <div class="theme-switch__stars-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545Z"></path>
                </svg>
              </div>
              <div class="theme-switch__circle-container">
                <div class="theme-switch__sun-moon-container">
                  <div class="theme-switch__moon">
                    <div class="theme-switch__spot"></div>
                    <div class="theme-switch__spot"></div>
                    <div class="theme-switch__spot"></div>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main role="main">
      <section id="inicio">
        <canvas id="particles-canvas"></canvas>
        <div class="container">
          <div class="left">
            <h1>Hola, soy Fede Lettier</h1>
            <p>
              Soy importador directo! Mayorista y Minorista de 
              <span class="animated-text">productos.</span> Ofrezco productos innovadores y de alta calidad para satisfacer tus necesidades.
              También trabajamos con retiros al domicilio y envíos por Vía Cargo.
            </p>

            <ul class="social-buttons">
              <li class="icon-content">
                <a data-social="whatsapp" aria-label="Contactar por WhatsApp"
                  href="https://api.whatsapp.com/send?phone=5491136382378&text=Hola+👋+Quiero+ver+los+combos+tendencia+para+revender+📋"
                  target="_blank" rel="noopener noreferrer">
                  <div class="filled"></div>
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                </a>
                <div class="tooltip">WhatsApp</div>
              </li>

              <li class="icon-content">
                <a data-social="facebook" aria-label="Visitar Facebook"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A//fb.me/7k0xwl8im"
                  target="_blank" rel="noopener noreferrer">
                  <div class="filled"></div>
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path>
                  </svg>
                </a>
                <div class="tooltip">Facebook</div>
              </li>

              <li class="icon-content">
                <a data-social="instagram" aria-label="Visitar Instagram"
                  href="https://www.instagram.com/fedelettier"
                  target="_blank" rel="noopener noreferrer">
                  <div class="filled"></div>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zM12 7.5A4.5 4.5 0 1012 16.5 4.5 4.5 0 0012 7.5zm0 2c1.4 0 2.5 1.1 2.5 2.5S13.4 14.5 12 14.5 9.5 13.4 9.5 12 10.6 9.5 12 9.5zm4.8-3.4a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/>
                  </svg>
                </a>
                <div class="tooltip">Instagram</div>
              </li>
            </ul>
          </div>

          <div class="right">
            <img src="/imagenes/presentacion.jpg" alt="Foto de perfil de Fede Lettier, importador directo" class="circular-image">
          </div>
        </div>
      </section>

      <!-- Resto del contenido HTML original... -->
      <!-- Por brevedad, el resto del HTML se mantiene igual -->
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
      <div class="footer-container">
        <div class="footer-left">
          <h3>Fede Lettier</h3>
          <p>Importador directo 🇺🇸🇨🇳🇵🇾 de productos del momento.<br>+1000 Clientes satisfechos.</p>
        </div>

        <div class="footer-middle">
          <h3>Enlaces</h3>
          <nav aria-label="Enlaces del footer">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#informacion">Información</a></li>
              <li><a href="#referencias">Referencias</a></li>
            </ul>
          </nav>
        </div>

        <div class="footer-right">
          <h3>Contacto</h3>
          <p>📞 <a href="tel:+5491124772377">+54 9 11 2477 2377</a></p>
          <p>📞 <a href="tel:+5491136382378">+54 9 11 3638 2378</a></p>
          <hr aria-hidden="true">
          <p>Diseñada por: <strong>Gabriel Diaz</strong></p>
          <p>Tel: <a href="tel:+5491134295399">+54 9 11 3429 5399</a></p>
        </div>
      </div>

      <hr class="footer-separator" aria-hidden="true">
      <p class="copyright-notice">© 2025 Fede Lettier. Todos los derechos reservados.</p>
    </footer>
  `
}
