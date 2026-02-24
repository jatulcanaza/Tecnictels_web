import { motion } from "framer-motion";
import { Seo } from "../../lib/seo";
import { services } from "../../content/services";
import { site } from "../../content/site";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <Seo
        title="Tecnictels | Redes, CCTV, Cableado Estructurado y Electricidad en Quito"
        description="Servicios profesionales de CCTV, control de acceso, detección de incendios, cableado estructurado, redes y telecomunicaciones, e instalaciones eléctricas en Quito, Ecuador."
        path="/"
      />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl"
            >
              Redes, seguridad electrónica e instalaciones eléctricas{" "}
              <span className="text-neutral-600">para proyectos reales.</span>
            </motion.h1>

            <p className="mt-4 text-base text-neutral-700 md:text-lg">
              En {site.city}, {site.country}. Implementamos soluciones de{" "}
              <b> CCTV</b>, <b>control de acceso</b>, <b>detección de incendios</b>,{" "}
              <b>cableado estructurado</b>, <b>data center</b> y <b>electricidad</b> con estándares profesionales.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Solicitar cotización
              </Link>
              <Link
                to="/servicios"
                className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                Ver servicios
              </Link>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-neutral-600">
              <span>✓ Atención profesional</span>
              <span>✓ Instalación y soporte</span>
              <span>✓ Enfoque empresarial</span>
            </div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-6 shadow-sm"
          >
            <div className="aspect-[16/10] rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-sm font-semibold text-neutral-900">Tecnictels</p>
              <p className="mt-2 text-sm text-neutral-600">
                Proyectos: CCTV • Redes • Data Center • Incendios • Electricidad
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-neutral-700">
                <div className="rounded-xl border border-neutral-200 p-3">
                  <p className="font-semibold">CCTV</p>
                  <p className="mt-1 text-neutral-600">Monitoreo y control</p>
                </div>
                <div className="rounded-xl border border-neutral-200 p-3">
                  <p className="font-semibold">Cableado</p>
                  <p className="mt-1 text-neutral-600">Infraestructura datos</p>
                </div>
                <div className="rounded-xl border border-neutral-200 p-3">
                  <p className="font-semibold">Incendios</p>
                  <p className="mt-1 text-neutral-600">Detección y alerta</p>
                </div>
                <div className="rounded-xl border border-neutral-200 p-3">
                  <p className="font-semibold">Electricidad</p>
                  <p className="mt-1 text-neutral-600">Iluminación y fuerza</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
                Servicios
              </h2>
              <p className="mt-2 text-sm text-neutral-700">
                Soluciones para hogares, comercios y empresas.
              </p>
            </div>
            <Link
              to="/servicios"
              className="text-sm font-semibold text-neutral-900 hover:text-neutral-700"
            >
              Ver todo →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <motion.div
                key={s.slug}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-neutral-950">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{s.short}</p>
                <ul className="mt-3 list-disc pl-5 text-sm text-neutral-600">
                  {s.bullets.slice(0, 2).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white md:p-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              ¿Listo para cotizar tu proyecto?
            </h2>
            <p className="mt-2 text-sm text-white/80 md:text-base">
              Escríbenos por WhatsApp o envía tus requerimientos desde el formulario.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100"
              >
                WhatsApp
              </a>
              <Link
                to="/contacto"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Formulario de contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}