import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Palace Center.',
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de Privacidad" updated="Pendiente de publicación">
      <p>
        <strong>
          ⚠ Plantilla provisional conforme al RGPD y la LOPDGDD. Revísala con un asesor legal y
          completa los datos entre corchetes antes de publicar la web.
        </strong>
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Responsable: {site.legalNamePlaceholder}</li>
        <li>NIF/CIF: {site.cifPlaceholder}</li>
        <li>
          Dirección: {site.address.street}, {site.address.postalCode} {site.address.city},{' '}
          {site.address.region}
        </li>
        <li>Email: {site.email}</li>
      </ul>

      <h2>2. Finalidad del tratamiento</h2>
      <p>
        Los datos facilitados a través del formulario de contacto se utilizan para responder a
        solicitudes de información sobre las actividades de {site.name} y, en su caso, gestionar
        la matrícula.
      </p>

      <h2>3. Legitimación</h2>
      <p>El consentimiento del interesado, prestado al marcar la casilla del formulario.</p>

      <h2>4. Conservación de los datos</h2>
      <p>
        Los datos se conservarán mientras exista un interés mutuo para mantener el contacto y no
        se solicite su supresión por parte del interesado.
      </p>

      <h2>5. Destinatarios</h2>
      <p>
        No se cederán datos a terceros, salvo obligación legal. [Indicar aquí si se usa algún
        proveedor externo de email marketing, CRM o similar.]
      </p>

      <h2>6. Derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y
        portabilidad escribiendo a {site.email}.
      </p>
    </LegalPage>
  );
}
