// ============================================
// CONFIGURACIÓN Y UTILIDADES - OPTIMIZADO
// ============================================

const PRODUCTOS_DB = {
  "AirPods Pro 2da Gen": {
    categoria: "Accesorios Apple",
    descripcion: "Auriculares inalámbricos con cancelación activa de ruido y calidad de sonido premium.",
    detalles: [
      "Cancelación activa de ruido",
      "Audio espacial personalizado",
      "Resistente al agua y sudor",
      "Hasta 6 horas de reproducción con una sola carga",
      "Estuche de carga inalámbrica incluido",
    ],
    precios: [
      ["5x", 13.3],
      ["10x", 12.8],
      ["20x", 11.5],
      ["30x", 10.5],
      ["40x", 10.0],
      ["100x", 9.5],
      ["200x", 9.0],
      ["500x", 8.5],
    ],
  },
  "Cable + Cargador": {
    categoria: "Accesorios Apple",
    descripcion: "Set de cable Lightning y cargador USB-C de 20W de Apple para carga rápida de dispositivos.",
    detalles: [
      "Adaptador de corriente USB-C de 20W original Apple",
      "Cable de carga rápida Lightning a USB-C",
      "Protección contra sobrecarga",
      "Longitud del cable: 1 metro",
      "Compatible con iPhone y iPad",
    ],
    precios: [
      ["5x", 5.5],
      ["10x", 5.0],
      ["20x", 4.5],
      ["30x", 4.1],
      ["50x", 3.7],
      ["100x", 3.2],
    ],
  },
  "Cargadores Completos": {
    categoria: "Accesorios Apple",
    descripcion: "Kit completo de cargador Apple con adaptador USB-C de 20W y cable USB-C a Lightning.",
    detalles: [
      "Adaptador de corriente USB-C de 20W original Apple",
      "Cable USB-C a Lightning incluido",
      "Tecnología de carga rápida",
      "Compatible con todos los modelos de iPhone",
      "Diseño compacto y portátil",
    ],
    precios: [
      ["5x", 5.5],
      ["10x", 5.0],
      ["20x", 4.5],
      ["30x", 4.1],
      ["50x", 3.7],
      ["100x", 3.2],
    ],
  },
  "Battery Pack 🔋": {
    categoria: "Accesorios Apple",
    descripcion: "Batería externa MagSafe oficial de Apple para iPhone, con diseño compacto y carga inalámbrica.",
    detalles: [
      "Batería externa MagSafe oficial de Apple",
      "Compatible con iPhone 12 y posteriores",
      "Carga inalámbrica magnética",
      "Diseño ultradelgado y ligero",
      "Integración perfecta con iOS",
    ],
    precios: [
      ["5x", 10.0],
      ["10x", 9.5],
      ["20x", 9.0],
      ["30x", 8.5],
      ["50x", 8.0],
    ],
  },
  "Funda Silicon Case I11 - 16Pro Max 📱": {
    categoria: "Accesorios Apple",
    descripcion: "Fundas de silicona premium para iPhone, desde el modelo 11 hasta el 16 Pro Max.",
    detalles: [
      "Material: Silicona de alta calidad",
      "Interior de microfibra",
      "Protección completa para el dispositivo",
      "Diseño delgado que no añade volumen",
      "Disponible en varios colores",
    ],
    precios: [
      ["15x", 2.5],
      ["25x", 2.2],
      ["50x", 1.8],
      ["75x", 1.7],
      ["100x", 1.5],
      ["300x", 1.3],
    ],
  },
  "AirPods Max 🎧": {
    categoria: "Accesorios Apple",
    descripcion: "Auriculares over-ear premium de Apple con cancelación activa de ruido y audio espacial.",
    detalles: [
      "Cancelación activa de ruido de alta fidelidad",
      "Audio espacial con seguimiento dinámico de cabeza",
      "Chip H1 de Apple para audio computacional",
      "Hasta 20 horas de reproducción",
      "Diseño over-ear con almohadillas de malla acústica",
      "Digital Crown para control preciso del volumen",
    ],
    precios: [
      ["5x", 16.0],
      ["10x", 15.0],
      ["20x", 14.0],
      ["50x", 13.0],
    ],
  },
  "JBL GO3": {
    categoria: "Varios",
    descripcion: "Altavoz portátil JBL GO3 con sonido potente y diseño compacto en varios colores.",
    detalles: [
      "Bluetooth 5.1",
      "Resistente al agua (IPX7)",
      "Duración de batería: 3 horas",
      "Diseño ultraportátil",
      "Colores surtidos disponibles",
    ],
    precios: [
      ["5x", 11.0],
      ["10x", 10.5],
      ["20x", 10.0],
      ["40x", 9.5],
      ["60x", 9.0],
      ["100x", 8.5],
    ],
  },
  "​Aspiradora Robot 🤖": {
    categoria: "Varios",
    descripcion: "Aspiradora robot inteligente SWEEPOL con navegación avanzada y control automático. ¡LIQUIDACIÓN!",
    detalles: [
      "Navegación inteligente con sensores",
      "Limpieza automática programable",
      "Batería de larga duración",
      "Sistema de filtrado avanzado",
      "Diseño compacto y silencioso",
      "Retorno automático a base de carga",
      "Disponible en negro y blanco",
      "¡PRECIO DE LIQUIDACIÓN!",
    ],
    precios: [["1x", 16.0]],
  },
  "Torch 7.5G 🌸": {
    categoria: "Vapes",
    descripcion: "Vape desechable con sabores premium y diseño elegante en varios colores.",
    detalles: [
      "7500 inhalaciones aproximadas",
      "Batería de larga duración",
      "Disponible en varios colores y sabores",
      "Diseño compacto y portátil",
      "Experiencia de vapor suave",
    ],
    precios: [
      ["5x", 30.0],
      ["10x", 29.5],
      ["25x", 29.0],
      ["50x", 28.0],
      ["100x", 27.0],
    ],
  },
  "ElfThc 5g Edición Limitada 💨": {
    categoria: "Vapes",
    descripcion: "Vape desechable premium con 5g de contenido, edición limitada con efectos especiales.",
    detalles: [
      "5g de contenido premium",
      "Edición limitada especial",
      "Efectos potenciados",
      "Diseño exclusivo",
      "Experiencia única",
    ],
    precios: [
      ["5x", 26.5],
      ["10x", 25.5],
      ["15x", 24.5],
      ["25x", 23.5],
      ["50x", 22.0],
      ["100x", 21.5],
    ],
  },
  "ElfThc 3000mg Edición Limitada 💨": {
    categoria: "Vapes",
    descripcion: "Vape desechable con 3000mg de contenido activo, edición limitada con fórmula especial.",
    detalles: [
      "3000mg de contenido activo",
      "Edición limitada especial",
      "Fórmula mejorada",
      "Efectos duraderos",
      "Diseño premium",
    ],
    precios: [
      ["5x", 19.0],
      ["10x", 18.5],
      ["20x", 18.0],
      ["30x", 17.5],
      ["50x", 17.0],
      ["100x", 16.0],
    ],
  },
  "Elfbar 40K Puff 💨": {
    categoria: "Vapes",
    descripcion: "Vape desechable Sour King con hasta 40.000 inhalaciones y sabores intensos.",
    detalles: [
      "40.000 inhalaciones aproximadas",
      "Sistema de malla para mejor sabor",
      "Sabores premium como Sour Blue Razz Ice",
      "Batería recargable incorporada",
      "4 niveles personalizados de intensidad",
    ],
    precios: [
      ["5x", 13.8],
      ["10x", 13.3],
      ["20x", 12.8],
      ["50x", 12.0],
      ["100x", 11.75],
    ],
  },
  "Ignite V400 40mil 💨": {
    categoria: "Vapes",
    descripcion: "Vape desechable premium con 40.000 inhalaciones y tecnología V400 avanzada.",
    detalles: [
      "40.000 inhalaciones aproximadas",
      "Tecnología V400 avanzada",
      "Diseño premium y ergonómico",
      "Batería de ultra larga duración",
      "Sistema de calentamiento optimizado",
      "Sabores intensos y duraderos",
    ],
    precios: [
      ["5x", 15.5],
      ["10x", 15.0],
      ["20x", 14.5],
      ["30x", 14.25],
      ["50x", 13.8],
    ],
  },
  "Lost Mary Mixer 30.000 Puffs 💨": {
    categoria: "Vapes",
    descripcion: "Vape desechable con sistema de mezcla de sabores dobles y hasta 30.000 inhalaciones.",
    detalles: [
      "30.000 inhalaciones aproximadas",
      "Sistema de doble sabor ajustable",
      "Diseño ergonómico en varios colores",
      "Experiencia de vapor consistente",
      "Variedad de sabores disponibles",
    ],
    precios: [
      ["5x", 13.5],
      ["10x", 13.0],
      ["20x", 12.7],
      ["30x", 12.2],
      ["50x", 11.8],
      ["100x", 11.4],
    ],
  },
  "IGNITE V250 25.000 Puffs 💨": {
    categoria: "Vapes",
    descripcion: "Vape desechable premium con diseño holográfico y 25.000 inhalaciones.",
    detalles: [
      "25.000 inhalaciones aproximadas",
      "Diseño ultra slim con acabado holográfico",
      "Tecnología de boost para mayor intensidad",
      "Batería de larga duración de 650mAh",
      "Variedad de sabores refrescantes",
    ],
    precios: [
      ["5x", 13.7],
      ["10x", 13.2],
      ["20x", 12.8],
      ["40x", 12.3],
      ["60x", 11.8],
      ["100x", 11.4],
    ],
  },
  "IGNITE V150 15.000 Puffs 💨": {
    categoria: "Vapes",
    descripcion: "Vape compacto con diseño holográfico y 15.000 inhalaciones en sabores refrescantes.",
    detalles: [
      "15.000 inhalaciones aproximadas",
      "Diseño ultra slim con acabado holográfico",
      "Tecnología de calentamiento avanzada",
      "Sistema anti-fugas",
      "Variedad de sabores disponibles",
    ],
    precios: [
      ["5x", 11.0],
      ["10x", 10.8],
      ["20x", 10.3],
      ["40x", 9.8],
      ["60x", 9.4],
      ["100x", 8.8],
    ],
  },
  "Elfbar Ice King 40.000 Puffs 💨": {
    categoria: "Vapes",
    descripcion: "Vape desechable premium con hasta 40.000 inhalaciones y sabores helados intensos.",
    detalles: [
      "40.000 inhalaciones aproximadas",
      "Sistema de enfriamiento Ice King",
      "Batería recargable de larga duración",
      "5 niveles de intensidad ajustables",
      "Variedad de sabores helados",
    ],
    precios: [
      ["5x", 15.0],
      ["10x", 14.5],
      ["20x", 14.0],
      ["40x", 13.5],
      ["60x", 13.0],
      ["100x", 12.5],
    ],
  },
  "AL HARAMAIN AMBER OUD GOLD EDITION EDP 100ml 🌟": {
    categoria: "Perfumes",
    descripcion: "Perfume premium árabe con notas de ámbar y oud, presentación de lujo en caja dorada.",
    detalles: [
      "Eau de Parfum 100ml",
      "Notas principales: Ámbar, Oud, especias orientales",
      "Larga duración y gran proyección",
      "Presentación premium en caja de lujo",
      "Fragancia unisex de alta gama",
    ],
    rangosPerfume: [
      [3, 4, 62.5],
      [5, 9, 60.5],
      [10, 19, 60.0],
      [20, Number.POSITIVE_INFINITY, 59.5],
    ],
  },
  "BHARARA KING EDP 150ml 👑": {
    categoria: "Perfumes",
    descripcion: "Fragancia masculina de lujo con 150ml de contenido, diseño elegante y sofisticado.",
    detalles: [
      "Eau de Parfum 150ml",
      "Fragancia masculina de alta gama",
      "Notas frescas y amaderadas",
      "Presentación elegante en caja plateada",
      "Larga duración y excelente proyección",
    ],
    rangosPerfume: [
      [3, 4, 68.5],
      [5, 9, 66.5],
      [10, 19, 66.0],
      [20, Number.POSITIVE_INFINITY, 65.5],
    ],
  },
  "LATTAFA FAKHAR DORADO EDP 100ml ✨": {
    categoria: "Perfumes",
    descripcion: "Perfume árabe con diseño dorado ornamentado, fragancia oriental de lujo.",
    detalles: [
      "Eau de Parfum 100ml",
      "Fragancia oriental con notas especiadas",
      "Diseño árabe tradicional dorado",
      "Excelente duración y sillage",
      "Perfume unisex de alta calidad",
    ],
    rangosPerfume: [
      [3, 4, 36.5],
      [5, 9, 35.0],
      [10, 19, 34.0],
      [20, Number.POSITIVE_INFINITY, 33.5],
    ],
  },
  "ARMAF CLUB DE NUIT INTENSE MAN EDT 105ml 🖤": {
    categoria: "Perfumes",
    descripcion: "Fragancia masculina intensa inspirada en los grandes clásicos, presentación elegante.",
    detalles: [
      "Eau de Toilette 105ml",
      "Fragancia masculina intensa",
      "Notas cítricas, especiadas y amaderadas",
      "Inspirado en fragancias de lujo",
      "Excelente relación calidad-precio",
    ],
    rangosPerfume: [
      [3, 4, 35.5],
      [5, 9, 33.5],
      [10, 19, 33.0],
      [20, Number.POSITIVE_INFINITY, 32.5],
    ],
  },
  "LATTAFA KHAMRAH EDP 100ml 🍯": {
    categoria: "Perfumes",
    descripcion: "Perfume dulce y especiado con notas de canela, vainilla y ámbar, muy popular.",
    detalles: [
      "Eau de Parfum 100ml",
      "Notas principales: Canela, vainilla, ámbar",
      "Fragancia dulce y especiada",
      "Muy popular entre jóvenes",
      "Excelente duración y proyección",
    ],
    rangosPerfume: [
      [3, 4, 42.0],
      [5, 9, 40.0],
      [10, 19, 39.5],
      [20, Number.POSITIVE_INFINITY, 39.0],
    ],
  },
  "LATTAFA ASAD EDP 100ml 🦁": {
    categoria: "Perfumes",
    descripcion: "Fragancia masculina potente con diseño de medallón dorado, notas orientales intensas.",
    detalles: [
      "Eau de Parfum 100ml",
      "Fragancia masculina oriental",
      "Notas intensas y especiadas",
      "Diseño con medallón dorado distintivo",
      "Gran proyección y duración",
    ],
    rangosPerfume: [
      [3, 4, 29.5],
      [5, 9, 27.5],
      [10, 19, 27.0],
      [20, Number.POSITIVE_INFINITY, 26.5],
    ],
  },
  "LATTAFA BADE'E AL OUD SUBLIME 100ml 🌹": {
    categoria: "Perfumes",
    descripcion: "Perfume árabe tradicional con oud sublime, presentación lujosa en caja roja.",
    detalles: [
      "Eau de Parfum 100ml",
      "Notas principales: Oud, rosa, especias",
      "Fragancia árabe tradicional",
      "Presentación lujosa en caja roja",
      "Perfume unisex de alta calidad",
    ],
    rangosPerfume: [
      [3, 4, 29.5],
      [5, 9, 27.5],
      [10, 19, 27.0],
      [20, Number.POSITIVE_INFINITY, 26.5],
    ],
  },
  "LATTAFA YARA PINK EDP 100ml 🌸": {
    categoria: "Perfumes",
    descripcion: "Fragancia femenina dulce y floral en elegante presentación rosa, muy popular.",
    detalles: [
      "Eau de Parfum 100ml",
      "Fragancia femenina dulce y floral",
      "Notas de frutas y flores",
      "Presentación elegante en rosa",
      "Muy popular entre mujeres jóvenes",
    ],
    rangosPerfume: [
      [3, 4, 36.0],
      [5, 9, 34.0],
      [10, 19, 33.5],
      [20, Number.POSITIVE_INFINITY, 33.0],
    ],
  },
  "LATTAFA YARA CANDY EDP 100ml 🍭": {
    categoria: "Perfumes",
    descripcion: "Versión dulce de Yara con notas gourmand, perfecta para quienes aman las fragancias dulces.",
    detalles: [
      "Eau de Parfum 100ml",
      "Fragancia gourmand muy dulce",
      "Notas de caramelo y vainilla",
      "Versión especial de la línea Yara",
      "Ideal para amantes de lo dulce",
    ],
    rangosPerfume: [
      [3, 4, 28.5],
      [5, 9, 26.5],
      [10, 19, 26.0],
      [20, Number.POSITIVE_INFINITY, 25.5],
    ],
  },
  "LATTAFA YARA MOI EDP 100ml 💖": {
    categoria: "Perfumes",
    descripcion: "Otra variación de la popular línea Yara, con notas florales y frutales equilibradas.",
    detalles: [
      "Eau de Parfum 100ml",
      "Fragancia floral-frutal equilibrada",
      "Parte de la exitosa línea Yara",
      "Notas frescas y femeninas",
      "Excelente duración y proyección",
    ],
    rangosPerfume: [
      [3, 4, 29.0],
      [5, 9, 27.0],
      [10, 19, 26.5],
      [20, Number.POSITIVE_INFINITY, 26.0],
    ],
  },
  "LATTAFA BADEE AL OUD NOBLE BLUSH EDP 100ml 🌺": {
    categoria: "Perfumes",
    descripcion: "Perfume árabe con oud noble y notas florales, fragancia sofisticada y elegante.",
    detalles: [
      "Eau de Parfum 100ml",
      "Notas principales: Oud noble, flores",
      "Fragancia sofisticada y elegante",
      "Combinación perfecta de tradición y modernidad",
      "Perfume unisex de alta gama",
    ],
    rangosPerfume: [
      [3, 4, 31.5],
      [5, 9, 29.5],
      [10, 19, 29.0],
      [20, Number.POSITIVE_INFINITY, 28.5],
    ],
  },
  "LATTAFA FAKHAR ROSE EDP 100ml 🌹": {
    categoria: "Perfumes",
    descripcion: "Versión rosa de Fakhar con notas florales predominantes, elegancia en estado puro.",
    detalles: [
      "Eau de Parfum 100ml",
      "Notas principales: Rosa, flores orientales",
      "Versión floral de la línea Fakhar",
      "Fragancia elegante y sofisticada",
      "Perfecta para ocasiones especiales",
    ],
    rangosPerfume: [
      [3, 4, 36.0],
      [5, 9, 34.0],
      [10, 19, 33.5],
      [20, Number.POSITIVE_INFINITY, 33.0],
    ],
  },
}

