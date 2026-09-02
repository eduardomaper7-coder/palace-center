import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Palace Center.',
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso Legal" updated="Pendiente de publicación">
      <p>
        <strong>
          ⚠ Este texto es una plantilla provisional. Antes de publicar la web, sustituye los
          datos entre corchetes por la información fiscal y mercantil real del titular del
          sitio.
        </strong>
      </p>

      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y
        Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Titular: {site.legalNamePlaceholder}</li>
        <li>NIF/CIF: {site.cifPlaceholder}</li>
        <li>
          Domicilio: {site.address.street}, {site.address.postalCode} {site.address.city},{' '}
          {site.address.region}
        </li>
        <li>Email: {site.email}</li>
        <li>Teléfono: {site.phone.display}</li>
        <li>Inscripción registral: [PENDIENTE DE CONFIRMAR, si procede]</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente aviso legal regula el uso del sitio web {site.url} (en adelante, el
        &quot;Sitio Web&quot;), del que es titular {site.name}.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y uso de este Sitio Web atribuye la condición de usuario e implica la
        aceptación de las condiciones incluidas en este Aviso Legal.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos del Sitio Web (textos, imágenes, logotipos, diseño) son titularidad de{' '}
        {site.name} o de terceros que han autorizado su uso, y están protegidos por la
        normativa de propiedad intelectual e industrial.
      </p>

      <h2>5. Legislación aplicable</h2>
      <p>Este Aviso Legal se rige por la legislación española.</p>
    </LegalPage>
  );
}
