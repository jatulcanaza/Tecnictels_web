import { motion } from "framer-motion";
import { Seo } from "../../lib/seo";
import { site } from "../../content/site";
import { Link } from "react-router-dom";

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
        <p className="text-xs font-semibold tracking-wider text-neutral-600">
          {props.eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
        {props.title}
      </h2>
      {props.subtitle ? (
        <p className="mt-3 text-sm text-neutral-700 md:text-base">{props.subtitle}</p>
      ) : null}
    </div>
  );
}

function AccentBar() {
  // Acentos inspirados en el logo: verde + naranja
  return (
    <div className="mt-6 flex items-center gap-2">
      <span className="h-1.5 w-10 rounded-full bg-emerald-500" />
      <span className="h-1.5 w-6 rounded-full bg-orange-500" />
      <span className="h-1.5 w-4 rounded-full bg-neutral-300" />
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
      <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
        {/* Fondo sutil (tech) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="max-w-xl"
            >
              <motion.p
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Empresa de tecnología y telecomunicaciones
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl"
              >
                Construimos infraestructura{" "}
                <span className="text-neutral-600">segura y confiable</span>{" "}
                para tu operación.
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 text-base text-neutral-700 md:text-lg">
                En {site.city}, {site.country}. En Tecnictels desarrollamos e implementamos soluciones de{" "}
                <b>seguridad electrónica</b>, <b>redes</b>, <b>telecomunicaciones</b> e{" "}
                <b>instalaciones eléctricas</b> con enfoque profesional, ordenado y escalable.
              </motion.p>

              <motion.div variants={fadeUp}>
                <AccentBar />
              </motion.div>

              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contacto"
                  className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  Contactar / Cotizar
                </Link>
                <Link
                  to="/servicios"
                  className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                >
                  Ver servicios
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-7 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <p className="text-xs font-semibold text-neutral-600">Enfoque</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-950">Calidad</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <p className="text-xs font-semibold text-neutral-600">Servicio</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-950">Soporte</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <p className="text-xs font-semibold text-neutral-600">Entrega</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-950">A tiempo</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <img
                  src="/images/team.jpg"
                  alt="Equipo Tecnictels en campo"
                  className="h-[320px] w-full object-cover md:h-[420px]"
                  loading="lazy"
                />
              </div>

              {/* Badges */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <p className="text-xs font-semibold text-neutral-600">Cobertura</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-950">
                    Quito y Ecuador
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <p className="text-xs font-semibold text-neutral-600">Especialidad</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-950">
                    Infraestructura & Seguridad
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <SectionTitle
                eyebrow="NOSOTROS"
                title="¿Quiénes somos?"
                subtitle="Un equipo orientado a la implementación profesional de soluciones tecnológicas para hogares, comercios y empresas."
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-neutral-950">Experiencia aplicada</p>
                <p className="mt-2 text-sm text-neutral-700">
                  Implementamos proyectos reales: CCTV, control de acceso, cableado estructurado, data center, redes y sistemas eléctricos.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-neutral-950">Metodología y orden</p>
                <p className="mt-2 text-sm text-neutral-700">
                  Diseño, instalación, pruebas, documentación y entrega. Todo con enfoque de calidad y mantenibilidad.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-neutral-950">Soporte y continuidad</p>
                <p className="mt-2 text-sm text-neutral-700">
                  Acompañamiento post-instalación, ajustes, mantenimiento y evolución del sistema según crece tu operación.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={fadeUp} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Misión
              </div>
              <p className="mt-4 text-sm text-neutral-800 md:text-base">
                Brindar soluciones profesionales en seguridad electrónica, redes, telecomunicaciones e instalaciones eléctricas,
                garantizando calidad, orden técnico y acompañamiento al cliente en cada etapa del proyecto.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Visión
              </div>
              <p className="mt-4 text-sm text-neutral-800 md:text-base">
                Ser una empresa referente en Ecuador por implementaciones tecnológicas confiables, seguras y escalables,
                reconocida por su atención profesional, innovación y excelencia operativa.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
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
                <div key={v.t} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-neutral-950">{v.t}</p>
                  <p className="mt-2 text-sm text-neutral-700">{v.d}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COBERTURA + IMPLEMENTACIONES */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionTitle
                eyebrow="COBERTURA"
                title="Implementaciones a nivel nacional"
                subtitle="Atendemos proyectos en Quito y coordinación para trabajos a nivel Ecuador según alcance."
              />
              <motion.div variants={fadeUp} className="flex gap-3">
                <Link
                  to="/proyectos"
                  className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100"
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
                <div key={x.t} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-neutral-950">{x.t}</p>
                  <p className="mt-2 text-sm text-neutral-700">{x.d}</p>
                </div>
              ))}
            </motion.div>

            {/* Mini galería */}
            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { src: "/images/work-1.jpg", alt: "Instalación CCTV" },
                { src: "/images/work-2.jpg", alt: "Rack y cableado estructurado" },
                { src: "/images/work-3.jpg", alt: "Instalación eléctrica" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICACIONES (placeholder pro) */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <SectionTitle
                eyebrow="CONFIANZA"
                title="Certificaciones y estándares"
                subtitle="Si cuentan con certificaciones (marcas, normativas o licencias), aquí las mostramos. Por ahora dejamos el bloque listo."
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-4">
              {["CCTV / Seguridad", "Redes & Telecom", "Cableado & Data Center", "Electricidad & UPS"].map(
                (c) => (
                  <div
                    key={c}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center"
                  >
                    <p className="text-sm font-semibold text-neutral-900">{c}</p>
                    <p className="mt-2 text-xs text-neutral-600">
                      (Agregar certificaciones / marcas)
                    </p>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  ¿Trabajamos tu proyecto?
                </h2>
                <p className="mt-2 text-sm text-white/80 md:text-base">
                  Cuéntanos tu necesidad y te enviamos una propuesta. Atención en {site.city}, {site.country}.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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
                  className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
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