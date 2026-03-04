// src/pages/Services/ServicesPage.tsx
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ClipboardList,
  Flame,
  Lock,
  Network,
  Shield,
  Zap,
  Building2,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Seo } from "../../lib/seo";
import { services } from "../../content/services";
import { site } from "../../content/site";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/** Easing premium (tipado OK para TS) */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* -------------------------
   Motion presets (premium)
-------------------------- */
const makeFadeUp = (reduce: boolean): Variants => ({
  hidden: {
    opacity: 0,
    y: reduce ? 0 : 14,
    filter: reduce ? "none" : "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: reduce ? 0.01 : 0.45,
      ease: EASE_OUT,
    },
  },
});

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* -------------------------
   UI atoms
-------------------------- */
function AccentBar() {
  return (
    <div className="mt-6 flex items-center gap-2">
      <span className="h-1.5 w-10 rounded-full bg-emerald-500" />
      <span className="h-1.5 w-6 rounded-full bg-orange-500" />
      <span className="h-1.5 w-4 rounded-full bg-neutral-300 dark:bg-white/20" />
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
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white md:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 text-sm text-neutral-700 dark:text-white/75 md:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

/* -------------------------
   Icons por slug (tus slugs reales)
-------------------------- */
function ServiceIcon({ slug }: { slug: string }) {
  const map: Record<string, React.ReactNode> = {
    cctv: <Camera className="h-5 w-5" />,
    "seguridad-electronica": <Shield className="h-5 w-5" />,
    "control-acceso": <Lock className="h-5 w-5" />,
    "deteccion-incendios": <Flame className="h-5 w-5" />,
    "redes-telecom": <Network className="h-5 w-5" />,
    "cableado-estructurado": <Building2 className="h-5 w-5" />,
    "instalaciones-electricas": <Zap className="h-5 w-5" />,
  };

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-white text-neutral-900 shadow-sm transition",
        "border-neutral-200 group-hover:border-emerald-300 group-hover:shadow-md",
        "dark:border-white/10 dark:bg-white/5 dark:text-white dark:group-hover:border-emerald-400/40"
      )}
      aria-hidden="true"
    >
      {map[slug] ?? <BadgeCheck className="h-5 w-5" />}
    </span>
  );
}