function calcularPrecioPorTiers(cantidad, precios) {
  let mejorPrecio = precios[0][1]
  for (const [tier, precio] of precios) {
    const cantidadTier = Number.parseInt(String(tier).replace(/\D/g, ""), 10)
    if (!isNaN(cantidadTier) && cantidad >= cantidadTier) {
      mejorPrecio = precio
    }
  }
  return mejorPrecio
}

function calcularPrecioPerfume(totalPerfumes, rangosPerfume) {
  if (totalPerfumes < 3) {
    return rangosPerfume[0][2]
  }
  for (const [min, max, precio] of rangosPerfume) {
    if (totalPerfumes >= min && totalPerfumes <= max) {
      return precio
    }
  }
  return rangosPerfume[rangosPerfume.length - 1][2]
}

const ThemeManager = {
  init() {
    this.checkbox = document.getElementById("theme-checkbox")
    this.loadTheme()
    this.checkbox.addEventListener("change", () => this.toggleTheme())

    const themeSwitch = document.querySelector(".theme-switch")
    if (themeSwitch) {
      themeSwitch.addEventListener("click", (e) => {
        // Solo en móvil (cuando el checkbox está oculto)
        if (window.innerWidth <= 767) {
          e.preventDefault()
          this.checkbox.checked = !this.checkbox.checked
          this.toggleTheme()
        }
      })
    }
  },

  loadTheme() {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light" || !savedTheme) {
      document.body.classList.remove("dark")
      this.checkbox.checked = false
    } else {
      document.body.classList.add("dark")
      this.checkbox.checked = true
    }
  },

  toggleTheme() {
    const isDark = this.checkbox.checked
    if (isDark) {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  },
}

