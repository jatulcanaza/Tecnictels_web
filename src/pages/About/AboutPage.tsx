import { motion } from "framer-motion";
import { Seo } from "../../lib/seo";
import { site } from "../../content/site";
import { Link } from "react-router-dom";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function SectionTitle(props: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      {props.eyebrow ? (
        <p className="text-xs font-semibold tracking-wider theme-muted">{props.eyebrow}</p>
      ) : null}

      <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 dark:text-white md:text-3xl">
        {props.title}
      </h2>

      {props.subtitle ? <p className="mt-3 text-sm theme-muted md:text-base">{props.subtitle}</p> : null}
    </div>
  );
}

function AccentBar() {
  return (
    <div className="mt-6 flex items-center gap-2">
      <span className="h-1.5 w-10 rounded-full bg-emerald-500" />
      <span className="h-1.5 w-6 rounded-full bg-orange-500" />
      <span className="h-1.5 w-4 rounded-full bg-neutral-300 dark:bg-white/20" />
    </div>
  );
}

function StatCard(props: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border theme-border theme-surface p-4 shadow-sm">
      <p className="text-xs font-semibold theme-muted">{props.label}</p>
      <p className="mt-1 text-sm font-semibold text-neutral-950 dark:text-white">{props.value}</p>
    </div>
  );
}

function InfoCard(props: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border theme-border theme-surface p-6 shadow-sm transition hover:shadow-md">
      <p className="text-sm font-semibold text-neutral-950 dark:text-white">{props.title}</p>
      <p className="mt-2 text-sm theme-muted">{props.desc}</p>
    </div>
  );
}

