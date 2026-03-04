// src/pages/Home/HomePage.tsx
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Camera,
  CheckCircle2,
  ClipboardList,
  FileText,
  Flame,
  Headphones,
  Network,
  PhoneCall,
  Shield,
  Wrench,
  Zap,
  Building2,
} from "lucide-react";

import { Seo } from "../../lib/seo";
import { services } from "../../content/services";
import { site } from "../../content/site";

// ---------------------------------------------
// Motion presets (pro, suaves)
// ---------------------------------------------
const makeFadeUp = (reduce: boolean) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 14, filter: reduce ? "none" : "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function cn(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}

// ---------------------------------------------
// UI atoms
// ---------------------------------------------
function AccentBar() {
  return (
    <div className="mt-5 hidden items-center gap-2 sm:flex">
      <span className="h-1.5 w-10 rounded-full bg-emerald-500" />
      <span className="h-1.5 w-6 rounded-full bg-orange-500" />
      <span className="h-1.5 w-4 rounded-full bg-neutral-300 dark:bg-white/20" />
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "min-w-[220px] snap-start rounded-2xl border bg-white/80 p-4 shadow-sm backdrop-blur transition",
        "border-neutral-200 hover:border-emerald-300 hover:shadow-md",
        "dark:border-white/10 dark:bg-black/20 dark:hover:border-emerald-400/40"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-neutral-600 dark:text-white/60">{label}</p>
          <p className="mt-1 text-sm font-semibold text-neutral-950 dark:text-white">{value}</p>
        </div>
        {icon ? (
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-900 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
            {icon}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white md:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 text-sm text-neutral-700 dark:text-white/75 md:text-base">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

// ---------------------------------------------
// Icons map (slugs reales)
// ---------------------------------------------
function ServiceIcon({ slug }: { slug: string }) {
  const map: Record<string, React.ReactNode> = {
    cctv: <Camera className="h-5 w-5" />,
    "seguridad-electronica": <Shield className="h-5 w-5" />,
    "control-acceso": <BadgeCheck className="h-5 w-5" />,
    "deteccion-incendios": <Flame className="h-5 w-5" />,
    "redes-telecom": <Network className="h-5 w-5" />,
    "cableado-estructurado": <Building2 className="h-5 w-5" />,
    "instalaciones-electricas": <Zap className="h-5 w-5" />,
  };

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-white text-neutral-900 shadow-sm transition",
        "border-neutral-200 group-hover:border-emerald-300",
        "dark:border-white/10 dark:bg-white/5 dark:text-white dark:group-hover:border-emerald-400/40"
      )}
      aria-hidden="true"
    >
      {map[slug] ?? <Wrench className="h-5 w-5" />}
    </span>
  );
}

// ---------------------------------------------
// Carousel (tren) — sin sombras laterales
// ---------------------------------------------
function ProjectsCarousel({
  images,
  reduceMotion,
}: {
  images: Array<{ src: string; alt: string }>;
  reduceMotion: boolean;
}) {
  const loop = [...images, ...images];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40">
      <div className={cn("flex gap-3 p-4", reduceMotion ? "" : "animate-[marquee_22s_linear_infinite]")}>
        {loop.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            className="relative h-44 w-[260px] flex-none overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-white/5 md:h-52 md:w-[320px]"
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}

// ---------------------------------------------
// Page
// ---------------------------------------------
export function HomePage() {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(!!reduceMotion);

  const wa = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;

  const projects = [
    { src: "/images/projects/p1.jpg", alt: "Instalación de cámaras CCTV en negocio" },
    { src: "/images/projects/p2.jpg", alt: "Cableado estructurado y rack ordenado" },
    { src: "/images/projects/p3.jpg", alt: "Control de acceso en oficina" },
    { src: "/images/projects/p4.jpg", alt: "Instalación eléctrica profesional" },
    { src: "/images/projects/p5.jpg", alt: "Puntos de red y canalización" },
    { src: "/images/projects/p6.jpg", alt: "Equipos y pruebas de red" },
  ];

  // inView settings (sin spread para evitar error TS)
  const inViewInitial = "hidden" as const;
  const inViewWhile = "show" as const;
  const inViewViewport = { once: true, amount: 0.2 };
  const inViewTransition = reduceMotion ? { duration: 0.01 } : { duration: 0.45, ease: "easeOut" as const };

  return (
    <>
      <Seo
        title="Tecnictels | CCTV, Redes, Cableado Estructurado y Electricidad en Quito"
        description="Tecnictels en Quito, Ecuador: instalación profesional de CCTV, control de acceso, detección de incendios, cableado estructurado, redes/telecomunicaciones, data center y electricidad. Cotiza hoy por WhatsApp."
        path="/"
      />

      {/* HERO FULL WIDTH + OFFSET POR NAVBAR FIXED */}
      <section className="relative w-full overflow-hidden pt--2">
        {/* blobs suaves */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative w-full">
          <div className="relative w-full overflow-hidden border-y border-neutral-200 bg-neutral-900 shadow-sm dark:border-white/10">
            <img
              src="/images/hero-tech-wide.jpg"
              alt="Tecnictels - infraestructura tecnológica y seguridad"
              className="h-[520px] w-full object-cover opacity-90 md:h-[600px]"
              loading="eager"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-6 md:pb-12">
                <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
                  <motion.h1
                    variants={fadeUp}
                    className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl"
                  >
                    Infraestructura{" "}
                    <span className="text-white/75">segura, ordenada y escalable</span>{" "}
                    para tu operación.
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-3 text-sm text-white/80 sm:text-base md:mt-4 md:text-lg">
                    Instalamos <b>CCTV</b>, <b>control de acceso</b>, <b>detección de incendios</b>,{" "}
                    <b>cableado</b>, <b>redes</b> y <b>electricidad</b> con enfoque técnico y garantía.
                  </motion.p>

                  <motion.div variants={fadeUp}>
                    <AccentBar />
                  </motion.div>

                  {/* CTAs: en móvil grid (no se desborda) */}
                  <motion.div variants={fadeUp} className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:flex sm:flex-wrap">
                    <Link
                      to="/contacto"
                      className="col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 active:scale-[0.99]"
                    >
                      <PhoneCall className="h-4 w-4" />
                      Solicitar cotización
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <a
                      href={wa}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 active:scale-[0.99]"
                    >
                      <PhoneCall className="h-4 w-4" />
                      WhatsApp
                    </a>

                    <Link
                      to="/servicios"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/0 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.99]"
                    >
                      <ClipboardList className="h-4 w-4" />
                      Ver servicios
                    </Link>
                  </motion.div>

                  {/* Stats: en móvil carrusel horizontal (menos alto, más pro) */}
                  <motion.div variants={fadeUp} className="mt-6">
                    <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
                      <StatCard label="Enfoque" value="Calidad & orden" icon={<CheckCircle2 className="h-5 w-5" />} />
                      <StatCard label="Entrega" value="A tiempo" icon={<CalendarCheck className="h-5 w-5" />} />
                      <StatCard label="Soporte" value="Garantía" icon={<Headphones className="h-5 w-5" />} />
                    </div>
                  </motion.div>

                  {/* (QUITADO) Personal técnico / Documentación / Buenas prácticas */}
                </motion.div>
              </div>
            </div>
          </div>

          {/* TRUST BAR */}
          <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                { t: "Trabajo limpio y etiquetado", d: "Canalización, racks, patch panels y orden para mantenimiento futuro." },
                { t: "Pruebas y verificación", d: "Configuración, pruebas de conectividad y entrega con evidencia." },
                { t: "Soporte y garantía", d: "Acompañamiento post-instalación y respuesta rápida." },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
                >
                  <p className="text-sm font-semibold text-neutral-950 dark:text-white">{x.t}</p>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-white/75">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div
            variants={stagger}
            initial={inViewInitial}
            whileInView={inViewWhile}
            viewport={inViewViewport}
            transition={inViewTransition}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                title="Servicios"
                subtitle="Soluciones para hogares, comercios y empresas."
                action={
                  <Link
                    to="/servicios"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition hover:text-neutral-700 dark:text-white dark:hover:text-white/80"
                  >
                    Ver todo <ArrowRight className="h-4 w-4" />
                  </Link>
                }
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((s) => (
                <motion.div
                  key={s.slug}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  transition={reduceMotion ? undefined : { type: "spring", stiffness: 220, damping: 20 }}
                  className="h-full"
                >
                  <Link
                    to={`/servicios#${s.slug}`}
                    className={cn(
                      "group flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition",
                      "border-neutral-200 hover:border-emerald-300 hover:shadow-md",
                      "dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
                    )}
                  >
                    <div className="relative">
                      <img
                        src={s.image ?? "/images/service-default.jpg"}
                        alt={s.title}
                        className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

                      <div className="absolute left-4 top-4 flex items-center gap-2">
                        <ServiceIcon slug={s.slug} />
                        <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm dark:bg-black/30 dark:text-white">
                          {s.title}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-sm text-neutral-700 dark:text-white/75">{s.short}</p>

                      {/* Menos texto: 2 bullets (más limpio) */}
                      <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-white/70">
                        {s.bullets.slice(0, 2).map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-xs font-semibold text-neutral-500 dark:text-white/60">Ver detalle</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white transition group-hover:bg-emerald-600">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="border-t border-neutral-200 bg-transparent dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div
            variants={stagger}
            initial={inViewInitial}
            whileInView={inViewWhile}
            viewport={inViewViewport}
            transition={inViewTransition}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader title="Cómo trabajamos" subtitle="Proceso claro para entregar una instalación mantenible." />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Levantamiento", desc: "Visita técnica o diagnóstico remoto.", icon: <ClipboardList className="h-5 w-5" /> },
                { title: "Propuesta", desc: "Cotización con materiales y tiempos.", icon: <FileText className="h-5 w-5" /> },
                { title: "Instalación", desc: "Orden, canalización, configuración y pruebas.", icon: <Wrench className="h-5 w-5" /> },
                { title: "Entrega", desc: "Evidencias y garantía / soporte.", icon: <BadgeCheck className="h-5 w-5" /> },
              ].map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
                      {step.icon}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500 dark:text-white/60">Paso {i + 1}</span>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-neutral-950 dark:text-white">{step.title}</p>
                  <p className="mt-2 text-sm text-neutral-700 dark:text-white/75">{step.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div
            variants={stagger}
            initial={inViewInitial}
            whileInView={inViewWhile}
            viewport={inViewViewport}
            transition={inViewTransition}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                title="Proyectos realizados"
                subtitle="Algunas instalaciones y trabajos."
                action={
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 active:scale-[0.99]
                      dark:bg-emerald-600 dark:hover:opacity-95"
                  >
                    Agendar visita <ArrowRight className="h-4 w-4" />
                  </Link>
                }
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <ProjectsCarousel images={projects} reduceMotion={!!reduceMotion} />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                { icon: <Shield className="h-5 w-5" />, t: "Seguridad", d: "CCTV, control de acceso, alarmas y monitoreo." },
                { icon: <Network className="h-5 w-5" />, t: "Redes", d: "Cableado estructurado, puntos de red, racks y Wi-Fi." },
                { icon: <Zap className="h-5 w-5" />, t: "Energía", d: "Instalaciones eléctricas, tableros y canalización." },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
                      {x.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-950 dark:text-white">{x.t}</p>
                      <p className="text-sm text-neutral-700 dark:text-white/75">{x.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ MINI */}
      <section className="border-t border-neutral-200 bg-transparent dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div
            variants={stagger}
            initial={inViewInitial}
            whileInView={inViewWhile}
            viewport={inViewViewport}
            transition={inViewTransition}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader title="Preguntas frecuentes" subtitle="Resolvemos lo más común antes de cotizar." />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                { q: "¿Trabajan solo en Quito?", a: "Principalmente en Quito y alrededores. Para otras ciudades, depende del alcance." },
                { q: "¿Entregan documentación del trabajo?", a: "Sí. Incluimos evidencias y recomendaciones según el servicio." },
                { q: "¿Qué información necesitan para cotizar?", a: "Ubicación, servicio, cantidad aproximada y fotos (si es posible)." },
                { q: "¿Tienen garantía?", a: "Sí. Depende del servicio y materiales; se detalla en la propuesta." },
              ].map((f) => (
                <div
                  key={f.q}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
                >
                  <p className="text-sm font-semibold text-neutral-950 dark:text-white">{f.q}</p>
                  <p className="mt-2 text-sm text-neutral-700 dark:text-white/75">{f.a}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-neutral-200 bg-transparent dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? { duration: 0.01 } : { duration: 0.35 }}
            className="rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white transition hover:border-emerald-300 hover:shadow-md md:p-10 dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">¿Listo para cotizar tu proyecto?</h2>
                <p className="mt-2 text-sm text-white/80 md:text-base dark:text-white/70">
                  Escríbenos por WhatsApp o envía tus requerimientos desde el formulario.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-white/80 dark:text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Recomendaciones técnicas claras.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Propuesta con materiales y tiempos.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Instalación con garantía.
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 active:scale-[0.99]
                    dark:bg-emerald-600 dark:text-white dark:hover:opacity-95"
                >
                  <PhoneCall className="h-4 w-4" />
                  WhatsApp
                </a>

                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.99]
                    dark:border-white/15"
                >
                  <FileText className="h-4 w-4" />
                  Formulario
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}