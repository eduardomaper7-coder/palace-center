// Datos generales del negocio (NAP: Name, Address, Phone) — mantener consistentes
// en toda la web y en los datos estructurados (schema.org).

export const site = {
  name: 'Palace Center',
  tagline: 'Cuerpo · Mente · Alma',
  legalNamePlaceholder: '[RAZÓN SOCIAL PENDIENTE DE CONFIRMAR]',
  cifPlaceholder: '[CIF/NIF PENDIENTE DE CONFIRMAR]',
  description:
    'Centro integral de cuerpo, mente y alma en Leganés: artes marciales, pilates, yoga, entrenamiento funcional, entrenamiento adaptado para procesos oncológicos y terapias holísticas.',
  url: 'https://www.palacecenter.es',
  address: {
    street: 'Calle Nápoles, 11',
    postalCode: '28912',
    city: 'Leganés',
    region: 'Madrid',
    country: 'España',
    countryCode: 'ES',
  },
  phone: {
    display: '91 828 19 88',
    href: '+34918281988',
  },
  mobile: {
    display: '662 12 85 72',
    href: '+34662128572',
    whatsapp: '34662128572',
  },
  email: 'info@sietenotasbaila.com',
  mapsQuery: 'Palace Center, Calle Nápoles 11, 28912 Leganés, Madrid, España',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Palace+Center%2C+Calle+N%C3%A1poles+11%2C+28912+Legan%C3%A9s%2C+Madrid%2C+Espa%C3%B1a&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Palace+Center%2C+Calle+N%C3%A1poles+11%2C+28912+Legan%C3%A9s%2C+Madrid',
  social: {
    instagram: '',
    facebook: '',
  },
} as const;

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.mobile.whatsapp}?text=${encoded}`;
}

export const defaultWhatsappMessage =
  'Hola, he visto la web de Palace Center y me gustaría recibir información sobre vuestras actividades.';
