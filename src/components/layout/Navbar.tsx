import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../lib/useTheme";

/* =========================================================================
   Navbar Premium
   - Underline gradiente (hover + active)
   - Mega menu (Servicios + Nosotros) (mutuamente excluyentes)
   - Mobile drawer con hamburger->X
   - Shrink on scroll + glass blur fuerte
   - Mobile: drawer con SCROLL interno + acordeones exclusivos (solo 1 abierto)
   ========================================================================= */

const linkBase =
  "relative inline-flex items-center text-sm font-semibold transition-colors duration-200 " +
  "text-neutral-700 hover:text-neutral-950 dark:text-white/80 dark:hover:text-white";

const activeLink = "text-neutral-950 dark:text-white";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/** Underline gradiente estilo Footer */
function Underline() {
  return (
    <span
      className="
        pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full
        scale-x-0 rounded-full bg-gradient-to-r from-emerald-500 to-orange-500
        transition-transform duration-300 origin-left group-hover:scale-x-100
      "
    />
  );
}

/** Underline activo (si está en la ruta actual) */
function ActiveUnderline() {
  return (
    <span
      className="
        pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full
        rounded-full bg-gradient-to-r from-emerald-500 to-orange-500
      "
    />
  );
}

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

/** Icono Hamburguesa animado -> X */
function Burger({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-6">
      <motion.span
        className="absolute left-0 top-0 h-[2px] w-6 rounded-full bg-current"
        animate={open ? { y: 9, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 top-[9px] h-[2px] w-6 rounded-full bg-current"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 bottom-0 h-[2px] w-6 rounded-full bg-current"
        animate={open ? { y: -9, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}

type MenuItem = {
  label: string;
  to: string;
  desc?: string;
};

const servicesMenu: MenuItem[] = [
  { label: "CCTV", to: "/servicios#cctv", desc: "Cámaras, monitoreo y grabación." },
  { label: "Seguridad electrónica", to: "/servicios#seguridad-electronica", desc: "Alarmas, sensores, integración." },
  { label: "Control de acceso", to: "/servicios#control-acceso", desc: "Biometría, tarjetas, cerraduras." },
  { label: "Detección de incendios", to: "/servicios#deteccion-incendios", desc: "Detección, alertas, normativa." },
  { label: "Redes y telecom", to: "/servicios#redes-telecom", desc: "Switching, Wi-Fi, routing." },
  { label: "Cableado estructurado", to: "/servicios#cableado-estructurado", desc: "Cat6/6A, racks, certificación." },
  { label: "Instalaciones eléctricas", to: "/servicios#instalaciones-electricas", desc: "Tableros, UPS, canalización." },
];

const aboutMenu: MenuItem[] = [
  { label: "Quiénes somos", to: "/nosotros#quienes-somos", desc: "Conoce nuestro enfoque y equipo." },
  { label: "Nuestros valores", to: "/nosotros#valores", desc: "Cultura, principios y forma de trabajo." },
  { label: "Implementación a nivel nacional", to: "/nosotros#cobertura", desc: "Cobertura y tipos de proyectos." },
  { label: "Marcas", to: "/nosotros#marcas", desc: "Tecnología compatible y experiencia." },
];

function NavItem({
  to,
  children,
  forceActive,
}: {
  to: string;
  children: React.ReactNode;
  forceActive?: boolean;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn("group", linkBase, forceActive || isActive ? activeLink : "")}
    >
      <span className="relative">
        {children}
        <Underline />
        {forceActive ? <ActiveUnderline /> : null}
      </span>
    </NavLink>
  );
}

/** Cierra al click fuera */
function useClickOutside<T extends HTMLElement>(onOutside: () => void) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) onOutside();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onOutside]);
  return ref;
}

