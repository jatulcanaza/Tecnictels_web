import { NavLink } from "react-router-dom";
import { site } from "../../content/site";

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border theme-border theme-surface
      text-neutral-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-200
      hover:bg-emerald-50 hover:text-emerald-700 active:translate-y-0
      dark:text-white dark:hover:bg-white/10"
    >
      {children}
    </span>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M14 9h2V6h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.3l.7-3H13v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" className="stroke-current" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" className="stroke-current" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
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

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" className="stroke-current" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" className="stroke-current" strokeWidth="1.8" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2" className="stroke-current" strokeWidth="1.8" />
      <path d="M10 17h4" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        className="stroke-current"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className="group relative inline-flex text-sm theme-muted transition-colors duration-200 hover:text-neutral-950 dark:hover:text-white"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-emerald-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
    </NavLink>
  );
}

function FooterA({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group relative inline-flex text-sm theme-muted transition-colors duration-200 hover:text-neutral-950 dark:hover:text-white"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-emerald-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

export function Footer() {
  const wa = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;
  const tel = `tel:+${site.phoneE164}`;
  const mail = `mailto:${site.email}`;
  const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address)}`;

  return (
    <footer className="border-t theme-border theme-surface">
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500/70 via-emerald-500/20 to-orange-500/70" />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            {/* Modo claro */}
            <img
              src="/brand/logo-footer-light.png"
              alt="Tecnictels"
              className="block dark:hidden w-56 max-h-30 object-contain"
              loading="lazy"
            />

            {/* Modo oscuro (más contraste) */}
            <img
              src="/brand/logo-footer-dark.png"
              alt="Tecnictels"
              className="hidden dark:block w-56 max-h-30 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
              loading="lazy"
            />

            <p className="mt-4 text-sm theme-muted">
              Soluciones profesionales en seguridad electrónica, redes, telecomunicaciones e instalaciones eléctricas en{" "}
              {site.city}, {site.country}.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <IconWrap>
                  <IconFacebook />
                </IconWrap>
              </a>
              <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <IconWrap>
                  <IconInstagram />
                </IconWrap>
              </a>
              <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <IconWrap>
                  <IconWhatsApp />
                </IconWrap>
              </a>
              <a href={mail} aria-label="Correo">
                <IconWrap>
                  <IconMail />
                </IconWrap>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">Páginas</p>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink to="/">Inicio</FooterLink>
              </li>
              <li>
                <FooterLink to="/servicios">Servicios</FooterLink>
              </li>
              <li>
                <FooterLink to="/proyectos">Proyectos</FooterLink>
              </li>
              <li>
                <FooterLink to="/nosotros">Nosotros</FooterLink>
              </li>
              <li>
                <FooterLink to="/contacto">Contacto</FooterLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">Servicios</p>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink to="/servicios#cctv">CCTV</FooterLink>
              </li>
              <li>
                <FooterLink to="/servicios#seguridad-electronica">Seguridad electrónica</FooterLink>
              </li>
              <li>
                <FooterLink to="/servicios#control-acceso">Control de acceso</FooterLink>
              </li>
              <li>
                <FooterLink to="/servicios#deteccion-incendios">Detección de incendios</FooterLink>
              </li>
              <li>
                <FooterLink to="/servicios#redes-telecom">Redes y telecom</FooterLink>
              </li>
              <li>
                <FooterLink to="/servicios#cableado-estructurado">Cableado estructurado</FooterLink>
              </li>
              <li>
                <FooterLink to="/servicios#instalaciones-electricas">Instalaciones eléctricas</FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">Contacto</p>

            <ul className="mt-4 space-y-4 text-sm theme-muted">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-neutral-700 dark:text-white/80">
                  <IconLocation />
                </span>
                <FooterA href={mapsDirections} external>
                  {site.address}
                </FooterA>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-neutral-700 dark:text-white/80">
                  <IconPhone />
                </span>
                <FooterA href={tel}>
                  {site.phoneLocal}
                </FooterA>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-neutral-700 dark:text-white/80">
                  <IconMail />
                </span>
                <FooterA href={mail}>
                  {site.email}
                </FooterA>
              </li>
            </ul>

            <p className="mt-6 text-xs font-semibold text-neutral-500 dark:text-white/60">{site.hoursLabel}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t theme-border pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-xs text-neutral-500 dark:text-white/60">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-neutral-500 dark:text-white/60">
            {site.city}, {site.country} · Seguridad · Redes · Telecom · Electricidad
          </p>
        </div>
      </div>
    </footer>
  );
}