const CartManager = {
  items: [],

  init() {
    this.loadFromStorage()
    this.updateBadge()
    this.setupEventListeners()
  },

  loadFromStorage() {
    const stored = localStorage.getItem("fedeLettierCart")
    if (stored) {
      try {
        this.items = JSON.parse(stored)
      } catch (e) {
        this.items = []
      }
    }
  },

  saveToStorage() {
    localStorage.setItem("fedeLettierCart", JSON.stringify(this.items))
  },

  addItem(nombre, cantidad, precioUnitario, imagen) {
    const existingIndex = this.items.findIndex((item) => item.nombre === nombre)

    if (existingIndex >= 0) {
      this.items[existingIndex].cantidad += cantidad
      this.items[existingIndex].total = this.items[existingIndex].cantidad * this.items[existingIndex].precioUnitario
    } else {
      this.items.push({
        nombre,
        cantidad,
        precioUnitario,
        total: cantidad * precioUnitario,
        imagen,
      })
    }

    this.saveToStorage()
    this.updateBadge()
  },

  removeItem(index) {
    this.items.splice(index, 1)
    this.saveToStorage()
    this.updateBadge()
    this.renderCart()
  },

  getTotalItems() {
    return this.items.reduce((sum, item) => sum + item.cantidad, 0)
  },

  getTotalPrice() {
    return this.items.reduce((sum, item) => sum + item.total, 0)
  },

  updateBadge() {
    const badge = document.getElementById("cart-badge")
    const total = this.getTotalItems()
    if (badge) {
      badge.textContent = total
      badge.style.display = total > 0 ? "block" : "none"
    }
  },

  clear() {
    this.items = []
    this.saveToStorage()
    this.updateBadge()
  },

  renderCart() {
    const carritoVacio = document.getElementById("carrito-vacio")
    const carritoConItems = document.getElementById("carrito-con-items")
    const carritoItemsLista = document.getElementById("carrito-items-lista")
    const totalProductos = document.getElementById("total-productos")
    const totalPagar = document.getElementById("total-pagar")

    if (this.items.length === 0) {
      carritoVacio.style.display = "flex"
      carritoConItems.style.display = "none"
    } else {
      carritoVacio.style.display = "none"
      carritoConItems.style.display = "flex"

      carritoItemsLista.innerHTML = this.items
        .map(
          (item, index) => `
        <div class="carrito-item">
          <img src="${item.imagen}" alt="${item.nombre}" class="carrito-item-imagen">
          <div class="carrito-item-info">
            <h4>${item.nombre}</h4>
            <p class="carrito-item-cantidad">Cantidad: ${item.cantidad}</p>
            <p>Precio unitario: $${item.precioUnitario.toFixed(2)} USD</p>
          </div>
          <div class="carrito-item-acciones">
            <span class="carrito-item-precio">$${item.total.toFixed(2)} USD</span>
            <button class="btn-eliminar" data-index="${index}">Eliminar</button>
          </div>
        </div>
      `,
        )
        .join("")

      totalProductos.textContent = this.getTotalItems()
      totalPagar.textContent = `$${this.getTotalPrice().toFixed(2)} USD`

      document.querySelectorAll(".btn-eliminar").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const index = Number.parseInt(e.target.dataset.index)
          this.removeItem(index)
        })
      })
    }
  },

  setupEventListeners() {
    const cartButton = document.querySelector(".cart-button")
    const carritoSeccion = document.getElementById("carrito-seccion")
    const cerrarCarritoBtn = document.getElementById("cerrar-carrito")
    const verProductosBtn = document.getElementById("ver-productos-btn")

    if (cartButton) {
      cartButton.addEventListener("click", () => {
        this.renderCart()
        carritoSeccion.style.display = "flex"
        document.body.style.overflow = "hidden"
      })
    }

    if (cerrarCarritoBtn) {
      cerrarCarritoBtn.addEventListener("click", () => {
        carritoSeccion.style.display = "none"
        document.body.style.overflow = ""
      })
    }

    if (carritoSeccion) {
      carritoSeccion.addEventListener("click", (e) => {
        if (e.target === carritoSeccion) {
          carritoSeccion.style.display = "none"
          document.body.style.overflow = ""
        }
      })
    }

    if (verProductosBtn) {
      verProductosBtn.addEventListener("click", () => {
        carritoSeccion.style.display = "none"
        document.body.style.overflow = ""
        document.querySelector("#productos").scrollIntoView({ behavior: "smooth" })
      })
    }
  },
}

