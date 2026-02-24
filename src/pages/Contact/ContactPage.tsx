import { motion } from "framer-motion";
import { Seo } from "../../lib/seo";
import { site } from "../../content/site";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// --- Iconos SVG inline (sin librerías) ---
function IconMail(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" className="stroke-current" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4.5 7.5 12 13l7.5-5.5" className="stroke-current" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" aria-hidden="true">
      <path
        d="M8.5 3.5h7A2.5 2.5 0 0 1 18 6v12a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 18V6A2.5 2.5 0 0 1 8.5 3.5Z"
        className="stroke-current"
        strokeWidth="1.8"
      />
      <path d="M10 17h4" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconWhatsApp(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" aria-hidden="true">
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9.2c.1 1.7 2 3.9 3.8 4.7.7.3 1.2.2 1.7-.2l.8-.6c.3-.2.7-.2 1 0l1.1.8c.4.3.5.9.2 1.3-.5.8-1.5 1.5-2.6 1.5-2.8 0-7-3.5-7.7-6.6-.2-1 .3-2 .9-2.7.3-.4.9-.5 1.3-.2l1 .8c.3.2.4.6.3 1l-.2.8c-.1.4-.1.8.1 1.2Z"
        className="stroke-current"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLocation(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" className="stroke-current" strokeWidth="1.8" />
    </svg>
  );
}

function AccentBar() {
  return (
    <div className="mt-6 flex items-center gap-2">
      <span className="h-1.5 w-10 rounded-full bg-emerald-500" />
      <span className="h-1.5 w-6 rounded-full bg-orange-500" />
      <span className="h-1.5 w-4 rounded-full bg-neutral-300" />
    </div>
  );
}

export function ContactPage() {
  const waDefault = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;
  const telHref = `tel:+${site.phoneE164}`;
  const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address)}`;

  // Embed oficial (tu URL)
  const mapsEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.796050152682!2d-78.51208368923423!3d-0.19143583540912432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59bf654824425%3A0x70d67eb5e12b9251!2sTecnictels!5e0!3m2!1ses-419!2sec!4v1771916397273!5m2!1ses-419!2sec";

  return (
    <>
      <Seo
        title="Contacto | Tecnictels"
        description="Contáctanos por WhatsApp o envía tu requerimiento para cotización. Tecnictels en Quito, Ecuador."
        path="/contacto"
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Atención en {site.city}, {site.country}
            </motion.p>

            <motion.h1 variants={fadeUp} className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
              Contáctanos y <span className="text-neutral-600">cotiza tu proyecto</span>.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-base text-neutral-700 md:text-lg">
              Te respondemos por WhatsApp o correo. Envíanos tu requerimiento y te ayudamos con la mejor solución.
            </motion.p>

            <motion.div variants={fadeUp}>
              <AccentBar />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <a
                href={waDefault}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
              >
                WhatsApp inmediato
              </a>

              <a
                href="#form"
                className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                Ir al formulario
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Columna izquierda */}
            <motion.div
              className="space-y-4 lg:col-span-2"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* WhatsApp */}
              <motion.div variants={fadeUp} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-700">
                    <IconWhatsApp className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-950">WhatsApp</p>
                    <p className="mt-1 text-sm text-neutral-700">Respuesta rápida para cotizaciones y coordinación.</p>
                    <p className="mt-3 text-sm font-semibold text-neutral-900">{site.phoneLocal}</p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={waDefault}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                      >
                        Abrir WhatsApp
                      </a>
                      <a
                        href="#form"
                        className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                      >
                        Enviar formulario
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Correo */}
              <motion.div variants={fadeUp} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-orange-500/10 p-3 text-orange-700">
                    <IconMail className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-950">Correo</p>
                    <p className="mt-1 text-sm text-neutral-700">Ideal para requerimientos detallados.</p>
                    <p className="mt-3 text-sm font-semibold text-neutral-900">{site.email}</p>
                  </div>
                </div>
              </motion.div>

              {/* Dirección + Mapa */}
              <motion.div variants={fadeUp} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-neutral-900/10 p-3 text-neutral-900">
                    <IconLocation className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-950">Dirección</p>
                    <p className="mt-1 text-sm text-neutral-700">{site.address}</p>
                    <p className="mt-2 text-xs font-semibold text-neutral-600">{site.hoursLabel}</p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={mapsDirections}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                      >
                        Cómo llegar
                      </a>
                      <a
                        href={telHref}
                        className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                      >
                        Llamar
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mapa responsive */}
                <div className="mt-5 overflow-hidden rounded-3xl border border-neutral-200">
                  <iframe
                    title="Mapa Tecnictels"
                    src={mapsEmbedSrc}
                    className="h-72 w-full md:h-80"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Nota pro */}
              <motion.div variants={fadeUp} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-neutral-900/10 p-3 text-neutral-900">
                    <IconPhone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-950">¿Qué información enviar?</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>Servicio requerido (CCTV, redes, cableado, etc.)</li>
                      <li>Ubicación / ciudad</li>
                      <li>Detalle del alcance (puntos, áreas, necesidades)</li>
                      <li>Tiempo estimado o urgencia</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Columna derecha: formulario */}
            <motion.div
              id="form"
              className="lg:col-span-3"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.div variants={fadeUp} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-neutral-600">FORMULARIO</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
                      Solicitar cotización
                    </h2>
                    <p className="mt-3 text-sm text-neutral-700 md:text-base">
                      Completa los datos y te contactamos lo antes posible.
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                      <span className="text-xs font-semibold text-neutral-600">Tecnictels</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
                  Consejo: mientras más detalle envíes, más precisa será la cotización.
                </div>

                <form className="mt-6 space-y-4" action="https://formsubmit.co/tecnictels@gmail.com" method="POST">
                  <input type="hidden" name="_subject" value="Nuevo contacto desde Tecnictels Web" />
                  <input type="hidden" name="_captcha" value="true" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-neutral-700">Nombre</label>
                      <input
                        name="nombre"
                        required
                        placeholder="Ej. Juan Pérez"
                        className="mt-2 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-neutral-700">Teléfono / WhatsApp</label>
                      <input
                        name="telefono"
                        required
                        placeholder="Ej. 09xxxxxxxx"
                        className="mt-2 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-neutral-700">Correo</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="Ej. cliente@correo.com"
                        className="mt-2 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-neutral-700">Servicio</label>
                      <select
                        name="servicio"
                        required
                        defaultValue=""
                        className="mt-2 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                      >
                        <option value="" disabled>Selecciona un servicio</option>
                        <option>CCTV</option>
                        <option>Control de acceso</option>
                        <option>Detección de incendios</option>
                        <option>Alarmas</option>
                        <option>Seguridad electrónica</option>
                        <option>Redes y telecomunicaciones</option>
                        <option>Cableado estructurado / Data Center</option>
                        <option>Instalaciones eléctricas</option>
                        <option>UPS / Sistemas de tierra</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-neutral-700">Mensaje</label>
                      <textarea
                        name="mensaje"
                        required
                        placeholder="Describe tu requerimiento: área, cantidad de puntos, tipo de instalación, plazos, etc."
                        rows={6}
                        className="mt-2 w-full resize-none rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 active:scale-[0.99]"
                    >
                      Enviar solicitud
                    </button>

                    <p className="text-xs text-neutral-500">
                      Al enviar, aceptas ser contactado por Tecnictels para dar seguimiento a tu solicitud.
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
                    <p className="text-sm font-semibold text-neutral-950">¿Prefieres WhatsApp?</p>
                    <p className="mt-1 text-sm text-neutral-700">
                      Podemos responder más rápido por WhatsApp. Puedes abrir el chat en un clic.
                    </p>
                    <a
                      href={waDefault}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                    >
                      Abrir WhatsApp
                    </a>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}