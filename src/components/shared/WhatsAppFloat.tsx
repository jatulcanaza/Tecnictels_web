import { site } from "../../content/site";

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

export function WhatsAppFloat() {
  const href = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Cotiza por WhatsApp"
      title="WhatsApp Tecnictels"
      className="
        group fixed bottom-5 right-5 z-50
        inline-flex items-center justify-center
        rounded-full bg-emerald-600 text-white shadow-lg
        transition hover:scale-[1.04] hover:shadow-xl active:scale-[0.98]
        h-14 w-14
      "
    >
      {/* Tooltip */}
      <span
        className="
          pointer-events-none absolute -left-2 bottom-1/2 translate-x-[-100%] translate-y-1/2
          whitespace-nowrap rounded-xl border border-white/15 bg-neutral-900 px-3 py-2
          text-xs font-semibold text-white opacity-0 shadow-lg
          transition-all duration-200
          group-hover:opacity-100 group-hover:-translate-x-[110%]
          dark:bg-white/10
        "
      >
        Cotiza por WhatsApp
      </span>

      {/* Icon */}
      <IconWhatsApp className="h-6 w-6" />
    </a>
  );
}