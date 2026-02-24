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

function ServiceCTA(props: { serviceTitle: string; label?: string }) {
  const text = `Hola Tecnictels, necesito una cotización para: ${props.serviceTitle}. ¿Me pueden ayudar?`;
  const href = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(text)}`;

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
      >
        {props.label ?? "Quiero que me contacten"}
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

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Servicios | Tecnictels"
        description="CCTV, control de acceso, detección de incendios, redes, telecomunicaciones, cableado estructurado, data center e instalaciones eléctricas en Quito, Ecuador."
        path="/servicios"
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-transparent dark:border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700
              dark:border-white/10 dark:bg-white/5 dark:text-white/80"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Servicios profesionales en {site.city}, {site.country}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 dark:text-white md:text-5xl"
            >
              Soluciones en{" "}
              <span className="text-neutral-600 dark:text-white/70">
                seguridad, redes y energía
              </span>{" "}
              para hogares y empresas.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base text-neutral-700 dark:text-white/75 md:text-lg"
            >
              Implementamos infraestructura confiable: CCTV, alarmas, control de acceso,
              detección de incendios, cableado estructurado / data center, redes y
              telecomunicaciones, e instalaciones eléctricas con UPS y sistemas de tierra.
            </motion.p>

            <motion.div variants={fadeUp}>
              <AccentBar />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 active:scale-[0.99]
                dark:bg-emerald-600 dark:hover:opacity-95"
              >
                Cotizar por WhatsApp
              </a>

              <Link
                to="/contacto"
                className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 active:scale-[0.99]
                dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Enviar requerimiento
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GRID RESUMEN */}
      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white md:text-3xl">
              Todos nuestros servicios
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-3 text-sm text-neutral-700 dark:text-white/75 md:text-base">
              Selecciona un servicio para ver más detalle. Cada módulo incluye un botón de contacto inmediato.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
                  dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-neutral-950 dark:text-white">{s.title}</p>
                      <p className="mt-2 text-sm text-neutral-700 dark:text-white/75">{s.short}</p>
                    </div>

                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white transition group-hover:bg-emerald-600">
                      →
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.bullets.slice(0, 3).map((b) => (
                      <span
                        key={b}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700
                        dark:bg-white/10 dark:text-white/80"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECCIONES DETALLADAS (ZIG-ZAG) */}
      <section className="border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="space-y-12">
            {services.map((s, idx) => {
              const reverse = idx % 2 === 1;

              return (
                <motion.div
                  key={s.slug}
                  id={s.slug}
                  variants={fadeUp}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8
                  dark:border-white/10 dark:bg-white/5"
                >
                  <div className={`grid gap-8 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                    {/* Imagen */}
                    <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-white/5">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-64 w-full object-cover md:h-[360px]"
                        loading="lazy"
                      />
                    </div>

                    {/* Contenido */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                        <p className="text-xs font-semibold tracking-wider text-neutral-600 dark:text-white/60">
                          SERVICIO
                        </p>
                      </div>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
                        {s.title}
                      </h3>

                      <p className="mt-3 text-sm text-neutral-700 dark:text-white/75 md:text-base">
                        {s.details}
                      </p>

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5">
                          <p className="text-xs font-semibold text-neutral-600 dark:text-white/60">Incluye</p>
                          <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 dark:text-white/75">
                            {s.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5">
                          <p className="text-xs font-semibold text-neutral-600 dark:text-white/60">Ideal para</p>
                          <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 dark:text-white/75">
                            {s.useCases.map((u) => (
                              <li key={u}>{u}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <ServiceCTA serviceTitle={s.title} label={s.ctaLabel} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
                  ¿Tienes un proyecto en mente?
                </h2>
                <p className="mt-2 text-sm text-white/80 md:text-base dark:text-white/70">
                  Escríbenos y te ayudamos a definir la mejor solución según tu necesidad.
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