/* ============================================================
   TRUST MARQUEE PREMIUM (SOLO LOGOS)
   - Framer Motion
   - Loop infinito hacia la izquierda
   - Pausa real al hover
   - Grayscale -> color al hover
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
    <div className="relative mt-8 overflow-hidden rounded-3xl border theme-border theme-surface">
      {/* Glow sutil premium */}
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
            className="
              group flex h-20 w-44 shrink-0 items-center justify-center
              rounded-2xl border theme-border
              bg-neutral-50/70 shadow-sm backdrop-blur transition
              hover:-translate-y-0.5 hover:shadow-md
              dark:bg-white/5
              sm:w-48
            "
          >
            <img
              src={it.src}
              alt={it.alt}
              className="max-h-10 w-auto object-contain transition md:max-h-11"
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
  return (
    <>
      <Seo
        title="Nosotros | Tecnictels"
        description="Conoce a Tecnictels: soluciones profesionales en seguridad electrónica, redes, telecomunicaciones e instalaciones eléctricas en Quito, Ecuador."
        path="/nosotros"
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b theme-border bg-transparent">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
              <motion.p
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border theme-border theme-surface px-3 py-1 text-xs font-semibold theme-muted"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Empresa de tecnología y telecomunicaciones
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white md:text-5xl"
              >
                Construimos infraestructura <span className="theme-muted">segura y confiable</span> para tu operación.
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 text-base theme-muted md:text-lg">
                En {site.city}, {site.country}. En Tecnictels desarrollamos e implementamos soluciones de{" "}
                <b className="text-neutral-950 dark:text-white">seguridad electrónica</b>,{" "}
                <b className="text-neutral-950 dark:text-white"> redes</b>,{" "}
                <b className="text-neutral-950 dark:text-white"> telecomunicaciones</b> e{" "}
                <b className="text-neutral-950 dark:text-white"> instalaciones eléctricas</b> con enfoque profesional,
                ordenado y escalable.
              </motion.p>

              <motion.div variants={fadeUp}>
                <AccentBar />
              </motion.div>

              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contacto"
                  className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 active:scale-[0.99]
                  dark:bg-emerald-600 dark:hover:opacity-95"
                >
                  Contactar / Cotizar
                </Link>

                <Link
                  to="/servicios"
                  className="rounded-full border theme-border theme-surface px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 active:scale-[0.99]
                  dark:text-white dark:hover:bg-white/10"
                >
                  Ver servicios
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-7 grid grid-cols-3 gap-4">
                <StatCard label="Enfoque" value="Calidad" />
                <StatCard label="Servicio" value="Soporte" />
                <StatCard label="Entrega" value="A tiempo" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border theme-border theme-surface shadow-sm">
                <img
                  src="/images/team.jpg"
                  alt="Equipo Tecnictels en campo"
                  className="h-[320px] w-full object-cover md:h-[420px]"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <StatCard label="Cobertura" value="Quito y Ecuador" />
                <StatCard label="Especialidad" value="Infraestructura & Seguridad" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp}>
              <SectionTitle
                eyebrow="NOSOTROS"
                title="¿Quiénes somos?"
                subtitle="Un equipo orientado a la implementación profesional de soluciones tecnológicas para hogares, comercios y empresas."
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Experiencia aplicada"
                desc="Implementamos proyectos reales: CCTV, control de acceso, cableado estructurado, data center, redes y sistemas eléctricos."
              />
              <InfoCard
                title="Metodología y orden"
                desc="Diseño, instalación, pruebas, documentación y entrega. Todo con enfoque de calidad y mantenibilidad."
              />
              <InfoCard
                title="Soporte y continuidad"
                desc="Acompañamiento post-instalación, ajustes, mantenimiento y evolución del sistema según crece tu operación."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="border-t theme-border bg-neutral-50 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeUp} className="rounded-3xl border theme-border theme-surface p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Misión
              </div>
              <p className="mt-4 text-sm theme-muted md:text-base">
                Brindar soluciones profesionales en seguridad electrónica, redes, telecomunicaciones e instalaciones eléctricas,
                garantizando calidad, orden técnico y acompañamiento al cliente en cada etapa del proyecto.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border theme-border theme-surface p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-700 dark:text-orange-300">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Visión
              </div>
              <p className="mt-4 text-sm theme-muted md:text-base">
                Ser una empresa referente en Ecuador por implementaciones tecnológicas confiables, seguras y escalables,
                reconocida por su atención profesional, innovación y excelencia operativa.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section className="border-t theme-border bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp}>
              <SectionTitle
                eyebrow="CULTURA"
                title="Nuestros valores"
                subtitle="Lo que cuidamos en cada implementación, desde el primer levantamiento hasta la entrega final."
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "Calidad", d: "Materiales y ejecución profesional con pruebas." },
                { t: "Responsabilidad", d: "Cumplimiento, seguridad y orden en obra." },
                { t: "Transparencia", d: "Comunicación clara y documentación." },
                { t: "Soporte", d: "Acompañamiento y mantenimiento cuando lo necesites." },
              ].map((v) => (
                <InfoCard key={v.t} title={v.t} desc={v.d} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COBERTURA + IMPLEMENTACIONES */}
      <section className="border-t theme-border bg-neutral-50 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp} className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionTitle
                eyebrow="COBERTURA"
                title="Implementaciones a nivel nacional"
                subtitle="Atendemos proyectos en Quito y coordinación para trabajos a nivel Ecuador según alcance."
              />
              <motion.div variants={fadeUp} className="flex gap-3">
                <Link
                  to="/proyectos"
                  className="rounded-full border theme-border theme-surface px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 active:scale-[0.99]
                  dark:text-white dark:hover:bg-white/10"
                >
                  Ver portafolio
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { t: "Residencial", d: "CCTV, alarmas, control de acceso, iluminación y UPS." },
                { t: "Comercial", d: "Cableado, redes, racks, control de acceso y seguridad." },
                { t: "Empresarial", d: "Data center, segmentación de red, monitoreo y normativas." },
              ].map((x) => (
                <InfoCard key={x.t} title={x.t} desc={x.d} />
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { src: "/images/work-1.jpg", alt: "Instalación CCTV" },
                { src: "/images/work-2.jpg", alt: "Rack y cableado estructurado" },
                { src: "/images/work-3.jpg", alt: "Instalación eléctrica" },
              ].map((img) => (
                <div key={img.src} className="overflow-hidden rounded-3xl border theme-border theme-surface shadow-sm">
                  <img src={img.src} alt={img.alt} className="h-56 w-full object-cover" loading="lazy" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONFIANZA / MARCAS (SOLO LOGOS PREMIUM) */}
      <section className="border-t theme-border bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionTitle
                eyebrow="CONFIANZA"
                title="Marcas y certificaciones"
                subtitle="Tecnología compatible y experiencia en instalación profesional."
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
      <section className="border-t theme-border bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border theme-border bg-neutral-900 p-8 text-white md:p-10 dark:bg-white/5"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">¿Trabajamos tu proyecto?</h2>
                <p className="mt-2 text-sm text-white/80 md:text-base dark:text-white/70">
                  Cuéntanos tu necesidad y te enviamos una propuesta. Atención en {site.city}, {site.country}.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 active:scale-[0.99]
                  dark:bg-emerald-600 dark:text-white dark:hover:opacity-95"
                >
                  WhatsApp
                </a>

                <Link
                  to="/contacto"
                  className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.99]
                  dark:border-white/15 dark:text-white"
                >
                  Formulario de contacto
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}