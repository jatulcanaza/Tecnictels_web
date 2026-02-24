export type Service = {
  slug: string;
  title: string;
  short: string;
  bullets: string[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "cctv",
    title: "CCTV",
    short: "Instalación y configuración de videovigilancia para hogares y empresas.",
    bullets: ["Diseño de cobertura", "Instalación profesional", "Acceso remoto y mantenimiento"],
    keywords: ["cctv quito", "camaras de seguridad quito", "videovigilancia ecuador"],
  },
  {
    slug: "seguridad-electronica",
    title: "Seguridad electrónica",
    short: "Alarmas, detección de intrusión y soluciones integradas de protección.",
    bullets: ["Alarmas", "Sensores", "Integración y monitoreo"],
    keywords: ["alarmas quito", "seguridad electronica quito"],
  },
  {
    slug: "control-acceso",
    title: "Control de acceso",
    short: "Control de ingreso para oficinas, condominios y áreas críticas.",
    bullets: ["Biometría / tarjetas", "Registro de eventos", "Integración con CCTV"],
    keywords: ["control de acceso quito", "acceso biometrico quito"],
  },
  {
    slug: "deteccion-incendios",
    title: "Detección de incendios",
    short: "Sistemas de detección y alerta para cumplimiento y seguridad.",
    bullets: ["Diseño e instalación", "Pruebas y mantenimiento", "Normativas y buenas prácticas"],
    keywords: ["deteccion de incendios quito", "sistemas contra incendios quito"],
  },
  {
    slug: "redes-telecom",
    title: "Redes y telecomunicaciones",
    short: "Conectividad, configuración y soporte para redes empresariales.",
    bullets: ["LAN / WiFi", "Configuración de equipos", "Soporte y optimización"],
    keywords: ["redes quito", "telecomunicaciones quito", "wifi empresarial quito"],
  },
  {
    slug: "cableado-estructurado",
    title: "Cableado estructurado y Data Center",
    short: "Infraestructura de datos profesional para máxima estabilidad y rendimiento.",
    bullets: ["Canalización y puntos de red", "Rack y patch panel", "Certificación y ordenamiento"],
    keywords: ["cableado estructurado quito", "data center quito", "infraestructura de datos"],
  },
  {
    slug: "instalaciones-electricas",
    title: "Instalaciones eléctricas",
    short: "Soluciones eléctricas seguras para proyectos residenciales y comerciales.",
    bullets: ["Iluminación", "Fuerza", "Sistemas de tierra", "UPS"],
    keywords: ["instalaciones electricas quito", "sistema de tierra quito", "ups quito"],
  },
];