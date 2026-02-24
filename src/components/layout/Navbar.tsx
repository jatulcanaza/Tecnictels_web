import { NavLink } from "react-router-dom";
import { useTheme } from "../../lib/useTheme"; // ajusta ruta según tu proyecto

const linkBase =
  "text-sm font-medium text-neutral-700 hover:text-neutral-950 transition dark:text-white/80 dark:hover:text-white";
const active = "text-neutral-950 dark:text-white";

function IconSunMoon({ dark }: { dark: boolean }) {
  return dark ? (
    // Moon
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M21 13.2A7.8 7.8 0 1 1 10.8 3a6.4 6.4 0 0 0 10.2 10.2Z"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    // Sun
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        className="stroke-current"
        strokeWidth="1.8"
      />
      <path
        d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b theme-border bg-white/80 backdrop-blur dark:bg-white/5">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <NavLink to="/" className="flex items-center">
          <img
            src="/brand/logo.png"
            alt="Tecnictels"
            className="w-48 max-h-10 object-contain md:w-44"
            loading="eager"
          />
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/servicios" className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
            Servicios
          </NavLink>
          <NavLink to="/proyectos" className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
            Proyectos
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
            Nosotros
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
            Contacto
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {/* Toggle theme */}
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            title={isDark ? "Modo claro" : "Modo oscuro"}
          >
            <IconSunMoon dark={isDark} />
          </button>

          <NavLink
            to="/contacto"
            className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-emerald-600 dark:hover:opacity-95"
          >
            Cotizar
          </NavLink>
        </div>
      </div>
    </header>
  );
}