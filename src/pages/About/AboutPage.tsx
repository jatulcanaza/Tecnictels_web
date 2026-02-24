import { Seo } from "../../lib/seo";
import { site } from "../../content/site";

export function AboutPage() {
  return (
    <>
      <Seo
        title="Nosotros | Tecnictels"
        description="Conoce a Tecnictels: soluciones profesionales en seguridad electrónica, redes, telecomunicaciones e instalaciones eléctricas en Quito."
        path="/nosotros"
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-950">Nosotros</h1>
        <p className="mt-3 text-neutral-700">
          En {site.city}, {site.country}. Empresa orientada a proyectos de tecnología, conectividad y seguridad con enfoque profesional.
        </p>
      </section>
    </>
  );
}