const ProductDetailManager = {
  init() {
    this.setupElements()
    this.setupEventListeners()
    this.linkProductCards()
  },

  setupElements() {
    this.detalleSeccion = document.getElementById("producto-detalle")
    this.cerrarDetalle = document.getElementById("cerrar-detalle")
    this.detalleImagen = document.getElementById("detalle-imagen")
    this.detalleTitulo = document.getElementById("detalle-titulo")
    this.detalleCategoria = document.getElementById("detalle-categoria")
    this.detalleDescripcion = document.getElementById("detalle-descripcion")
    this.detalleLista = document.getElementById("detalle-lista")
    this.detalleTabla = document.getElementById("detalle-tabla")
    this.cantidadInput = document.getElementById("cantidad")
    this.precioTotal = document.getElementById("precio-total")
    this.btnAgregarCarrito = document.getElementById("agregar-carrito")
  },

  setupEventListeners() {
    if (this.cerrarDetalle) {
      this.cerrarDetalle.addEventListener("click", () => this.closeDetail())
    }

    if (this.detalleSeccion) {
      this.detalleSeccion.addEventListener("click", (e) => {
        if (!e.target.closest(".detalle-contenido")) {
          this.closeDetail()
        }
      })
    }

    if (this.btnAgregarCarrito) {
      this.btnAgregarCarrito.addEventListener("click", () => this.addToCart())
    }
  },

  linkProductCards() {
    const cards = document.querySelectorAll(".producto-card")
    cards.forEach((card) => {
      const nombre = card.getAttribute("data-nombre")
      if (!nombre) return

      card.style.cursor = "pointer"
      card.addEventListener("click", () => {
        const img = card.querySelector("img")
        const src = img ? img.getAttribute("src") : ""
        this.openDetail(nombre, src)
      })
    })
  },

  openDetail(nombreProducto, imagenSrc = "") {
    const producto = PRODUCTOS_DB[nombreProducto]
    if (!producto) return

    this.detalleTitulo.textContent = nombreProducto
    this.detalleCategoria.textContent = producto.categoria
    this.detalleDescripcion.textContent = producto.descripcion

    this.detalleLista.innerHTML = ""
    ;(producto.detalles || []).forEach((detalle) => {
      const li = document.createElement("li")
      li.textContent = detalle
      this.detalleLista.appendChild(li)
    })

    this.renderPriceTable(producto)

    this.cantidadInput.value = 1

    if (imagenSrc) {
      this.detalleImagen.src = imagenSrc
    }

    this.updateTotal(producto)

    this.cantidadInput.oninput = () => this.updateTotal(producto)

    this.detalleSeccion.style.display = "flex"
    document.body.style.overflow = "hidden"
  },

  closeDetail() {
    this.detalleSeccion.style.display = "none"
    document.body.style.overflow = ""
  },

  renderPriceTable(producto) {
    if (producto.categoria === "Perfumes") {
      this.detalleTabla.innerHTML = producto.rangosPerfume
        .map(([min, max, price]) => {
          const rangoTxt = max === Number.POSITIVE_INFINITY ? `${min}+` : `${min}-${max}`
          return `
          <div class="precio-card" data-cantidad="${min}">
            <span class="precio-cantidad">${rangoTxt}</span>
            <span class="precio-valor">$${price.toFixed(2)} USD</span>
          </div>
        `
        })
        .join("")
    } else {
      this.detalleTabla.innerHTML = producto.precios
        .map(([cant, price]) => {
          const cantidadNumerica = Number.parseInt(String(cant).replace(/\D/g, ""), 10)
          return `
          <div class="precio-card" data-cantidad="${cantidadNumerica}">
            <span class="precio-cantidad">${cant}</span>
            <span class="precio-valor">$${price.toFixed(2)} USD</span>
          </div>
        `
        })
        .join("")
    }

    const precioCards = this.detalleTabla.querySelectorAll(".precio-card")
    precioCards.forEach((card) => {
      card.addEventListener("click", () => {
        const cantidad = card.getAttribute("data-cantidad")
        if (cantidad && this.cantidadInput) {
          this.cantidadInput.value = cantidad
          this.updateTotal(producto)
          precioCards.forEach((c) => c.classList.remove("selected"))
          card.classList.add("selected")
        }
      })
    })
  },

  updateTotal(producto) {
    const cant = Math.max(1, Number.parseInt(this.cantidadInput.value || "1", 10))
    let unitario = 0

    if (producto.categoria === "Perfumes") {
      unitario = calcularPrecioPerfume(cant, producto.rangosPerfume)
    } else {
      unitario = calcularPrecioPorTiers(cant, producto.precios || [])
    }

    const total = cant * unitario
    this.precioTotal.textContent = `Total: $${total.toFixed(2)} USD`
  },

  addToCart() {
    const nombreProducto = this.detalleTitulo.textContent
    const cantidad = Number.parseInt(this.cantidadInput.value || "1", 10)
    const producto = PRODUCTOS_DB[nombreProducto]

    if (!producto) return

    let precioUnitario = 0
    if (producto.categoria === "Perfumes") {
      precioUnitario = calcularPrecioPerfume(cantidad, producto.rangosPerfume)
    } else {
      precioUnitario = calcularPrecioPorTiers(cantidad, producto.precios || [])
    }

    const imagenSrc = this.detalleImagen.src

    CartManager.addItem(nombreProducto, cantidad, precioUnitario, imagenSrc)

    this.btnAgregarCarrito.textContent = "✓ Agregado"
    this.btnAgregarCarrito.style.background = "linear-gradient(90deg, #28a745, #34ce57)"

    setTimeout(() => {
      this.btnAgregarCarrito.textContent = "Agregar al carrito"
      this.btnAgregarCarrito.style.background = ""
    }, 2000)

    setTimeout(() => {
      this.closeDetail()
    }, 1500)
  },
}

