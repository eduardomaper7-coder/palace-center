import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de Palace Center.',
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Política de Cookies" updated="Pendiente de publicación">
      <p>
        <strong>
          ⚠ Este sitio, tal como se entrega, no instala cookies de analítica ni de publicidad:
          solo usa almacenamiento técnico del navegador cuando es imprescindible (por ejemplo,
          para recordar que se ha cerrado el aviso de cookies). Si en el futuro se añaden
          herramientas de analítica, mapas con cookies propias o píxeles de publicidad, habrá
          que actualizar este texto e implementar un banner de consentimiento previo.
        </strong>
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Son pequeños archivos que un sitio web instala en el navegador del usuario para
        almacenar y recuperar información sobre la navegación.
      </p>

      <h2>2. Cookies utilizadas en este sitio</h2>
      <p>Actualmente el sitio no utiliza cookies de análisis ni de terceros con fines publicitarios.</p>

      <h2>3. Google Maps</h2>
      <p>
        La sección de contacto incluye un mapa incrustado de Google Maps, que puede establecer
        sus propias cookies conforme a la política de privacidad de Google.
      </p>

      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies instaladas desde la configuración de tu
        navegador.
      </p>

      <h2>5. Contacto</h2>
      <p>Para cualquier duda sobre esta política, escríbenos a {site.email}.</p>
    </LegalPage>
  );
}
