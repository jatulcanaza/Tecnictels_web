import { Seo } from "../../lib/seo";

export function ProjectsPage() {
  return (
    <>
      <Seo
        title="Proyectos | Tecnictels"
        description="Portafolio de proyectos de CCTV, redes, cableado estructurado, incendios y electricidad realizados por Tecnictels."
        path="/proyectos"
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-950">Proyectos</h1>
        <p className="mt-3 text-neutral-700">
          Aquí mostraremos trabajos reales (fotos/antes-después). Cuando tengas 6–12 imágenes, los armamos en galería pro.
        </p>
      </section>
    </>
  );
}