const CheckoutManager = {
  init() {
    this.setupEventListeners()
  },

  setupEventListeners() {
    const continuarPagoBtn = document.getElementById("continuar-pago-btn")
    const checkoutSeccion = document.getElementById("checkout-seccion")
    const volverCarritoBtn = document.getElementById("volver-carrito-btn")
    const checkoutForm = document.getElementById("checkout-form")
    const carritoSeccion = document.getElementById("carrito-seccion")
    const metodoEntregaRadios = document.querySelectorAll('input[name="metodo-entrega"]')
    const coordinarRetiroSection = document.getElementById("coordinar-retiro-section")

    if (continuarPagoBtn) {
      continuarPagoBtn.addEventListener("click", () => {
        carritoSeccion.style.display = "none"
        checkoutSeccion.style.display = "block"
        this.renderCheckout()
      })
    }

    if (volverCarritoBtn) {
      volverCarritoBtn.addEventListener("click", () => {
        checkoutSeccion.style.display = "none"
        carritoSeccion.style.display = "flex"
      })
    }

    metodoEntregaRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        if (e.target.value === "retiro") {
          coordinarRetiroSection.style.display = "block"
        } else {
          coordinarRetiroSection.style.display = "none"
        }
      })
    })

    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault()

        const formData = {
          metodoEntrega: document.querySelector('input[name="metodo-entrega"]:checked').value,
          nombreApellido: document.getElementById("nombre-apellido").value,
          dni: document.getElementById("dni").value,
          gmail: document.getElementById("gmail").value,
          telefono: document.getElementById("telefono").value,
          diaRetiro: document.getElementById("dia-retiro").value,
          horarioRetiro: document.getElementById("horario-retiro").value,
          items: CartManager.items,
          total: CartManager.getTotalPrice(),
        }

        console.log("Pedido realizado:", formData)

        alert("¡Pedido realizado con éxito! Federico se pondrá en contacto contigo para confirmar.")

        CartManager.clear()
        checkoutSeccion.style.display = "none"
        document.body.style.overflow = ""

        checkoutForm.reset()
      })
    }
  },

  renderCheckout() {
    const checkoutItemsLista = document.getElementById("checkout-items-lista")
    const checkoutTotal = document.getElementById("checkout-total")

    checkoutItemsLista.innerHTML = CartManager.items
      .map(
        (item) => `
      <div class="checkout-item">
        <div class="checkout-item-info">
          <div class="checkout-item-nombre">${item.nombre}</div>
          <div class="checkout-item-cantidad">Cantidad: ${item.cantidad}</div>
        </div>
        <div class="checkout-item-precio">$${item.total.toFixed(2)} USD</div>
      </div>
    `,
      )
      .join("")

    checkoutTotal.textContent = `$${CartManager.getTotalPrice().toFixed(2)} USD`
  },
}

