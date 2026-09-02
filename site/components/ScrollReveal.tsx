'use client';

import { useEffect } from 'react';

/**
 * Activa una animación sutil de aparición ("fade-up") en cualquier elemento
 * con la clase `.reveal` cuando entra en el viewport. Respeta
 * prefers-reduced-motion (gestionado también en CSS) y no bloquea el
 * renderizado inicial: si JS falla, los elementos son visibles igualmente
 * gracias a la regla de respaldo en globals.css.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (prefersReduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    // threshold 0 + rootMargin positivo: se revela en cuanto un píxel del
    // elemento entra en un viewport "ampliado" (100px de margen). Es
    // deliberadamente permisivo: preferimos revelar un poco antes/rápido a
    // arriesgarnos a que un scroll rápido o programático (por ejemplo, al
    // navegar desde el menú) salte por encima de la ventana de detección y
    // deje contenido invisible.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? Number(el.dataset.delay) : 0;
            el.style.animationDelay = `${delay}ms`;
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0, rootMargin: '100px 0px 100px 0px' }
    );

    els.forEach((el) => observer.observe(el));

    // Red de seguridad: si por lo que sea algún elemento se queda sin
    // revelar (scroll extremadamente rápido, foco por teclado directo a un
    // ancla, etc.), nos aseguramos de que todo sea visible pasados unos
    // segundos, para que ningún contenido quede oculto de forma permanente.
    const safetyTimer = window.setTimeout(() => {
      els.forEach((el) => el.classList.add('is-visible'));
    }, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(safetyTimer);
    };
  }, []);

  return null;
}
