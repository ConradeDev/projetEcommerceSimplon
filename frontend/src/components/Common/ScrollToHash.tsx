import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      
      if (element) {
        // Petit délai pour s'assurer que le DOM est prêt
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }
    } else {
      // Si pas de hash, on scroll vers le haut
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location]);

  return null;
};

export default ScrollToHash;