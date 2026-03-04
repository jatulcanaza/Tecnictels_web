import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const HEADER_OFFSET = 90; // 👈 ajusta según altura de tu header

    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);

        if (el) {
          const y =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            HEADER_OFFSET;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });

      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}