function MegaMenu({
  open,
  setOpen,
  items,
  ctaTo,
  ctaLabel,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  items: MenuItem[];
  ctaTo: string;
  ctaLabel: string;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          onMouseLeave={() => setOpen(false)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          className="
            isolate transform-gpu
            absolute left-1/2 top-[calc(100%+14px)]
            w-[min(500px,calc(100vw-2rem))] -translate-x-1/2
            rounded-3xl border theme-border
            bg-white/95 shadow-xl backdrop-blur-2xl
            dark:bg-[#0b0f14]/90
            p-4
          "
          role="menu"
        >
          {/* Glow sutil premium */}
          <div className="pointer-events-none absolute -top-20 left-1/3 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-1/3 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative grid gap-3 p-2 md:grid-cols-2">
            <NavLink
              to={ctaTo}
              className="
                col-span-2 mb-1 flex items-center justify-between
                rounded-2xl border theme-border bg-neutral-50/70 px-4 py-3
                text-sm font-semibold text-neutral-950 shadow-sm transition
                hover:-translate-y-0.5 hover:shadow-md
                dark:bg-white/5 dark:text-white
              "
              role="menuitem"
            >
              <span>{ctaLabel}</span>
              <span className="text-xs theme-muted">{ctaTo}</span>
            </NavLink>

            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className="
                  group rounded-2xl border theme-border bg-white/90 p-4 text-left
                  shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
                  dark:bg-white/[0.06]
                "
                role="menuitem"
              >
                <p className="text-sm font-semibold text-neutral-950 dark:text-white">{it.label}</p>
                {it.desc ? <p className="mt-1 text-xs theme-muted">{it.desc}</p> : null}

                <span className="mt-3 block h-[2px] w-0 rounded-full bg-gradient-to-r from-emerald-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function Navbar() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const logoSrc = isDark ? "/brand/logo-dark.png" : "/brand/logo-light.png";

  const { pathname } = useLocation();

  const isServicesRoute = pathname.startsWith("/servicios");
  const isProjectsRoute = pathname.startsWith("/proyectos");
  const isAboutRoute = pathname.startsWith("/nosotros");

  // Desktop mega menus
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // ✅ Desktop: solo 1 mega menu abierto a la vez
  const openServices = () => {
    setServicesOpen(true);
    setAboutOpen(false);
  };
  const openAbout = () => {
    setAboutOpen(true);
    setServicesOpen(false);
  };
  const toggleServices = () => {
    setServicesOpen((v) => {
      const next = !v;
      if (next) setAboutOpen(false);
      return next;
    });
  };
  const toggleAbout = () => {
    setAboutOpen((v) => {
      const next = !v;
      if (next) setServicesOpen(false);
      return next;
    });
  };

  // Mobile drawer + acordeones
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Shrink on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menus al cambiar ruta
  useEffect(() => {
    setServicesOpen(false);
    setAboutOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileAboutOpen(false);
  }, [pathname]);

  // Evita scroll del body cuando mobile abierto
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const servicesRef = useClickOutside<HTMLDivElement>(() => setServicesOpen(false));
  const aboutRef = useClickOutside<HTMLDivElement>(() => setAboutOpen(false));

  const headerClass = useMemo(() => {
    return cn(
      "fixed inset-x-0 top-0 z-50 border-b theme-border transition-all",
      "backdrop-blur-xl",
      scrolled ? "bg-white/80 shadow-sm dark:bg-[#0b0f14]/70" : "bg-white/70 dark:bg-[#0b0f14]/40"
    );
  }, [scrolled]);

  return (
    <header className={headerClass}>
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 transition-all",
          scrolled ? "h-14" : "h-16"
        )}
      >
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="Tecnictels"
            className={cn(
              "object-contain transition-all",
              scrolled ? "w-40 max-h-9 md:w-44" : "w-44 max-h-10 md:w-48"
            )}
            loading="eager"
          />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          <NavItem to="/" forceActive={pathname === "/"}>
            Inicio
          </NavItem>

          {/* Servicios mega menu */}
          <div ref={servicesRef} className="relative" onMouseEnter={openServices}>
            <button
              type="button"
              onClick={toggleServices}
              onMouseEnter={openServices}
              className={cn("group", linkBase, isServicesRoute ? activeLink : "")}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              <span className="relative inline-flex items-center gap-2">
                Servicios
                <motion.span
                  className="text-neutral-500 dark:text-white/60"
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path
                      d="M6 9l6 6 6-6"
                      className="stroke-current"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>

                <Underline />
                {isServicesRoute ? <ActiveUnderline /> : null}
              </span>
            </button>

            <MegaMenu
              open={servicesOpen}
              setOpen={setServicesOpen}
              items={servicesMenu}
              ctaTo="/servicios"
              ctaLabel="Ver todos los servicios"
            />
          </div>

          {/* Proyectos */}
          <NavItem to="/proyectos" forceActive={isProjectsRoute}>
            Proyectos
          </NavItem>

          {/* Nosotros mega menu */}
          <div ref={aboutRef} className="relative" onMouseEnter={openAbout}>
            <button
              type="button"
              onClick={toggleAbout}
              onMouseEnter={openAbout}
              className={cn("group", linkBase, isAboutRoute ? activeLink : "")}
              aria-haspopup="menu"
              aria-expanded={aboutOpen}
            >
              <span className="relative inline-flex items-center gap-2">
                Nosotros
                <motion.span
                  className="text-neutral-500 dark:text-white/60"
                  animate={{ rotate: aboutOpen ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path
                      d="M6 9l6 6 6-6"
                      className="stroke-current"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>

                <Underline />
                {isAboutRoute ? <ActiveUnderline /> : null}
              </span>
            </button>

            <MegaMenu
              open={aboutOpen}
              setOpen={setAboutOpen}
              items={aboutMenu}
              ctaTo="/nosotros"
              ctaLabel="Ir a Nosotros"
            />
          </div>

          {/* Contacto */}
          <NavItem to="/contacto">Contacto</NavItem>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Theme */}
          <button
            type="button"
            onClick={toggle}
            className="
              inline-flex h-10 w-10 items-center justify-center rounded-full
              border border-neutral-200 bg-white/70 text-neutral-900 shadow-sm
              transition hover:bg-neutral-50
              dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10
            "
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            title={isDark ? "Modo claro" : "Modo oscuro"}
          >
            <IconSunMoon dark={isDark} />
          </button>

          {/* CTA Desktop */}
          <NavLink
            to="/contacto"
            className="
              hidden md:inline-flex items-center rounded-full
              bg-neutral-900 px-4 py-2 text-sm font-semibold text-white
              transition hover:bg-neutral-800
              dark:bg-emerald-600 dark:hover:opacity-95
            "
          >
            Cotizar
          </NavLink>

          {/* Hamburger Mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="
              md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full
              border theme-border theme-surface text-neutral-900 shadow-sm transition
              hover:bg-neutral-50 dark:text-white dark:hover:bg-white/10
            "
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <Burger open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              className="
                fixed right-0 top-0 z-50 h-dvh w-[88%] max-w-sm
                border-l theme-border
                bg-white/90 backdrop-blur-2xl shadow-2xl
                dark:bg-[#0b0f14]/90
                flex flex-col overflow-hidden
              "
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between border-b theme-border px-4 py-4">
                <img src={logoSrc} alt="Tecnictels" className="h-8 w-auto object-contain" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border theme-border theme-surface
                             text-neutral-900 dark:text-white"
                  aria-label="Cerrar"
                >
                  <Burger open />
                </button>
              </div>

              {/* ✅ Scroll interno del panel */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-4">
                <div className="space-y-1">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      cn(
                        "block rounded-2xl px-4 py-3 text-sm font-semibold transition",
                        isActive
                          ? "bg-neutral-900 text-white dark:bg-white/10"
                          : "hover:bg-neutral-50 dark:hover:bg-white/10 text-neutral-900 dark:text-white"
                      )
                    }
                  >
                    Inicio
                  </NavLink>

                  {/* Servicios accordion (✅ solo uno abierto) */}
                  <button
                    type="button"
                    onClick={() => {
                      setMobileServicesOpen((v) => {
                        const next = !v;
                        if (next) setMobileAboutOpen(false); // ✅ cierra Nosotros
                        return next;
                      });
                    }}
                    className="
                      w-full rounded-2xl border theme-border theme-surface px-4 py-3
                      text-left text-sm font-semibold text-neutral-900 transition
                      hover:bg-neutral-50 dark:text-white dark:hover:bg-white/10
                      flex items-center justify-between
                    "
                  >
                    Servicios
                    <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.18 }}>
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path
                          d="M6 9l6 6 6-6"
                          className="stroke-current"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -6 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -6 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 space-y-1 rounded-2xl border theme-border bg-white/60 p-2 dark:bg-white/5">
                          <NavLink
                            to="/servicios"
                            className="block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-950 hover:bg-neutral-50
                                       dark:text-white dark:hover:bg-white/10"
                          >
                            Ver todos
                          </NavLink>

                          {servicesMenu.map((it) => (
                            <NavLink
                              key={it.to}
                              to={it.to}
                              className="block rounded-xl px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50
                                         dark:text-white/80 dark:hover:bg-white/10"
                            >
                              {it.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  {/* Proyectos */}
                  <NavLink
                    to="/proyectos"
                    className={({ isActive }) =>
                      cn(
                        "block rounded-2xl px-4 py-3 text-sm font-semibold transition",
                        isActive
                          ? "bg-neutral-900 text-white dark:bg-white/10"
                          : "hover:bg-neutral-50 dark:hover:bg-white/10 text-neutral-900 dark:text-white"
                      )
                    }
                  >
                    Proyectos
                  </NavLink>

                  {/* Nosotros accordion (✅ solo uno abierto) */}
                  <button
                    type="button"
                    onClick={() => {
                      setMobileAboutOpen((v) => {
                        const next = !v;
                        if (next) setMobileServicesOpen(false); // ✅ cierra Servicios
                        return next;
                      });
                    }}
                    className="
                      w-full rounded-2xl border theme-border theme-surface px-4 py-3
                      text-left text-sm font-semibold text-neutral-900 transition
                      hover:bg-neutral-50 dark:text-white dark:hover:bg-white/10
                      flex items-center justify-between
                    "
                  >
                    Nosotros
                    <motion.span animate={{ rotate: mobileAboutOpen ? 180 : 0 }} transition={{ duration: 0.18 }}>
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path
                          d="M6 9l6 6 6-6"
                          className="stroke-current"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {mobileAboutOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -6 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -6 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 space-y-1 rounded-2xl border theme-border bg-white/60 p-2 dark:bg-white/5">
                          <NavLink
                            to="/nosotros"
                            className="block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-950 hover:bg-neutral-50
                                       dark:text-white dark:hover:bg-white/10"
                          >
                            Ver todo
                          </NavLink>

                          {aboutMenu.map((it) => (
                            <NavLink
                              key={it.to}
                              to={it.to}
                              className="block rounded-xl px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50
                                         dark:text-white/80 dark:hover:bg-white/10"
                            >
                              {it.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  {/* Contacto */}
                  <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                      cn(
                        "block rounded-2xl px-4 py-3 text-sm font-semibold transition",
                        isActive
                          ? "bg-neutral-900 text-white dark:bg-white/10"
                          : "hover:bg-neutral-50 dark:hover:bg-white/10 text-neutral-900 dark:text-white"
                      )
                    }
                  >
                    Contacto
                  </NavLink>
                </div>

                {/* CTA */}
                <NavLink
                  to="/contacto"
                  className="
                    mt-4 inline-flex w-full items-center justify-center rounded-2xl
                    bg-neutral-900 px-4 py-3 text-sm font-semibold text-white
                    transition hover:bg-neutral-800
                    dark:bg-emerald-600 dark:hover:opacity-95
                  "
                >
                  Cotizar ahora
                </NavLink>

                <p className="mt-4 text-xs theme-muted">
                  Modo: <span className="font-semibold">{isDark ? "Oscuro" : "Claro"}</span>
                </p>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}