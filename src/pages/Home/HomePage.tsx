import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Seo } from "../../lib/seo";
import { services } from "../../content/services";
import { site } from "../../content/site";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function AccentBar() {
  return (
    <div className="mt-6 flex items-center gap-2">
      <span className="h-1.5 w-10 rounded-full bg-emerald-500" />
      <span className="h-1.5 w-6 rounded-full bg-orange-500" />
      <span className="h-1.5 w-4 rounded-full bg-neutral-300 dark:bg-white/20" />
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700
      dark:border-white/10 dark:bg-white/5 dark:text-white/80">
      {children}
    </span>
  );
}

function StatCard(props: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm
      dark:border-white/10 dark:bg-white/5">
      <p className="text-xs font-semibold text-neutral-600 dark:text-white/60">{props.label}</p>
      <p className="mt-1 text-sm font-semibold text-neutral-950 dark:text-white">{props.value}</p>
    </div>
  );
}

export function HomePage() {
  const wa = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <>
      <Seo
        title="Tecnictels | Redes, CCTV, Cableado Estructurado y Electricidad en Quito"
        description="Servicios profesionales de CCTV, control de acceso, detección de incendios, cableado estructurado, redes y telecomunicaciones, e instalaciones eléctricas en Quito, Ecuador."
        path="/"
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* blobs sutiles (verde/naranja) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                <Badge>
                  <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                  Atención en {site.city}, {site.country}
                </Badge>
                <Badge>Seguridad • Redes • Electricidad</Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white md:text-5xl"
              >
                Infraestructura{" "}
                <span className="text-neutral-600 dark:text-white/70">
                  segura, ordenada y escalable
                </span>{" "}
                para tu operación.
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 text-base text-neutral-700 dark:text-white/75 md:text-lg">
                Implementamos soluciones profesionales de <b>CCTV</b>, <b>control de acceso</b>,{" "}
                <b>detección de incendios</b>, <b>cableado estructurado</b>, <b>data center</b>{" "}
                y <b>electricidad</b>. Enfoque técnico, documentación y soporte.
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
                  Solicitar cotización
                </Link>

                <Link
                  to="/servicios"
                  className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 active:scale-[0.99]
                    dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Ver servicios
                </Link>

                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 active:scale-[0.99]
                    dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-7 grid grid-cols-3 gap-4">
                <StatCard label="Enfoque" value="Calidad" />
                <StatCard label="Entrega" value="A tiempo" />
                <StatCard label="Soporte" value="Garantía" />
              </motion.div>
            </motion.div>

            {/* Visual hero (imagen + overlay) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm
                dark:border-white/10 dark:bg-white/5">
                <img
                  src="/images/hero-tech.jpg"
                  alt="Tecnictels - instalación profesional"
                  className="h-[320px] w-full object-cover md:h-[420px]"
                  loading="eager"
                />
              </div>

              {/* overlay “card” flotante */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm
                  dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-semibold text-neutral-600 dark:text-white/60">Cobertura</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-950 dark:text-white">Quito • Ecuador</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm
                  dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-semibold text-neutral-600 dark:text-white/60">Especialidad</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-950 dark:text-white">Infraestructura & Seguridad</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICIOS (cards con imagen) */}
      <section className="border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white md:text-3xl">
                  Servicios
                </h2>
                <p className="mt-2 text-sm text-neutral-700 dark:text-white/75 md:text-base">
                  Soluciones para hogares, comercios y empresas.
                </p>
              </div>

              <Link
                to="/servicios"
                className="text-sm font-semibold text-neutral-900 transition hover:text-neutral-700
                  dark:text-white dark:hover:text-white/80"
              >
                Ver todo →
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicios#${s.slug}`}
                  className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
                    dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative">
                    <img
                      src={s.image ?? "/images/service-default.jpg"}
                      alt={s.title}
                      className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900
                        dark:bg-black/30 dark:text-white">
                        {s.title}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-neutral-700 dark:text-white/75">{s.short}</p>

                    <ul className="mt-4 space-y-1 text-sm text-neutral-600 dark:text-white/70">
                      {s.bullets.slice(0, 2).map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs font-semibold text-neutral-500 dark:text-white/60">
                        Ver detalle
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white transition group-hover:bg-emerald-600">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-neutral-200 bg-transparent dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white md:p-10
              dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  ¿Listo para cotizar tu proyecto?
                </h2>
                <p className="mt-2 text-sm text-white/80 md:text-base dark:text-white/70">
                  Escríbenos por WhatsApp o envía tus requerimientos desde el formulario.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 active:scale-[0.99]
                    dark:bg-emerald-600 dark:text-white dark:hover:opacity-95"
                >
                  WhatsApp
                </a>

                <Link
                  to="/contacto"
                  className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.99]
                    dark:border-white/15"
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