"use client"

import { useEffect } from "react"

export default function MainContent() {
  useEffect(() => {
    // El script se cargará después del montaje
    // Cargar el script principal
    const script = document.createElement("script")
    script.src = "/script.js"
    script.async = true
    document.body.appendChild(script)

    // Cargar MercadoPago SDK
    const mpScript = document.createElement("script")
    mpScript.src = "https://sdk.mercadopago.com/js/v2"
    mpScript.async = true
    document.body.appendChild(mpScript)

    return () => {
      // Limpiar scripts al desmontar
      document.body.removeChild(script)
      document.body.removeChild(mpScript)
    }
  }, [])

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: getHTMLContent() }} />
      {/* The original Script components are no longer needed as they are now handled in useEffect */}
    </>
  )
}

function getHTMLContent() {
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

      <!-- Sección Productos -->
      <section id="productos">
        <h2 class="productos-titulo">Nuestros Productos</h2>

        <div class="productos-filtros">
          <button class="filtro-btn active" data-category="todos"><span>Todos</span></button>
          <button class="filtro-btn" data-category="Accesorios Apple"><span>Accesorios Apple</span></button>
          <button class="filtro-btn" data-category="Varios"><span>Varios</span></button>
          <button class="filtro-btn" data-category="Vapes"><span>Vapes</span></button>
          <button class="filtro-btn" data-category="Perfumes"><span>Perfumes</span></button>
        </div>

        <div class="productos-grid">
          <!-- Accesorios Apple -->
          <div class="producto-card" data-category="Accesorios Apple" data-nombre="AirPods Pro 2da Gen">
            <img src="/imagenes/apple1.jpg" alt="AirPods Pro 2da Generación con cancelación de ruido">
            <h3>AirPods Pro 2da Gen</h3>
            <p>Desde $8.5 USD (hasta 500x)</p>
            <span>Accesorios Apple</span>
          </div>

          <div class="producto-card" data-category="Accesorios Apple" data-nombre="Cable + Cargador">
            <img src="/imagenes/apple2.jpg" alt="Cable Lightning y cargador USB-C de 20W">
            <h3>Cable + Cargador</h3>
            <p>Desde $3.2 USD (hasta 100x)</p>
            <span>Accesorios Apple</span>
          </div>

          <div class="producto-card" data-category="Accesorios Apple" data-nombre="Cargadores Completos">
            <img src="/imagenes/apple3.jpg" alt="Kit completo de cargador Apple">
            <h3>Cargadores Completos</h3>
            <p>Desde $3.2 USD (hasta 100x)</p>
            <span>Accesorios Apple</span>
          </div>

          <div class="producto-card" data-category="Accesorios Apple" data-nombre="Battery Pack 🔋">
            <img src="/imagenes/apple4.jpg" alt="Batería externa MagSafe oficial de Apple">
            <h3>Battery Pack 🔋</h3>
            <p>Desde $8 USD (hasta 50x)</p>
            <span>Accesorios Apple</span>
          </div>

          <div class="producto-card" data-category="Accesorios Apple" data-nombre="Funda Silicon Case I11 - 16Pro Max 📱">
            <img src="/imagenes/apple5.jpg" alt="Fundas de silicona premium para iPhone">
            <h3>Funda Silicon Case I11 - 16Pro Max 📱</h3>
            <p>Desde $1.3 USD (hasta 300x)</p>
            <span>Accesorios Apple</span>
          </div>

          <div class="producto-card" data-category="Accesorios Apple" data-nombre="AirPods Max 🎧">
            <img src="/imagenes/apple6.jpg" alt="Auriculares over-ear premium AirPods Max">
            <h3>AirPods Max 🎧</h3>
            <p>Desde $13 USD (hasta 50x)</p>
            <span>Accesorios Apple</span>
          </div>

          <!-- Varios -->
          <div class="producto-card" data-category="Varios" data-nombre="​Aspiradora Robot 🤖">
            <img src="/imagenes/varios.jpg" alt="Aspiradora robot inteligente SWEEPOL">
            <h3>Aspiradora Robot 🤖</h3>
            <p>Desde $16 USD</p>
            <span>Varios</span>
          </div>

          <div class="producto-card" data-category="Varios" data-nombre="JBL GO3">
            <img src="/imagenes/varios.jpg" alt="Altavoz portátil JBL GO3">
            <h3>JBL GO3</h3>
            <p>Desde $8.5 USD (hasta 100x)</p>
            <span>Varios</span>
          </div>

          <!-- Vapes -->
          <div class="producto-card" data-category="Vapes" data-nombre="Torch 7.5G 🌸">
            <img src="/imagenes/vapes1.jpg" alt="Vape desechable Torch 7.5G">
            <h3>Torch 7.5G 🌸</h3>
            <p>Desde $27 USD (hasta 100x)</p>
            <span>Vapes</span>
          </div>

          <div class="producto-card" data-category="Vapes" data-nombre="ElfThc 5g Edición Limitada 💨">
            <img src="/imagenes/vapes2.jpg" alt="Vape desechable ElfThc 5g edición limitada">
            <h3>ElfThc 5g Edición Limitada 💨</h3>
            <p>Desde $21.5 USD (hasta 100x)</p>
            <span>Vapes</span>
          </div>

          <div class="producto-card" data-category="Vapes" data-nombre="ElfThc 3000mg Edición Limitada 💨">
            <img src="/imagenes/vapes3.jpg" alt="Vape desechable ElfThc 3000mg">
            <h3>ElfThc 3000mg Edición Limitada 💨</h3>
            <p>Desde $16 USD (hasta 100x)</p>
            <span>Vapes</span>
          </div>

          <div class="producto-card" data-category="Vapes" data-nombre="Elfbar 40K Puff 💨">
            <img src="/imagenes/vapes4.jpg" alt="Vape desechable Elfbar 40K Puff">
            <h3>Elfbar 40K Puff 💨</h3>
            <p>Desde $11.75 USD (hasta 100x)</p>
            <span>Vapes</span>
          </div>

          <div class="producto-card" data-category="Vapes" data-nombre="Ignite V400 40mil 💨">
            <img src="/imagenes/vapes5.jpg" alt="Vape desechable Ignite V400">
            <h3>Ignite V400 40mil 💨</h3>
            <p>Desde $13.8 USD (hasta 50x)</p>
            <span>Vapes</span>
          </div>

          <div class="producto-card" data-category="Vapes" data-nombre="Lost Mary Mixer 30.000 Puffs 💨">
            <img src="/imagenes/vapes6.jpg" alt="Vape desechable Lost Mary Mixer">
            <h3>Lost Mary Mixer 30.000 Puffs 💨</h3>
            <p>Desde $11.4 USD (hasta 100x)</p>
            <span>Vapes</span>
          </div>

          <div class="producto-card" data-category="Vapes" data-nombre="IGNITE V250 25.000 Puffs 💨">
            <img src="/imagenes/vapes7.jpg" alt="Vape desechable IGNITE V250">
            <h3>IGNITE V250 25.000 Puffs 💨</h3>
            <p>Desde $11.4 USD (hasta 100x)</p>
            <span>Vapes</span>
          </div>

          <div class="producto-card" data-category="Vapes" data-nombre="IGNITE V150 15.000 Puffs 💨">
            <img src="/imagenes/vapes8.jpg" alt="Vape desechable IGNITE V150">
            <h3>IGNITE V150 15.000 Puffs 💨</h3>
            <p>Desde $8.8 USD (hasta 100x)</p>
            <span>Vapes</span>
          </div>

          <div class="producto-card" data-category="Vapes" data-nombre="Elfbar Ice King 40.000 Puffs 💨">
            <img src="/imagenes/vapes9.jpg" alt="Vape desechable Elfbar Ice King">
            <h3>Elfbar Ice King 40.000 Puffs 💨</h3>
            <p>Desde $12.5 USD (hasta 100x)</p>
            <span>Vapes</span>
          </div>

          <!-- Perfumes -->
          <div class="producto-card" data-category="Perfumes" data-nombre="AL HARAMAIN AMBER OUD GOLD EDITION EDP 100ml 🌟">
            <img src="/imagenes/perfumes1.jpg" alt="Perfume AL HARAMAIN AMBER OUD GOLD EDITION">
            <h3>AL HARAMAIN AMBER OUD GOLD EDITION EDP 100ml 🌟</h3>
            <p>Desde $59.5 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="BHARARA KING EDP 150ml 👑">
            <img src="/imagenes/perfumes2.jpg" alt="Perfume BHARARA KING">
            <h3>BHARARA KING EDP 150ml 👑</h3>
            <p>Desde $65.5 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="LATTAFA FAKHAR DORADO EDP 100ml ✨">
            <img src="/imagenes/perfumes3.jpg" alt="Perfume LATTAFA FAKHAR DORADO">
            <h3>LATTAFA FAKHAR DORADO EDP 100ml ✨</h3>
            <p>Desde $33.5 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="ARMAF CLUB DE NUIT INTENSE MAN EDT 105ml 🖤">
            <img src="/imagenes/perfumes4.jpg" alt="Perfume ARMAF CLUB DE NUIT INTENSE MAN">
            <h3>ARMAF CLUB DE NUIT INTENSE MAN EDT 105ml 🖤</h3>
            <p>Desde $32.5 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="LATTAFA KHAMRAH EDP 100ml 🍯">
            <img src="/imagenes/perfumes5.jpg" alt="Perfume LATTAFA KHAMRAH">
            <h3>LATTAFA KHAMRAH EDP 100ml 🍯</h3>
            <p>Desde $39 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="LATTAFA ASAD EDP 100ml 🦁">
            <img src="/imagenes/perfumes6.jpg" alt="Perfume LATTAFA ASAD">
            <h3>LATTAFA ASAD EDP 100ml 🦁</h3>
            <p>Desde $26.5 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="LATTAFA BADE'E AL OUD SUBLIME 100ml 🌹">
            <img src="/imagenes/perfumes8.jpg" alt="Perfume LATTAFA BADE'E AL OUD SUBLIME">
            <h3>LATTAFA BADE'E AL OUD SUBLIME 100ml 🌹</h3>
            <p>Desde $26.5 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="LATTAFA YARA PINK EDP 100ml 🌸">
            <img src="/imagenes/perfumes9.jpg" alt="Perfume LATTAFA YARA PINK">
            <h3>LATTAFA YARA PINK EDP 100ml 🌸</h3>
            <p>Desde $33 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="LATTAFA YARA CANDY EDP 100ml 🍭">
            <img src="/imagenes/perfumes10.jpg" alt="Perfume LATTAFA YARA CANDY">
            <h3>LATTAFA YARA CANDY EDP 100ml 🍭</h3>
            <p>Desde $25.5 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="LATTAFA YARA MOI EDP 100ml 💖">
            <img src="/imagenes/perfumes11.jpg" alt="Perfume LATTAFA YARA MOI">
            <h3>LATTAFA YARA MOI EDP 100ml 💖</h3>
            <p>Desde $26 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="LATTAFA BADEE AL OUD NOBLE BLUSH EDP 100ml 🌺">
            <img src="/imagenes/perfumes12.jpg" alt="Perfume LATTAFA BADEE AL OUD NOBLE BLUSH">
            <h3>LATTAFA BADEE AL OUD NOBLE BLUSH EDP 100ml 🌺</h3>
            <p>Desde $28.5 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>

          <div class="producto-card" data-category="Perfumes" data-nombre="LATTAFA FAKHAR ROSE EDP 100ml 🌹">
            <img src="/imagenes/perfumes13.jpg" alt="Perfume LATTAFA FAKHAR ROSE">
            <h3>LATTAFA FAKHAR ROSE EDP 100ml 🌹</h3>
            <p>Desde $33 USD (hasta 20x)</p>
            <span>Perfumes</span>
          </div>
        </div>
      </section>

      <!-- Sección Información -->
      <section id="informacion">
        <h2 class="informacion-titulo">Información</h2>

        <div class="informacion-contenido">
          <h3>Retiros y Envíos de Mercadería</h3>
          <p>
            En nuestro sistema de venta mayorista, ofrecemos dos modalidades para que puedas recibir tu pedido de forma cómoda y segura:
            <strong>retiro en depósito</strong> o <strong>envío a través de transporte</strong>. A continuación, te detallamos cómo funciona cada opción:
          </p>

          <h4>Retiros por Depósito</h4>
          <ul>
            <li><strong>Pedido previo:</strong> Debe realizarse previamente a través de nuestra página o mediante un vendedor autorizado.</li>
            <li><strong>Coordinación:</strong> Una vez confirmado el pedido, se coordina día y horario con nuestro equipo.</li>
            <li><strong>Horario de retiro:</strong> Lunes a viernes de 9 a 17 hs, sábados de 9 a 13 hs.</li>
            <li><strong>Sin seña ni pago anticipado:</strong> El pago se realiza al momento del retiro.</li>
            <li><strong>Importante:</strong> No se entregan pedidos sin coordinación previa ni fuera del horario acordado.</li>
          </ul>

          <h4>Envíos a Todo el País</h4>
          <p>Trabajamos con las siguientes empresas de logística:</p>
          <ul>
            <li>Vía Cargo</li>
            <li>Correo Argentino</li>
            <li>Andreani</li>
            <li>Motomensajería (Quilmes, Zona Sur, CABA y alrededores).</li>
          </ul>
          <p>
            <strong>Condiciones para el envío:</strong><br>
            Pago anticipado, despacho el mismo día una vez acreditado el pago, y tiempos de entrega estimados de 1 a 3 días hábiles.
          </p>

          <h4>Medios de Pago</h4>
          <ul>
            <li><strong>USDT (cripto):</strong> Redes TRC20, BEP20 o Lemontag.</li>
            <li><strong>Dólares en efectivo:</strong> Pago al momento del retiro o entrega.</li>
            <li><strong>Transferencia en pesos:</strong> Se toma el valor del dólar blue +1,5%.</li>
            <li><strong>Pesos en efectivo:</strong> Cotización del dólar blue sin recargo.</li>
          </ul>

          <h4>Aclaraciones</h4>
          <ul>
            <li>Sabores de los vapes: surtidos.</li>
            <li>Modelos y colores de fundas: surtidos.</li>
            <li>No hace falta seña para retirar.</li>
            <li>Para envíos, el pago debe realizarse con anticipación.</li>
          </ul>
        </div>
      </section>

      <!-- Sección Referencias -->
      <section id="referencias">
        <h2 class="referencias-titulo">Referencias</h2>

        <p class="referencias-descripcion">
          ✅ +1000 clientes satisfechos en todo el país<br>
          📦 Envíos diarios por transporte y retiros coordinados<br>
          💬 Testimonios reales de WhatsApp
        </p>

        <div class="referencias-galeria">
          <img src="/imagenes/referencias1.jpg" alt="Testimonio de cliente satisfecho 1" class="ref-img">
          <img src="/imagenes/referencias2.jpg" alt="Testimonio de cliente satisfecho 2" class="ref-img">
          <img src="/imagenes/referencias3.jpg" alt="Testimonio de cliente satisfecho 3" class="ref-img">
        </div>

        <div class="referencias-boton">
          <button id="ver-todas" class="ver-todas-btn">
            <span>Ver todas las referencias</span>
          </button>
        </div>
      </section>

      <!-- Galería Completa de Referencias -->
      <section id="galeria-referencias" class="galeria-oculta" aria-hidden="true">
        <div class="galeria-container">
          <div class="galeria-top">
            <button id="volver-referencias" class="ver-todas-btn volver-animado" aria-label="Volver a la sección de referencias">
              ← Volver atrás
            </button>
            <h2 class="galeria-titulo">Galería de Referencias</h2>
          </div>

          <div class="galeria-imagenes" role="list">
            <!-- Las imágenes se generan con JavaScript -->
          </div>
        </div>
      </section>

      <!-- Modal Detalle de Producto -->
      <section id="producto-detalle" class="detalle-modal" role="dialog" aria-labelledby="detalle-titulo" aria-modal="true" aria-hidden="true">
        <div class="detalle-contenido">
          <button id="cerrar-detalle" class="cerrar-detalle" aria-label="Cerrar detalle del producto">✕</button>

          <div class="detalle-info">
            <div class="detalle-imagen-container">
              <img id="detalle-imagen" src="/placeholder.svg" alt="Imagen del producto seleccionado" />
            </div>

            <div class="detalle-texto">
              <h2 id="detalle-titulo"></h2>
              <p id="detalle-categoria" class="detalle-categoria"></p>
              <hr class="detalle-divider" aria-hidden="true">
              <div class="detalle-descripcion-section">
                <h3>Descripción</h3>
                <p id="detalle-descripcion"></p>
              </div>

              <div class="detalle-detalles-section">
                <h3>Detalles</h3>
                <ul id="detalle-lista"></ul>
              </div>

              <hr class="detalle-divider" aria-hidden="true">

              <div class="detalle-precios-section">
                <h3>Precios por Cantidad</h3>
                <div id="detalle-tabla" class="detalle-tabla-moderna"></div>
              </div>

              <div class="detalle-cantidad">
                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" value="1" min="1" aria-label="Cantidad de productos" />
              </div>

              <p id="precio-total" class="detalle-precio-total" aria-live="polite">Total: $0.00 USD</p>
              <button id="agregar-carrito" class="detalle-boton">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Cart Section -->
      <section id="carrito-seccion" class="carrito-seccion" style="display: none;" role="dialog" aria-labelledby="carrito-titulo" aria-modal="true">
        <div class="carrito-container">
          <div class="carrito-header">
            <h2 id="carrito-titulo">Mi Carrito</h2>
            <button id="cerrar-carrito" class="cerrar-carrito" aria-label="Cerrar carrito">✕</button>
          </div>

          <!-- Empty Cart State -->
          <div id="carrito-vacio" class="carrito-vacio">
            <svg class="carrito-vacio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h3>Tu carrito está vacío</h3>
            <p>No tienes productos en tu carrito de compras.</p>
            <button id="ver-productos-btn" class="btn-primary">Ver productos</button>
          </div>

          <!-- Cart with Items -->
          <div id="carrito-con-items" class="carrito-con-items" style="display: none;">
            <div class="carrito-items" id="carrito-items-lista">
              <!-- Cart items will be inserted here by JavaScript -->
            </div>

            <div class="carrito-resumen">
              <h3>Resumen del Pedido</h3>
              <div class="resumen-linea">
                <span>Total de productos:</span>
                <span id="total-productos" aria-live="polite">0</span>
              </div>
              <div class="resumen-linea total">
                <span>Total a pagar:</span>
                <span id="total-pagar" aria-live="polite">$0.00 USD</span>
              </div>
              <button id="continuar-pago-btn" class="btn-primary">Continuar con el pago</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Checkout Section -->
      <section id="checkout-seccion" class="checkout-seccion" style="display: none;" role="dialog" aria-labelledby="checkout-titulo" aria-modal="true">
        <canvas id="checkout-canvas" class="checkout-canvas"></canvas>
        <div class="checkout-container">
          <div class="checkout-top-actions">
            <button type="button" id="volver-carrito-top-btn" class="btn-volver-carrito">
              <svg class="icon-back" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Volver al carrito
            </button>
          </div>

          <div class="checkout-header">
            <h2 id="checkout-titulo">Finalizar Compra</h2>
            <p class="checkout-subtitle">Completa tus datos para procesar tu pedido</p>
          </div>

          <div class="checkout-content">
            <div class="checkout-resumen">
              <h3>📦 Resumen del Pedido</h3>
              <div id="checkout-items-lista" class="checkout-items">
                <!-- Items will be inserted here -->
              </div>
              <div class="checkout-total-section">
                <div class="checkout-total-line">
                  <span>Total de productos:</span>
                  <span id="checkout-cantidad-total" aria-live="polite">0</span>
                </div>
                <div class="checkout-total-line checkout-total-final">
                  <span>Total a pagar:</span>
                  <span id="checkout-total" aria-live="polite">$0.00 USD</span>
                </div>
              </div>
            </div>

            <div class="checkout-form">
              <form id="checkout-form">
                <div class="form-section">
                  <h3>🚚 Método de Entrega</h3>
                  <div class="radio-group-modern">
                    <label class="radio-card">
                      <input type="radio" name="metodo-entrega" value="retiro" checked>
                      <div class="radio-card-content">
                        <div class="radio-icon">📍</div>
                        <div class="radio-text">
                          <span class="radio-title">Retiro en Persona</span>
                          <span class="radio-description">Coordina día y horario</span>
                        </div>
                      </div>
                      <div class="radio-checkmark"></div>
                    </label>
                    <label class="radio-card">
                      <input type="radio" name="metodo-entrega" value="envio">
                      <div class="radio-card-content">
                        <div class="radio-icon">🚛</div>
                        <div class="radio-text">
                          <span class="radio-title">Envío por Vía Cargo</span>
                          <span class="radio-description">Envío a todo el país</span>
                        </div>
                      </div>
                      <div class="radio-checkmark"></div>
                    </label>
                  </div>
                </div>

                <div class="form-section">
                  <h3>👤 Información Personal</h3>
                  <p class="form-disclaimer">Por favor, completa tus datos personales para procesar correctamente tu pedido.</p>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="nombre-apellido">
                        <span class="label-icon">📝</span>
                        Nombre y Apellido
                      </label>
                      <input type="text" id="nombre-apellido" placeholder="Ej: Juan Pérez" required aria-required="true">
                    </div>

                    <div class="form-group">
                      <label for="dni">
                        <span class="label-icon">🆔</span>
                        DNI
                      </label>
                      <input type="text" id="dni" placeholder="Ej: 12345678" required aria-required="true">
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="gmail">
                        <span class="label-icon">📧</span>
                        Gmail
                      </label>
                      <input type="email" id="gmail" placeholder="Ej: tucorreo@gmail.com" required aria-required="true">
                    </div>

                    <div class="form-group">
                      <label for="telefono">
                        <span class="label-icon">📱</span>
                        Número de Teléfono
                      </label>
                      <input type="tel" id="telefono" placeholder="Ej: +54 9 11 1234 5678" required aria-required="true">
                    </div>
                  </div>
                </div>

                <div class="form-section" id="datos-domicilio-section" style="display: none;">
                  <h3>🏠 Datos de Domicilio</h3>
                  <p class="form-disclaimer">Completa tu dirección de entrega para el envío por Vía Cargo.</p>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="direccion">
                        <span class="label-icon">📍</span>
                        Dirección
                      </label>
                      <input type="text" id="direccion" placeholder="Ej: Av. Corrientes">
                    </div>

                    <div class="form-group">
                      <label for="altura">
                        <span class="label-icon">🔢</span>
                        Altura
                      </label>
                      <input type="text" id="altura" placeholder="Ej: 1234">
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="piso-depto">
                        <span class="label-icon">🏢</span>
                        Piso/Departamento
                      </label>
                      <input type="text" id="piso-depto" placeholder="Ej: 5° B (opcional)">
                    </div>

                    <div class="form-group">
                      <label for="localidad">
                        <span class="label-icon">🏘️</span>
                        Localidad
                      </label>
                      <input type="text" id="localidad" placeholder="Ej: Buenos Aires">
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="provincia">
                        <span class="label-icon">🗺️</span>
                        Provincia
                      </label>
                      <input type="text" id="provincia" placeholder="Ej: Buenos Aires">
                    </div>

                    <div class="form-group">
                      <label for="codigo-postal">
                        <span class="label-icon">📮</span>
                        Código Postal
                      </label>
                      <input type="text" id="codigo-postal" placeholder="Ej: 1414">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="instrucciones-entrega">
                      <span class="label-icon">📝</span>
                      Instrucciones de Entrega
                    </label>
                    <textarea id="instrucciones-entrega" placeholder="Ej: Tocar timbre del portero, dejar en recepción, etc. (opcional)" rows="3"></textarea>
                  </div>
                </div>

                <div class="form-section" id="coordinar-retiro-section">
                  <h3>📅 Coordinar Retiro</h3>
                  <p class="form-disclaimer">Indica el día y horario para retirar tu pedido. Federico se pondrá en contacto para confirmar.</p>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="dia-retiro">
                        <span class="label-icon">📆</span>
                        Día de Retiro
                      </label>
                      <input type="date" id="dia-retiro" required aria-required="true">
                    </div>

                    <div class="form-group">
                      <label for="horario-retiro">
                        <span class="label-icon">🕐</span>
                        Horario de Retiro
                      </label>
                      <input type="time" id="horario-retiro" min="09:00" max="17:00" required aria-required="true">
                      <small class="input-hint">⏰ Horario disponible: 9:00 AM a 5:00 PM</small>
                    </div>
                  </div>
                </div>

                <div class="form-actions">
                  <button type="submit" class="btn-continuar-pago">
                    <span class="btn-text">Continuar al Pago</span>
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Factura Section -->
      <section id="factura-seccion" class="factura-seccion" style="display: none;" role="dialog" aria-labelledby="factura-titulo" aria-modal="true">
        <canvas id="factura-canvas" class="factura-canvas"></canvas>
        <div class="factura-container">
          <div class="factura-header">
            <h2 id="factura-titulo">📄 Factura de Compra</h2>
            <p class="factura-subtitle">Revisa los detalles de tu pedido antes de continuar</p>
          </div>

          <div class="factura-content">
            <!-- Resumen del Pedido -->
            <div class="factura-resumen-pedido">
              <h3>📦 Resumen del Pedido</h3>
              <div id="factura-items-lista" class="factura-items">
                <!-- Items will be inserted here -->
              </div>
              <div class="factura-total-section">
                <div class="factura-total-line">
                  <span>Total de productos:</span>
                  <span id="factura-cantidad-total">0</span>
                </div>
                <div class="factura-total-line factura-total-final">
                  <span>Total a pagar:</span>
                  <span id="factura-total">$0.00 USD</span>
                </div>
              </div>
            </div>

            <!-- Datos del Comprador -->
            <div class="factura-datos-comprador">
              <h3>👤 Datos del Comprador</h3>
              <div class="factura-info-grid">
                <div class="factura-info-item">
                  <span class="factura-info-label">Nombre:</span>
                  <span id="factura-nombre" class="factura-info-value"></span>
                </div>
                <div class="factura-info-item">
                  <span class="factura-info-label">DNI:</span>
                  <span id="factura-dni" class="factura-info-value"></span>
                </div>
                <div class="factura-info-item">
                  <span class="factura-info-label">Email:</span>
                  <span id="factura-email" class="factura-info-value"></span>
                </div>
                <div class="factura-info-item">
                  <span class="factura-info-label">Teléfono:</span>
                  <span id="factura-telefono" class="factura-info-value"></span>
                </div>
                <div class="factura-info-item">
                  <span class="factura-info-label">Método de Entrega:</span>
                  <span id="factura-metodo-entrega" class="factura-info-value"></span>
                </div>
                <div id="factura-info-retiro" class="factura-info-item" style="display: none;">
                  <span class="factura-info-label">Fecha y Hora de Retiro:</span>
                  <span id="factura-fecha-retiro" class="factura-info-value"></span>
                </div>
                <div id="factura-info-domicilio" style="display: none;">
                  <div class="factura-info-item">
                    <span class="factura-info-label">Dirección:</span>
                    <span id="factura-direccion" class="factura-info-value"></span>
                  </div>
                  <div class="factura-info-item">
                    <span class="factura-info-label">Localidad:</span>
                    <span id="factura-localidad" class="factura-info-value"></span>
                  </div>
                  <div class="factura-info-item">
                    <span class="factura-info-label">Provincia:</span>
                    <span id="factura-provincia" class="factura-info-value"></span>
                  </div>
                  <div class="factura-info-item">
                    <span class="factura-info-label">Código Postal:</span>
                    <span id="factura-codigo-postal" class="factura-info-value"></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Métodos de Pago -->
            <div class="factura-metodos-pago">
              <h3>💳 Método de Pago</h3>
              <p class="form-disclaimer">Selecciona cómo deseas pagar tu pedido</p>
              
              <div class="radio-group-modern">
                <label class="radio-card" id="efectivo-card">
                  <input type="radio" name="metodo-pago" value="efectivo" checked>
                  <div class="radio-card-content">
                    <div class="radio-icon">💵</div>
                    <div class="radio-text">
                      <span class="radio-title">Efectivo</span>
                      <span class="radio-description">Pago al retirar en persona</span>
                    </div>
                  </div>
                  <div class="radio-checkmark"></div>
                </label>
                <label class="radio-card">
                  <input type="radio" name="metodo-pago" value="mercadopago">
                  <div class="radio-card-content">
                    <div class="radio-icon">💳</div>
                    <div class="radio-text">
                      <span class="radio-title">MercadoPago</span>
                      <span class="radio-description">Pago online seguro</span>
                    </div>
                  </div>
                  <div class="radio-checkmark"></div>
                </label>
              </div>

              <div id="efectivo-disclaimer" class="pago-disclaimer">
                ℹ️ El pago en efectivo solo está disponible para retiro en persona. Pagarás al momento de retirar tu pedido.
              </div>
              <div id="mercadopago-disclaimer" class="pago-disclaimer" style="display: none;">
                ℹ️ Serás redirigido a MercadoPago para completar el pago de forma segura. Una vez confirmado el pago, tu pedido será procesado.
              </div>
            </div>

            <!-- Botones de Acción -->
            <div class="factura-actions">
              <button type="button" id="volver-checkout-btn" class="btn-volver-checkout">
                <svg class="icon-back" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Volver atrás
              </button>
              <button type="button" id="realizar-pedido-btn" class="btn-realizar-pedido">
                <span class="btn-text">Realizar Pedido</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button type="button" id="pagar-mercadopago-btn" class="btn-pagar-mercadopago" style="display: none;">
                <span class="btn-text">Pagar con MercadoPago</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Pago Exitoso Section -->
      <section id="pago-exitoso-seccion" class="pago-exitoso-seccion" style="display: none;">
        <div class="pago-exitoso-container">
          <div class="pago-exitoso-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2>¡Pago Exitoso!</h2>
          <p>Tu pedido ha sido procesado correctamente.</p>
          <p class="pago-exitoso-mensaje">Federico se pondrá en contacto contigo para coordinar la entrega.</p>
          <div class="pago-exitoso-detalles">
            <p><strong>Número de pedido:</strong> <span id="numero-pedido"></span></p>
            <p><strong>Total pagado:</strong> <span id="total-pagado"></span></p>
          </div>
          <button id="volver-inicio-btn" class="btn-volver-inicio">Volver al inicio</button>
        </div>
      </section>
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
