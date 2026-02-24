import { Seo } from "../../lib/seo";
import { motion } from "framer-motion";

type Project = {
  title: string;
  client: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  highlights: string[];
  tags: string[];
  icon: "cctv" | "access" | "structured" | "data" | "lighting" | "warehouse";
  image: string; // ruta en /public
};

function Icon({ name }: { name: Project["icon"] }) {
  const cls = "h-5 w-5";
  switch (name) {
    case "cctv":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
          <path
            d="M4 10.5l10-4.5 6 3v6l-10 4.5-6-3v-6Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M14 6v6.2" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 16.8V20" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "access":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
          <path
            d="M7 10a5 5 0 0 1 10 0v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M12 14v2" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 21h14" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "structured":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
          <path
            d="M7 7h10v10H7V7Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M7 12h10" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 7v10" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "data":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
          <path
            d="M6 7c0-1.1 2.7-2 6-2s6 .9 6 2-2.7 2-6 2-6-.9-6-2Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M6 7v10c0 1.1 2.7 2 6 2s6-.9 6-2V7"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M6 12c0 1.1 2.7 2 6 2s6-.9 6-2" className="stroke-current" strokeWidth="1.8" />
        </svg>
      );
    case "lighting":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
          <path
            d="M9 18h6"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10 21h4"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 3a6 6 0 0 0-3.7 10.7c.5.4.7.9.7 1.5V16h6v-.8c0-.6.2-1.1.7-1.5A6 6 0 0 0 12 3Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "warehouse":
    default:
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
          <path
            d="M3 10.5 12 5l9 5.5V21H3V10.5Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M8 21v-8h8v8" className="stroke-current" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
  }
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border theme-border bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-white/5 dark:text-white/80">
      {children}
    </span>
  );
}

const projects: Project[] = [
  {
    title: "Cámaras y GPS para flota (camiones)",
    client: "Coca-Cola (referencial)",
    category: "CCTV + Telemetría",
    location: "Quito, EC",
    year: "2026",
    summary:
      "Implementación de videovigilancia móvil para flota: cámaras internas/externas, grabación, y monitoreo centralizado para trazabilidad y seguridad.",
    highlights: ["Cámaras vehiculares HD", "Grabación local + monitoreo", "Cableado y protección eléctrica"],
    tags: ["CCTV", "Flotas", "Seguridad"],
    icon: "cctv",
    image: "/images/hero-tech.jpg",
  },
  {
    title: "Control de acceso biométrico",
    client: "Banco Pichincha (referencial)",
    category: "Control de acceso",
    location: "Quito, EC",
    year: "2026",
    summary:
      "Control de ingreso por huella y tarjetas, gestión de usuarios y registros, integración de cerraduras y señalética para cumplimiento interno.",
    highlights: ["Biometría + tarjetas", "Registros y auditoría", "Seguridad perimetral"],
    tags: ["Acceso", "Biometría", "Cumplimiento"],
    icon: "access",
    image: "/images/hero-tech.jpg",
  },
  {
    title: "Cableado estructurado y gabinete",
    client: "Cooperativa Cooprogreso (referencial)",
    category: "Redes",
    location: "Quito, EC",
    year: "2026",
    summary:
      "Diseño e instalación de cableado estructurado, organización de rack, patch panel, etiquetado y pruebas de conectividad para operación estable.",
    highlights: ["Rack + Patch panel", "Etiquetado profesional", "Buenas prácticas de tendido"],
    tags: ["Redes", "Cableado", "Rack"],
    icon: "structured",
    image: "/images/hero-tech.jpg",
  },
  {
    title: "CCTV + puntos de datos para retail",
    client: "Promart (referencial)",
    category: "CCTV + Datos",
    location: "Quito, EC",
    year: "2026",
    summary:
      "Cobertura de cámaras en áreas críticas y despliegue de puntos de red para POS y oficinas. Orden y documentación técnica.",
    highlights: ["Cobertura estratégica", "Puntos de red certificados", "Documentación y planos"],
    tags: ["CCTV", "Retail", "Datos"],
    icon: "data",
    image: "/images/hero-tech.jpg",
  },
  {
    title: "Instalación de luminarias LED",
    client: "AKÍ (referencial)",
    category: "Electricidad",
    location: "Quito, EC",
    year: "2026",
    summary:
      "Migración a iluminación LED con enfoque en eficiencia y seguridad. Revisión de protecciones, cargas y normativas básicas.",
    highlights: ["Eficiencia energética", "Mejor iluminación", "Revisión eléctrica"],
    tags: ["LED", "Electricidad", "Eficiencia"],
    icon: "lighting",
    image: "/images/hero-tech.jpg",
  },
  {
    title: "Seguridad y redes en galpones industriales",
    client: "Empresas (referencial)",
    category: "Infraestructura",
    location: "Quito, EC",
    year: "2026",
    summary:
      "Implementación de CCTV perimetral, red de datos y canalización para operación industrial. Soluciones robustas y escalables.",
    highlights: ["Cobertura perimetral", "Canalización industrial", "Escalabilidad por fases"],
    tags: ["Industrial", "CCTV", "Redes"],
    icon: "warehouse",
    image: "/images/hero-tech.jpg",
  },
];

