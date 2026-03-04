// src/pages/About/AboutPage.tsx
import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ClipboardList,
  Cpu,
  Eye,
  Globe2,
  HeartHandshake,
  Network,
  PhoneCall,
  ShieldCheck,
  Target,
} from "lucide-react";

import { Seo } from "../../lib/seo";
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

function SectionTitle(props: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {props.eyebrow ? (
        <p className="text-xs font-semibold tracking-wider text-neutral-500 dark:text-white/60">
          {props.eyebrow}
        </p>
      ) : null}

      <div className="mt-2 flex items-start gap-3">
        {props.icon ? (
          <span
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-white text-neutral-900 shadow-sm",
              "border-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
            )}
            aria-hidden="true"
          >
            {props.icon}
          </span>
        ) : null}

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white md:text-3xl">
            {props.title}
          </h2>

          {props.subtitle ? (
            <p className="mt-3 text-sm text-neutral-700 dark:text-white/75 md:text-base">
              {props.subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function InfoBlock(props: { title: string; desc: string; icon?: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
      className={cn(
        "rounded-3xl border bg-white p-6 shadow-sm transition",
        "border-neutral-200 hover:border-emerald-300 hover:shadow-md",
        "dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
      )}
    >
      <div className="flex items-start gap-3">
        {props.icon ? (
          <span
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-2xl border bg-neutral-50 text-neutral-900 shadow-sm",
              "border-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
            )}
            aria-hidden="true"
          >
            {props.icon}
          </span>
        ) : null}

        <div>
          <p className="text-sm font-semibold text-neutral-950 dark:text-white">{props.title}</p>
          <p className="mt-2 text-sm text-neutral-700 dark:text-white/75">{props.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ImgCard(props: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5",
        props.className
      )}
    >
      <img
        src={props.src}
        alt={props.alt}
        className="h-full w-full object-cover"
        loading="lazy"
        draggable={false}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

function MicroFeature(props: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-2xl border bg-white shadow-sm",
          "border-neutral-200 text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
        )}
        aria-hidden="true"
      >
        {props.icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-neutral-950 dark:text-white">{props.title}</p>
        <p className="mt-1 text-sm text-neutral-700 dark:text-white/75">{props.desc}</p>
      </div>
    </div>
  );
}

/* ============================================================
   TRUST MARQUEE PREMIUM (CONTINUO - SIN PAUSA)
============================================================ */
type BrandLogo = { src: string; alt: string };

function TrustMarqueePremium({
  items,
  speedSeconds = 28,
}: {
  items: BrandLogo[];
  speedSeconds?: number;
}) {
  const track = [...items, ...items];

  return (
    <div className="relative mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
      {/* Glow sutil */}
      <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

      {/* Fade laterales */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-[#0b0f14]" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-[#0b0f14]" />

      <motion.div
        className="flex items-center gap-6 px-6 py-7 md:gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speedSeconds, ease: "linear", repeat: Infinity }}
      >
        {track.map((it, idx) => (
          <div
            key={`${it.alt}-${idx}`}
            className={cn(
              "group flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-neutral-200",
              "bg-neutral-50/70 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md",
              "dark:border-white/10 dark:bg-white/5 sm:w-48"
            )}
          >
            <img
              src={it.src}
              alt={it.alt}
              className={cn(
                "max-h-10 w-auto object-contain transition md:max-h-11",
                "opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0"
              )}
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function AboutPage() {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(!!reduceMotion);

  const waGlobal = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <>
      <Seo
        title="Nosotros | Tecnictels"
        description="Conoce a Tecnictels: soluciones profesionales en seguridad electrónica, redes, telecomunicaciones e instalaciones eléctricas en Quito, Ecuador."
        path="/nosotros"
      />

      {/* HERO */}
      <section className="relative w-full overflow-hidden border-b border-neutral-200 bg-neutral-950 dark:border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-44 left-1/3 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="absolute inset-0">
          <img
            src="/images/team.jpg"
            alt="Equipo Tecnictels"
            className="h-full w-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Empresa de tecnología e infraestructura
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Infraestructura <span className="text-white/75">segura</span>, ordenada y escalable.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-base text-white/80 md:text-lg">
              En {site.city}, {site.country}. Implementamos seguridad electrónica, redes, telecom y electricidad con un
              enfoque profesional: diagnóstico, instalación, pruebas y soporte.
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

            {/* micro highlights (no saturado) */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-white/85 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="h-4 w-4 text-emerald-300" />
                  Enfoque
                </div>
                <p className="mt-1 text-sm text-white/70">Seguridad + continuidad operativa</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-white/85 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <BadgeCheck className="h-4 w-4 text-orange-300" />
                  Entrega
                </div>
                <p className="mt-1 text-sm text-white/70">Orden técnico + documentación</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-white/85 backdrop-blur sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <HeartHandshake className="h-4 w-4 text-emerald-300" />
                  Soporte
                </div>
                <p className="mt-1 text-sm text-white/70">Acompañamiento post-instalación</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes-somos" className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp} className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionTitle
                  eyebrow="NOSOTROS"
                  title="¿Quiénes somos?"
                  subtitle="Un equipo orientado a implementaciones limpias, documentación y soporte. Sin improvisación."
                  icon={
                    <motion.span
                      aria-hidden="true"
                      animate={reduceMotion ? {} : { rotate: [0, -4, 0] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: EASE_OUT }}
                      className="inline-flex"
                    >
                      <Briefcase className="h-5 w-5" />
                    </motion.span>
                  }
                />

                <p className="mt-4 text-sm text-neutral-700 dark:text-white/75 md:text-base">
                  En Tecnictels trabajamos con método: levantamiento, diseño, instalación, pruebas y entrega. Eso hace que
                  tu sistema sea más estable, más fácil de mantener y listo para crecer.
                </p>

                <motion.ul
                  variants={stagger}
                  className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-white/75"
                >
                  {[
                    "Instalación ordenada y estética (canalización y terminaciones).",
                    "Protección eléctrica y buenas prácticas.",
                    "Documentación clara para mantenimiento.",
                  ].map((x) => (
                    <motion.li key={x} variants={fadeUp} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{x}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/servicios"
                    className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 active:scale-[0.99]
                    dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    Ver servicios
                  </Link>

                  <Link
                    to="/proyectos"
                    className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 active:scale-[0.99]
                    dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    Ver proyectos
                  </Link>
                </div>
              </div>

              <div className="grid gap-4">
                <ImgCard src="/images/team.jpg" alt="Equipo Tecnictels" className="h-[320px] md:h-[420px]" />

                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section id="mision-vision" className="border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp}>
              <SectionTitle
                eyebrow="PROPÓSITO"
                title="Misión y visión"
                subtitle="Qué prometemos como servicio y hacia dónde vamos como empresa."
                icon={
                  <motion.span
                    aria-hidden="true"
                    animate={reduceMotion ? {} : { y: [0, -2, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: EASE_OUT }}
                    className="inline-flex"
                  >
                    <Target className="h-5 w-5" />
                  </motion.span>
                }
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2">
              <InfoBlock
                icon={<Award className="h-5 w-5" />}
                title="Misión"
                desc="Brindar soluciones profesionales en seguridad electrónica, redes, telecomunicaciones e instalaciones eléctricas, garantizando calidad, orden técnico y acompañamiento al cliente en cada etapa del proyecto."
              />
              <InfoBlock
                icon={<Globe2 className="h-5 w-5" />}
                title="Visión"
                desc="Ser una empresa referente en Ecuador por implementaciones tecnológicas confiables, seguras y escalables, reconocida por su atención profesional, innovación y excelencia operativa."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section id="valores" className="border-t border-neutral-200 bg-transparent dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp}>
              <SectionTitle
                eyebrow="CULTURA"
                title="Nuestros valores"
                subtitle="Lo que cuidamos en cada implementación, desde el levantamiento hasta la entrega."
                icon={
                  <motion.span
                    aria-hidden="true"
                    animate={reduceMotion ? {} : { rotate: [0, 6, 0] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: EASE_OUT }}
                    className="inline-flex"
                  >
                    <HeartHandshake className="h-5 w-5" />
                  </motion.span>
                }
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <InfoBlock
                icon={<BadgeCheck className="h-5 w-5" />}
                title="Calidad"
                desc="Materiales y ejecución profesional con pruebas."
              />
              <InfoBlock
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Responsabilidad"
                desc="Cumplimiento, seguridad y orden en obra."
              />
              <InfoBlock
                icon={<ClipboardList className="h-5 w-5" />}
                title="Transparencia"
                desc="Comunicación clara y documentación."
              />
              <InfoBlock
                icon={<HeartHandshake className="h-5 w-5" />}
                title="Soporte"
                desc="Acompañamiento y mantenimiento cuando lo necesites."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COBERTURA + FOTOS */}
      <section id="cobertura" className="border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp} className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionTitle
                eyebrow="COBERTURA"
                title="Implementaciones a nivel nacional"
                subtitle="Atendemos proyectos en Quito y coordinación para trabajos a nivel Ecuador según alcance."
                icon={
                  <motion.span
                    aria-hidden="true"
                    animate={reduceMotion ? {} : { scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: EASE_OUT }}
                    className="inline-flex"
                  >
                    <Globe2 className="h-5 w-5" />
                  </motion.span>
                }
              />

              <Link
                to="/proyectos"
                className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 active:scale-[0.99]
                dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Ver portafolio
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-3">
              <InfoBlock icon={<HomeIcon />} title="Residencial" desc="CCTV, alarmas, control de acceso, iluminación y UPS." />
              <InfoBlock icon={<StoreIcon />} title="Comercial" desc="Cableado, redes, racks, control de acceso y seguridad." />
              <InfoBlock icon={<BuildingIcon />} title="Empresarial" desc="Data rooms, segmentación, monitoreo y normativas." />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-3">
              <ImgCard src="/images/work-1.jpg" alt="Instalación CCTV" className="h-56" />
              <ImgCard src="/images/work-2.jpg" alt="Rack y cableado estructurado" className="h-56" />
              <ImgCard src="/images/work-3.jpg" alt="Instalación eléctrica" className="h-56" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARCAS (CONTINUO - SIN PAUSA) */}
      <section id="marcas" className="border-t border-neutral-200 bg-transparent dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp}>
              <SectionTitle
                eyebrow="CONFIANZA"
                title="Marcas y certificaciones"
                subtitle="Tecnología compatible y experiencia en instalación profesional."
                icon={<ShieldCheck className="h-5 w-5" />}
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <TrustMarqueePremium
                speedSeconds={28}
                items={[
                  { src: "/brand/hikvision.svg", alt: "Hikvision" },
                  { src: "/brand/dahua.png", alt: "Dahua" },
                  { src: "/brand/schneider.png", alt: "Schneider Electric" },
                  { src: "/brand/tplink.png", alt: "TP-Link" },
                  { src: "/brand/zkteco.png", alt: "ZKTeco" },
                  { src: "/brand/panduit.png", alt: "Panduit" },
                  { src: "/brand/siemon.png", alt: "Siemon" },
                ]}
              />
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
            transition={reduceMotion ? { duration: 0.01 } : { duration: 0.35, ease: EASE_OUT }}
            className="rounded-3xl border border-neutral-200/30 bg-neutral-900 p-8 text-white md:p-10 dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">


                <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">¿Trabajamos tu proyecto?</h2>

                <p className="mt-2 text-sm text-white/80 md:text-base dark:text-white/70">
                  Cuéntanos tu necesidad y te enviamos una propuesta. Atención en {site.city}, {site.country}.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-white/80 dark:text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Recomendación técnica clara.
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
                  <ArrowRight className="h-4 w-4" />
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

/* -------------------------
   Tiny icons (coverage) - coherentes y limpios
-------------------------- */
function HomeIcon() {
  return <Eye className="h-5 w-5" />;
}
function StoreIcon() {
  return <Network className="h-5 w-5" />;
}
function BuildingIcon() {
  return <Cpu className="h-5 w-5" />;
}