export interface Product {
  categoria: string
  descripcion: string
  detalles: string[]
  precios?: Array<[string, number]>
  rangosPerfume?: Array<[number, number, number]>
}

export const PRODUCTOS_DB = {
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
} as const

export type ProductName = keyof typeof PRODUCTOS_DB

export function calcularPrecioPorTiers(cantidad: number, precios: Array<[string, number]>): number {
  let mejorPrecio = precios[0][1]
  for (const [tier, precio] of precios) {
    const cantidadTier = Number.parseInt(String(tier).replace(/\D/g, ""), 10)
    if (!isNaN(cantidadTier) && cantidad >= cantidadTier) {
      mejorPrecio = precio
    }
  }
  return mejorPrecio
}

export function calcularPrecioPerfume(totalPerfumes: number, rangosPerfume: Array<[number, number, number]>): number {
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
