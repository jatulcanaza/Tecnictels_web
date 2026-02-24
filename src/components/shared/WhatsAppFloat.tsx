import { site } from "../../content/site";

export function WhatsAppFloat() {
  const href = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
      aria-label="Contactar por WhatsApp"
      title="WhatsApp Tecnictels"
    >
      <span className="text-sm font-semibold">WhatsApp</span>
    </a>
  );
}