const ProductFilterManager = {
  init() {
    this.filterButtons = document.querySelectorAll(".filtro-btn")
    this.productCards = document.querySelectorAll(".producto-card")
    this.setupEventListeners()
    this.showAllProducts()
  },

  setupEventListeners() {
    this.filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.category
        this.filterProducts(category)
        this.setActiveButton(button)
      })
    })
  },

  filterProducts(category) {
    this.productCards.forEach((card) => {
      if (category === "todos" || card.dataset.category === category) {
        card.style.display = "block"
        setTimeout(() => card.classList.add("visible"), 100)
      } else {
        card.classList.remove("visible")
        setTimeout(() => (card.style.display = "none"), 300)
      }
    })
  },

  setActiveButton(activeButton) {
    this.filterButtons.forEach((btn) => btn.classList.remove("active"))
    activeButton.classList.add("active")
  },

  showAllProducts() {
    this.productCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("visible")
      }, index * 50)
    })
  },
}

const GalleryManager = {
  init() {
    this.setupElements()
    this.generateImages()
    this.setupEventListeners()
  },

  setupElements() {
    this.verTodasBtn = document.getElementById("ver-todas")
    this.galeriaRef = document.getElementById("galeria-referencias")
    this.galeriaContenedor = document.querySelector(".galeria-imagenes")
    this.volverReferencias = document.getElementById("volver-referencias")
  },

  generateImages() {
    const imagenesRefs = Array.from({ length: 20 }, (_, i) => `imagenes/referencias${i + 1}.jpg`)

    imagenesRefs.forEach((src) => {
      const img = document.createElement("img")
      img.src = src
      img.alt = `Referencia ${src}`
      this.galeriaContenedor.appendChild(img)

      img.addEventListener("click", () => {
        const viewer = document.createElement("div")
        viewer.classList.add("galeria-imagen-principal")
        viewer.innerHTML = `<img src="${src}" alt="Referencia ampliada">`
        document.body.appendChild(viewer)

        viewer.addEventListener("click", (e) => {
          if (e.target === viewer) viewer.remove()
        })
      })
    })
  },

  setupEventListeners() {
    if (this.verTodasBtn) {
      this.verTodasBtn.addEventListener("click", () => {
        this.galeriaRef.style.display = "flex"
        document.body.style.overflow = "hidden"
      })
    }

    if (this.volverReferencias) {
      this.volverReferencias.addEventListener("click", () => {
        this.galeriaRef.style.display = "none"
        document.body.style.overflow = ""
        document.querySelector("#referencias").scrollIntoView({ behavior: "smooth" })
      })
    }
  },
}

