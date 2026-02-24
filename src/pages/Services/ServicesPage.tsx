import { Seo } from "../../lib/seo";
import { services } from "../../content/services";

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Servicios | Tecnictels"
        description="CCTV, control de acceso, detección de incendios, redes, telecomunicaciones, cableado estructurado, data center e instalaciones eléctricas en Quito."
        path="/servicios"
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-950">Servicios</h1>
        <p className="mt-3 text-neutral-700">
          Soluciones profesionales para proyectos residenciales, comerciales y empresariales.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{s.short}</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-neutral-600">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}