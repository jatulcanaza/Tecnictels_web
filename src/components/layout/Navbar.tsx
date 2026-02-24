import { NavLink } from "react-router-dom";

const linkBase =
  "text-sm font-medium text-neutral-700 hover:text-neutral-950 transition";
const active = "text-neutral-950";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/brand/logo.png"
            alt="Tecnictels"
            className="h-8 w-auto"
            loading="eager"
          />
          <span className="text-sm font-semibold tracking-wide">TECNICTELS</span>
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

        <NavLink
          to="/contacto"
          className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Cotizar
        </NavLink>
      </div>
    </header>
  );
}