import { Seo } from "../../lib/seo";
import { site } from "../../content/site";

export function ContactPage() {
  const wa = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <>
      <Seo
        title="Contacto | Tecnictels"
        description="Contáctanos por WhatsApp o envía tu requerimiento para cotización. Tecnictels en Quito, Ecuador."
        path="/contacto"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-950">Contacto</h1>
        <p className="mt-3 text-neutral-700">
          Respuesta por correo y WhatsApp. Cuéntanos tu necesidad y te contactamos.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-950">Escríbenos</h2>
            <div className="mt-4 space-y-2 text-sm text-neutral-700">
              <p>Correo: {site.email}</p>
              <p>WhatsApp: {site.phoneLocal}</p>
              <a className="inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                 href={wa} target="_blank" rel="noreferrer">
                Abrir WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-950">Formulario de cotización</h2>

            <form
              className="mt-4 space-y-3"
              action="https://formsubmit.co/tecnictels@gmail.com"
              method="POST"
            >
              {/* Opcionales útiles */}
              <input type="hidden" name="_subject" value="Nuevo contacto desde Tecnictels Web" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />

              <input
                name="nombre"
                required
                placeholder="Nombre"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
              />
              <input
                name="telefono"
                required
                placeholder="Teléfono / WhatsApp"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Correo"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
              />
              <select
                name="servicio"
                required
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
                defaultValue=""
              >
                <option value="" disabled>Selecciona un servicio</option>
                <option>CCTV</option>
                <option>Control de acceso</option>
                <option>Detección de incendios</option>
                <option>Alarmas</option>
                <option>Redes y telecomunicaciones</option>
                <option>Cableado estructurado / Data Center</option>
                <option>Instalaciones eléctricas</option>
                <option>UPS / Sistemas de tierra</option>
              </select>
              <textarea
                name="mensaje"
                required
                placeholder="Cuéntanos tu requerimiento"
                rows={5}
                className="w-full resize-none rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Enviar
              </button>

              <p className="text-xs text-neutral-500">
                Al enviar, aceptas ser contactado por Tecnictels para dar seguimiento a tu solicitud.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}