const HamburgerMenuManager = {
  init() {
    this.hamburgerButton = document.querySelector(".hamburger-button")
    this.hamburgerMenu = document.querySelector(".hamburger-menu")

    if (this.hamburgerButton && this.hamburgerMenu) {
      this.setupEventListeners()
    }
  },

  setupEventListeners() {
    this.hamburgerButton.addEventListener("click", (e) => {
      e.stopPropagation()
      const isActive = this.hamburgerMenu.classList.toggle("active")
      this.hamburgerButton.setAttribute("aria-expanded", isActive)
    })

    document.addEventListener("click", (e) => {
      if (!this.hamburgerMenu.contains(e.target)) {
        this.hamburgerMenu.classList.remove("active")
        this.hamburgerButton.setAttribute("aria-expanded", "false")
      }
    })

    document.querySelectorAll(".hamburger-options a").forEach((link) => {
      link.addEventListener("click", () => {
        this.hamburgerMenu.classList.remove("active")
        this.hamburgerButton.setAttribute("aria-expanded", "false")
      })
    })
  },
}

const ParticlesManager = {
  canvas: null,
  ctx: null,
  particles: [],
  animationId: null,
  isDark: false,

  init() {
    this.canvas = document.getElementById("particles-canvas")
    if (!this.canvas) return

    this.ctx = this.canvas.getContext("2d")
    this.resizeCanvas()
    this.createParticles()
    this.animate()

    // Detectar cambios de tema
    this.updateTheme()
    const themeCheckbox = document.getElementById("theme-checkbox")
    if (themeCheckbox) {
      themeCheckbox.addEventListener("change", () => {
        this.updateTheme()
      })
    }

    // Redimensionar canvas cuando cambia el tamaño de la ventana
    window.addEventListener("resize", () => {
      this.resizeCanvas()
      this.createParticles()
    })
  },

  resizeCanvas() {
    const section = document.getElementById("inicio")
    if (!section) return

    this.canvas.width = section.offsetWidth
    this.canvas.height = section.offsetHeight
  },

  updateTheme() {
    this.isDark = document.body.classList.contains("dark")
  },

  createParticles() {
    this.particles = []
    const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000)

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }
  },

  drawParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.particles.forEach((particle, index) => {
      // Actualizar posición
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Rebotar en los bordes
      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.speedX *= -1
      }
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.speedY *= -1
      }

      // Efecto de pulsación
      particle.pulsePhase += particle.pulseSpeed
      const pulseFactor = Math.sin(particle.pulsePhase) * 0.3 + 0.7

      // Colores según el tema
      const baseColor = this.isDark
        ? `rgba(0, 168, 255, ${particle.opacity * pulseFactor})`
        : `rgba(0, 123, 255, ${particle.opacity * pulseFactor})`

      // Dibujar partícula
      this.ctx.beginPath()
      this.ctx.arc(particle.x, particle.y, particle.size * pulseFactor, 0, Math.PI * 2)
      this.ctx.fillStyle = baseColor
      this.ctx.fill()

      // Dibujar conexiones entre partículas cercanas
      for (let j = index + 1; j < this.particles.length; j++) {
        const other = this.particles[j]
        const dx = particle.x - other.x
        const dy = particle.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          const lineOpacity = (1 - distance / 120) * 0.15 * pulseFactor
          const lineColor = this.isDark ? `rgba(0, 212, 255, ${lineOpacity})` : `rgba(0, 168, 255, ${lineOpacity})`

          this.ctx.beginPath()
          this.ctx.strokeStyle = lineColor
          this.ctx.lineWidth = 0.5
          this.ctx.moveTo(particle.x, particle.y)
          this.ctx.lineTo(other.x, other.y)
          this.ctx.stroke()
        }
      }
    })
  },

  animate() {
    this.drawParticles()
    this.animationId = requestAnimationFrame(() => this.animate())
  },

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  },
}