/* -------------------------
   WhatsApp CTA por servicio
-------------------------- */
function ServiceCTA(props: { serviceTitle: string; label?: string }) {
  const text = `Hola Tecnictels, necesito una cotización para: ${props.serviceTitle}. ¿Me pueden ayudar?`;
  const href = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(text)}`;

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
      >
        <PhoneCall className="h-4 w-4" />
        {props.label ?? "Quiero cotizar"}
        <ArrowRight className="h-4 w-4" />
      </a>

      <Link
        to="/contacto"
        className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 active:scale-[0.99]
        dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
      >
        Formulario de contacto
      </Link>
    </div>
  );
}

/* -------------------------
   Carousel (slides) simple, sin libs
-------------------------- */
function MediaCarousel({
  images,
  altBase,
  reduceMotion,
}: {
  images: string[];
  altBase: string;
  reduceMotion: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    if (hovered) return;
    if (images.length <= 1) return;

    const t = window.setInterval(() => {
      setIdx((v) => (v + 1) % images.length);
    }, 3500);

    return () => window.clearInterval(t);
  }, [reduceMotion, hovered, images.length]);

  const prev = () => setIdx((v) => (v - 1 + images.length) % images.length);
  const next = () => setIdx((v) => (v + 1) % images.length);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border bg-white shadow-sm transition",
        "border-neutral-200 hover:border-emerald-300 hover:shadow-md",
        "dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-64 w-full md:h-[360px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${images[idx]}-${idx}`}
            src={images[idx]}
            alt={`${altBase} - ${idx + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.01 }}
            transition={
              reduceMotion ? { duration: 0.01 } : { duration: 0.35, ease: EASE_OUT }
            }
            loading="lazy"
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:bg-black/40"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:bg-black/40"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  className={cn(
                    "h-1.5 w-6 rounded-full transition",
                    i === idx ? "bg-emerald-400" : "bg-white/40 hover:bg-white/55"
                  )}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

/* -------------------------
   Accordion (para móvil)
-------------------------- */
function MobileDetails({
  details,
  bullets,
  useCases,
}: {
  details: string;
  bullets: string[];
  useCases: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5 md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition",
          "border-neutral-200 bg-white hover:border-emerald-300",
          "dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
        )}
      >
        <span className="flex items-center justify-between">
          <span>{open ? "Ocultar detalles" : "Ver detalles"}</span>
          <span className="text-neutral-500 dark:text-white/60">{open ? "–" : "+"}</span>
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -6 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-3 rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-neutral-700 dark:text-white/75">{details}</p>

              <div className="grid gap-3">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-semibold text-neutral-600 dark:text-white/60">Incluye</p>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-white/75">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-semibold text-neutral-600 dark:text-white/60">Ideal para</p>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-white/75">
                    {useCases.map((u) => (
                      <li key={u} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------
   Page
-------------------------- */
export function ServicesPage() {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(!!reduceMotion);

  const waGlobal = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;

  // Galería opcional por servicio (si no existe, usa s.image)
  const galleryBySlug: Record<string, string[]> = {
    cctv: ["/images/services/cctv/1.jpg", "/images/services/cctv/2.jpg", "/images/services/cctv/3.jpg"],
    "seguridad-electronica": ["/images/services/seguridad/1.jpg", "/images/services/seguridad/2.jpg"],
    "control-acceso": ["/images/services/acceso/1.jpg", "/images/services/acceso/2.jpg"],
    "deteccion-incendios": ["/images/services/incendios/1.jpg", "/images/services/incendios/2.jpg"],
    "redes-telecom": ["/images/services/redes/1.jpg", "/images/services/redes/2.jpg"],
    "cableado-estructurado": ["/images/services/cableado/1.jpg", "/images/services/cableado/2.jpg"],
    "instalaciones-electricas": ["/images/services/electricidad/1.jpg", "/images/services/electricidad/2.jpg"],
  };

  // Scroll a hash (#slug)
  const { hash } = useLocation();
  const didScrollRef = useRef(false);
  useEffect(() => {
    if (!hash) return;
    if (didScrollRef.current) return;
    didScrollRef.current = true;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    window.setTimeout(() => {
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }, 80);
  }, [hash, reduceMotion]);

  return (
    <>
      <Seo
        title="Servicios | Tecnictels"
        description="Servicios profesionales en Quito: CCTV, seguridad electrónica, control de acceso, detección de incendios, redes y telecomunicaciones, cableado estructurado / data center e instalaciones eléctricas."
        path="/servicios"
      />

      {/* HERO (sin pills y sin buscador) */}
      <section className="relative w-full overflow-hidden border-b border-neutral-200 bg-neutral-950 dark:border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-44 left-1/3 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="absolute inset-0">
          <img
            src="/images/services/hero-services.gif"
            alt="Servicios Tecnictels"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.h1
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-white md:text-5xl"
            >
              Servicios <span className="text-white/75">premium y escalables</span> para tu hogar y empresa.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-base text-white/80 md:text-lg">
              Implementamos infraestructura confiable: <b>CCTV</b>, <b>seguridad electrónica</b>,{" "}
              <b>control de acceso</b>, <b>detección de incendios</b>, <b>redes</b>,{" "}
              <b>cableado estructurado</b> e <b>instalaciones eléctricas</b>.
            </motion.p>

            <motion.div variants={fadeUp}>
              <AccentBar />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <a
                href={waGlobal}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 active:scale-[0.99]"
              >
                <PhoneCall className="h-4 w-4" />
                Cotizar por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 active:scale-[0.99]"
              >
                <ClipboardList className="h-4 w-4" />
                Enviar requerimiento
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GRID RESUMEN */}
      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                title="Todos nuestros servicios"
                subtitle="Selecciona un módulo para ver detalles."
                action={
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50
                    dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    <BadgeCheck className="h-4 w-4" />
                    Hablar con un asesor
                  </Link>
                }
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className={cn(
                    "group rounded-3xl border bg-white p-5 shadow-sm transition",
                    "border-neutral-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md",
                    "dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <ServiceIcon slug={s.slug} />
                      <div>
                        <p className="text-sm font-semibold text-neutral-950 dark:text-white">{s.title}</p>
                        <p className="mt-1 text-sm text-neutral-700 dark:text-white/75">{s.short}</p>
                      </div>
                    </div>

                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white transition group-hover:bg-emerald-600 dark:bg-white/10">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.bullets.slice(0, 2).map((b) => (
                      <span
                        key={b}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700
                        dark:bg-white/10 dark:text-white/80"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs font-semibold text-neutral-500 dark:text-white/60">
                    Ver detalle del servicio
                  </p>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DETALLE */}
      <section className="border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-10"
          >
            {services.map((s, idx) => {
              const reverse = idx % 2 === 1;
              const media = galleryBySlug[s.slug]?.length ? galleryBySlug[s.slug] : [s.image];

              return (
                <motion.article
                  key={s.slug}
                  id={s.slug}
                  variants={fadeUp}
                  className={cn(
                    "scroll-mt-24 rounded-3xl border bg-white p-6 shadow-sm transition md:p-8",
                    "border-neutral-200 hover:border-emerald-300 hover:shadow-md",
                    "dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
                  )}
                >
                  <div className={cn("grid gap-8 md:grid-cols-2", reverse ? "md:[&>*:first-child]:order-2" : "")}>
                    <MediaCarousel images={media} altBase={s.title} reduceMotion={!!reduceMotion} />

                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <ServiceIcon slug={s.slug} />
                        <div>
                          <p className="text-xs font-semibold tracking-wider text-neutral-600 dark:text-white/60">
                            SERVICIO
                          </p>
                          <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
                            {s.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-neutral-700 dark:text-white/75 md:text-base">
                        {s.details}
                      </p>

                      <div className="mt-5 hidden grid-cols-2 gap-4 md:grid">
                        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5">
                          <p className="text-xs font-semibold text-neutral-600 dark:text-white/60">Incluye</p>
                          <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-white/75">
                            {s.bullets.map((b) => (
                              <li key={b} className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5">
                          <p className="text-xs font-semibold text-neutral-600 dark:text-white/60">Ideal para</p>
                          <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-white/75">
                            {s.useCases.map((u) => (
                              <li key={u} className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                <span>{u}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <MobileDetails details={s.details} bullets={s.bullets} useCases={s.useCases} />

                      <ServiceCTA serviceTitle={s.title} label={s.ctaLabel} />
                    </div>
                  </div>
                </motion.article>
              );
            })}
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
            transition={reduceMotion ? { duration: 0.01 } : { duration: 0.35, ease: EASE_OUT }}
            className={cn(
              "rounded-3xl border bg-neutral-900 p-8 text-white md:p-10",
              "border-neutral-200/30 hover:border-emerald-300/40 hover:shadow-md",
              "dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
            )}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">¿Tienes un proyecto en mente?</h2>
                <p className="mt-2 text-sm text-white/80 md:text-base dark:text-white/70">
                  Escríbenos y te ayudamos a definir la mejor solución según tu necesidad.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-white/80 dark:text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Recomendación técnica clara (sin “vender por vender”).
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Cotización con alcance, tiempos y materiales.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Instalación profesional + garantía.
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={waGlobal}
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.99]
                  dark:border-white/15"
                >
                  <ClipboardList className="h-4 w-4" />
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