export function ProjectsPage() {
  const wa = `https://wa.me/593989941174?text=${encodeURIComponent(
    "Hola Tecnictels, quiero una cotización. Me interesa un proyecto similar a los de su portafolio."
  )}`;

  return (
    <>
      <Seo
        title="Proyectos | Tecnictels"
        description="Portafolio de proyectos de CCTV, redes, cableado estructurado, control de acceso, electricidad e infraestructura realizados por Tecnictels."
        path="/proyectos"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b theme-border theme-surface">
        {/* glow */}
        <div className="pointer-events-none absolute -top-28 right-[-140px] h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-[-140px] h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border theme-border bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-white/5 dark:text-white/80">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Portafolio (referencial)
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                Proyectos ejecutados y soluciones listas para tu empresa
              </h1>

              <p className="mt-4 text-neutral-700 dark:text-white/70">
                CCTV, control de acceso, redes y telecom, cableado estructurado y electricidad. Diseño limpio,
                instalación profesional y soporte.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href="#galeria"
                  className="inline-flex items-center justify-center rounded-full border theme-border bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 active:scale-[0.99] dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Ver proyectos
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Badge>Implementación</Badge>
                <Badge>Documentación</Badge>
                <Badge>Escalable</Badge>
                <Badge>Soporte</Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border theme-border bg-neutral-900/5 shadow-sm dark:bg-white/5">
                <img
                  src="/images/hero-tech.jpg"
                  alt="Proyectos Tecnictels"
                  className="h-[260px] w-full object-cover sm:h-[340px]"
                  loading="lazy"
                />
              </div>

              {/* mini stats */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border theme-border bg-white p-4 text-center shadow-sm dark:bg-white/5">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-white/60">Enfoque</p>
                  <p className="mt-1 text-sm font-extrabold text-neutral-900 dark:text-white">Seguridad</p>
                </div>
                <div className="rounded-2xl border theme-border bg-white p-4 text-center shadow-sm dark:bg-white/5">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-white/60">Calidad</p>
                  <p className="mt-1 text-sm font-extrabold text-neutral-900 dark:text-white">Pro</p>
                </div>
                <div className="rounded-2xl border theme-border bg-white p-4 text-center shadow-sm dark:bg-white/5">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-white/60">Cobertura</p>
                  <p className="mt-1 text-sm font-extrabold text-neutral-900 dark:text-white">Empresas</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Galería de proyectos
            </h2>
            <p className="mt-2 text-neutral-700 dark:text-white/70">
              Selección de implementaciones típicas (referenciales) para mostrar el alcance: instalación, integración y
              orden técnico.
            </p>
          </div>

          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border theme-border bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 active:scale-[0.99] dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Pedir propuesta
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="group overflow-hidden rounded-3xl border theme-border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/5"
            >
              <div className="relative">
                <img src={p.image} alt={p.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur dark:bg-black/40 dark:text-white">
                  <span className="text-emerald-600 dark:text-emerald-400">
                    <Icon name={p.icon} />
                  </span>
                  {p.category}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-extrabold text-neutral-950 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-neutral-500 dark:text-white/60">
                      {p.client} · {p.location} · {p.year}
                    </p>
                  </div>

                  <span className="h-10 w-10 shrink-0 rounded-2xl border theme-border bg-neutral-50 p-2 text-neutral-700 dark:bg-white/5 dark:text-white/80">
                    <Icon name={p.icon} />
                  </span>
                </div>

                <p className="mt-3 text-sm text-neutral-700 dark:text-white/70">{p.summary}</p>

                <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-white/70">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-500 to-orange-500" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border theme-border bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-white/5 dark:text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    Cotizar este tipo →
                  </a>

                  <span className="text-xs font-semibold text-neutral-400 dark:text-white/40">
                    Tecnictels
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-14 overflow-hidden rounded-3xl border theme-border bg-gradient-to-r from-emerald-600/15 via-emerald-600/5 to-orange-500/15 p-8 dark:from-emerald-500/15 dark:via-emerald-500/5 dark:to-orange-400/15">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
                ¿Quieres que tu proyecto quede así de ordenado y profesional?
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-white/70">
                Te proponemos una solución por fases: visita técnica, diseño, instalación y soporte.
              </p>
            </div>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}