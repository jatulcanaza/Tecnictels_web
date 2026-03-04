export type Service = {
  slug: string;
  title: string;
  short: string;
  details: string;      // explicación más completa
  bullets: string[];
  useCases: string[];   // ejemplos claros para el cliente
  image: string;        // ruta a imagen/gif en /public/images
  ctaLabel?: string;    // texto del botón (opcional)
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "cctv",
    title: "CCTV",
    short: "Instalación y configuración de videovigilancia para hogares y empresas.",
    details:
      "Diseñamos e instalamos sistemas de videovigilancia con cobertura estratégica, grabación confiable y acceso remoto seguro. Optimizamos ángulos, puntos críticos y calidad de imagen para control y evidencia.",
    bullets: ["Diseño de cobertura", "Instalación profesional", "Acceso remoto y mantenimiento"],
    useCases: ["Casas y condominios", "Locales comerciales", "Bodegas y oficinas"],
    image: "/images/service-cctv.jpg",
    ctaLabel: "Quiero cotizar CCTV",
    keywords: ["cctv quito", "camaras de seguridad quito", "videovigilancia ecuador"],
  },
  {
    slug: "seguridad-electronica",
    title: "Seguridad electrónica",
    short: "Alarmas, detección de intrusión y soluciones integradas de protección.",
    details:
      "Implementamos sistemas de alarma e intrusión con sensores, sirenas y configuración por zonas. Integramos con CCTV y control de acceso para una solución completa.",
    bullets: ["Alarmas", "Sensores", "Integración y monitoreo"],
    useCases: ["Hogares", "Negocios", "Áreas restringidas"],
    image: "/images/service-alarmas.jpg",
    ctaLabel: "Quiero seguridad electrónica",
    keywords: ["alarmas quito", "seguridad electronica quito"],
  },
  {
    slug: "control-acceso",
    title: "Control de acceso",
    short: "Control de ingreso para oficinas, condominios y áreas críticas.",
    details:
      "Controla quién entra, cuándo y por dónde. Implementamos soluciones por tarjeta, PIN o biometría con registro de eventos e integración con cámaras.",
    bullets: ["Biometría / tarjetas", "Registro de eventos", "Integración con CCTV"],
    useCases: ["Oficinas", "Condominios", "Áreas críticas"],
    image: "/images/service-acceso.jpg",
    ctaLabel: "Quiero control de acceso",
    keywords: ["control de acceso quito", "acceso biometrico quito"],
  },
  {
    slug: "deteccion-incendios",
    title: "Detección de incendios",
    short: "Sistemas de detección y alerta para cumplimiento y seguridad.",
    details:
      "Diseñamos e instalamos sistemas de detección y alerta (sensores, paneles y sirenas), con pruebas y mantenimiento para una operación confiable y segura.",
    bullets: ["Diseño e instalación", "Pruebas y mantenimiento", "Normativas y buenas prácticas"],
    useCases: ["Comercios", "Edificios", "Bodegas y oficinas"],
    image: "/images/service-incendios.jpg",
    ctaLabel: "Quiero detección de incendios",
    keywords: ["deteccion de incendios quito", "sistemas contra incendios quito"],
  },
  {
    slug: "redes-telecom",
    title: "Redes y telecomunicaciones",
    short: "Conectividad, configuración y soporte para redes empresariales.",
    details:
      "Diseñamos y configuramos redes LAN/WiFi con buenas prácticas: segmentación, rendimiento, cobertura y seguridad. También realizamos soporte y optimización.",
    bullets: ["LAN / WiFi", "Configuración de equipos", "Soporte y optimización"],
    useCases: ["Oficinas", "Locales con WiFi", "Operaciones multiárea"],
    image: "/images/service-redes.jpg",
    ctaLabel: "Quiero redes y telecom",
    keywords: ["redes quito", "telecomunicaciones quito", "wifi empresarial quito"],
  },
  {
    slug: "cableado-estructurado",
    title: "Cableado estructurado y Data Center",
    short: "Infraestructura de datos profesional para máxima estabilidad y rendimiento.",
    details:
      "Implementamos infraestructura de datos ordenada y escalable: canalización, puntos de red, rack, patch panel y organización. Ideal para empresas que requieren estabilidad.",
    bullets: ["Canalización y puntos de red", "Rack y patch panel", "Certificación y ordenamiento"],
    useCases: ["Oficinas", "Data centers", "Expansión de infraestructura"],
    image: "/images/service-cableado.jpg",
    ctaLabel: "Quiero cableado estructurado",
    keywords: ["cableado estructurado quito", "data center quito", "infraestructura de datos"],
  },
  {
    slug: "instalaciones-electricas",
    title: "Instalaciones eléctricas",
    short: "Soluciones eléctricas seguras para proyectos residenciales y comerciales.",
    details:
      "Instalaciones eléctricas con enfoque en seguridad y estabilidad: iluminación, fuerza, puesta a tierra y respaldo (UPS). Ideal para continuidad operativa.",
    bullets: ["Iluminación", "Fuerza", "Sistemas de tierra", "UPS"],
    useCases: ["Residencial", "Comercial", "Infraestructura crítica"],
    image: "/images/service-electricidad.jpg",
    ctaLabel: "Quiero instalaciones eléctricas",
    keywords: ["instalaciones electricas quito", "sistema de tierra quito", "ups quito"],
  },
];