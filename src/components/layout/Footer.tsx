import { site } from "../../content/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <img
            src="/brand/logo.png"
            alt="Tecnictels"
            className="w-582 max-h-14 object-contain"
            loading="lazy"
          />

          <p className="mt-4 text-sm text-neutral-600">
            Sistemas eléctricos, electrónicos, redes y telecomunicaciones en {site.city}, {site.country}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contacto</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>Correo: {site.email}</li>
            <li>WhatsApp: {site.phoneLocal}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Redes</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="text-neutral-700 hover:text-neutral-950" href={site.social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a className="text-neutral-700 hover:text-neutral-950" href={site.social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-4">
        <p className="mx-auto max-w-6xl px-4 text-xs text-neutral-500">
          © {new Date().getFullYear()} Tecnictels. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}