const ProductosAnimationManager = {
  canvas: null,
  ctx: null,
  lights: [],
  sparkles: [],
  animationId: null,
  isDark: false,

  init() {
    this.canvas = document.getElementById("productos-canvas")
    if (!this.canvas) return

    this.ctx = this.canvas.getContext("2d")
    this.resizeCanvas()
    this.createLights()
    this.animate()

    // Detectar cambios de tema
    this.updateTheme()
    const themeCheckbox = document.getElementById("theme-checkbox")
    if (themeCheckbox) {
      themeCheckbox.addEventListener("change", () => {
        this.updateTheme()
      })
    }

    // Redimensionar canvas cuando cambia el tamaño de la ventana
    window.addEventListener("resize", () => {
      this.resizeCanvas()
      this.createLights()
    })
  },

  resizeCanvas() {
    const section = document.getElementById("productos")
    if (!section) return

    this.canvas.width = section.offsetWidth
    this.canvas.height = section.offsetHeight
  },

  updateTheme() {
    this.isDark = document.body.classList.contains("dark")
  },

  createLights() {
    this.lights = []
    const lightCount = Math.floor((this.canvas.width * this.canvas.height) / 12000)

    for (let i = 0; i < lightCount; i++) {
      this.lights.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
        glowSize: Math.random() * 20 + 15,
      })
    }

    // Inicializar array de destellos
    this.sparkles = []
  },

  createSparkle() {
    if (Math.random() < 0.02) {
      // 2% de probabilidad cada frame
      this.sparkles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 3 + 1,
        life: 1.0,
        decay: Math.random() * 0.02 + 0.01,
        rotation: Math.random() * Math.PI * 2,
      })
    }
  },

  drawLights() {
    this.lights.forEach((light, index) => {
      // Actualizar posición
      light.x += light.speedX
      light.y += light.speedY

      // Rebotar en los bordes
      if (light.x < 0 || light.x > this.canvas.width) {
        light.speedX *= -1
      }
      if (light.y < 0 || light.y > this.canvas.height) {
        light.speedY *= -1
      }

      // Efecto de pulsación
      light.pulsePhase += light.pulseSpeed
      const pulseFactor = Math.sin(light.pulsePhase) * 0.4 + 0.6

      // Colores según el tema - similar a #inicio
      const coreColor = this.isDark ? "rgba(0, 212, 255, " : "rgba(0, 168, 255, "
      const glowColor = this.isDark ? "rgba(77, 184, 255, " : "rgba(0, 123, 255, "

      // Dibujar resplandor exterior
      const gradient = this.ctx.createRadialGradient(
        light.x,
        light.y,
        0,
        light.x,
        light.y,
        light.glowSize * pulseFactor,
      )
      gradient.addColorStop(0, coreColor + light.opacity * pulseFactor + ")")
      gradient.addColorStop(0.3, glowColor + light.opacity * 0.4 * pulseFactor + ")")
      gradient.addColorStop(1, "rgba(0, 168, 255, 0)")

      this.ctx.beginPath()
      this.ctx.arc(light.x, light.y, light.glowSize * pulseFactor, 0, Math.PI * 2)
      this.ctx.fillStyle = gradient
      this.ctx.fill()

      // Dibujar núcleo brillante
      this.ctx.beginPath()
      this.ctx.arc(light.x, light.y, light.size * pulseFactor, 0, Math.PI * 2)
      this.ctx.fillStyle = coreColor + light.opacity * 0.9 * pulseFactor + ")"
      this.ctx.fill()

      // Dibujar conexiones entre luces cercanas (similar a #inicio)
      for (let j = index + 1; j < this.lights.length; j++) {
        const other = this.lights[j]
        const dx = light.x - other.x
        const dy = light.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const lineOpacity = (1 - distance / 150) * 0.1 * pulseFactor
          const lineColor = this.isDark ? `rgba(0, 212, 255, ${lineOpacity})` : `rgba(0, 168, 255, ${lineOpacity})`

          this.ctx.beginPath()
          this.ctx.strokeStyle = lineColor
          this.ctx.lineWidth = 1
          this.ctx.moveTo(light.x, light.y)
          this.ctx.lineTo(other.x, other.y)
          this.ctx.stroke()
        }
      }
    })
  },

  drawSparkles() {
    this.sparkles = this.sparkles.filter((sparkle) => {
      sparkle.life -= sparkle.decay

      if (sparkle.life <= 0) return false

      const sparkleColor = this.isDark
        ? `rgba(255, 255, 255, ${sparkle.life * 0.8})`
        : `rgba(0, 168, 255, ${sparkle.life})`

      // Dibujar forma de estrella
      this.ctx.save()
      this.ctx.translate(sparkle.x, sparkle.y)
      this.ctx.rotate(sparkle.rotation)

      // Líneas de la estrella
      for (let i = 0; i < 4; i++) {
        this.ctx.beginPath()
        this.ctx.moveTo(0, 0)
        const angle = (Math.PI / 2) * i
        const length = sparkle.size * 8 * sparkle.life
        this.ctx.lineTo(Math.cos(angle) * length, Math.sin(angle) * length)
        this.ctx.strokeStyle = sparkleColor
        this.ctx.lineWidth = 2 * sparkle.life
        this.ctx.stroke()
      }

      // Núcleo del destello
      this.ctx.beginPath()
      this.ctx.arc(0, 0, sparkle.size * sparkle.life, 0, Math.PI * 2)
      this.ctx.fillStyle = this.isDark
        ? `rgba(255, 255, 255, ${sparkle.life})`
        : `rgba(255, 255, 255, ${sparkle.life * 0.9})`
      this.ctx.fill()

      this.ctx.restore()

      return true
    })
  },

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.drawLights()
    this.createSparkle()
    this.drawSparkles()

    this.animationId = requestAnimationFrame(() => this.animate())
  },

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  },
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  })
}

document.body.classList.add("no-transition")

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("no-transition")
  }, 100)
  window.scrollTo({ top: 0, behavior: "instant" })

  ThemeManager.init()
  CartManager.init()
  ProductDetailManager.init()
  CheckoutManager.init()
  ProductFilterManager.init()
  GalleryManager.init()
  HamburgerMenuManager.init()
  initSmoothScroll()
  ParticlesManager.init()
})
