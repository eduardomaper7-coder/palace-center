import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { site } from '@/data/site';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollReveal from '@/components/ScrollReveal';

// Tipografías autoalojadas (sin peticiones a Google Fonts en tiempo de
// ejecución ni en el build): Playfair Display para titulares, Inter para
// texto. Los archivos .woff2 viven en app/fonts.
const display = localFont({
  src: [
    { path: './fonts/playfair-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/playfair-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/playfair-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
});

const body = localFont({
  src: [
    { path: './fonts/inter-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/inter-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/inter-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/inter-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a0908',
  width: 'device-width',
  initialScale: 1,
};

const title = 'Palace Center | Centro de Cuerpo, Mente y Alma en Leganés';
const description =
  'Palace Center, en Calle Nápoles 11 (Leganés, Madrid): artes marciales, pilates, yoga, entrenamiento funcional, entrenamiento adaptado para procesos oncológicos y terapias holísticas. Matrícula abierta.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: '%s | Palace Center',
  },
  description,
  keywords: [
    'Palace Center Leganés',
    'centro deportivo Leganés',
    'pilates Leganés',
    'yoga Leganés',
    'karate Leganés',
    'artes marciales Leganés',
    'entrenamiento personal Leganés',
    'entrenamiento funcional Leganés',
    'boxeo Leganés',
    'kickboxing Leganés',
    'defensa personal Leganés',
  ],
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: '/images/brand/palace-logo-full.png',
        width: 700,
        height: 388,
        alt: 'Palace Center — Cuerpo · Mente · Alma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/brand/palace-logo-full.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: '/images/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/images/brand/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['SportsActivityLocation', 'HealthClub'],
    name: site.name,
    alternateName: 'Palace Center Cuerpo Mente Alma',
    description,
    url: site.url,
    telephone: site.phone.href,
    email: site.email,
    image: `${site.url}/images/brand/palace-logo-full.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    areaServed: 'Leganés, Madrid',
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '14:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '16:30',
        closes: '21:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '13:30',
      },
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-ink text-cream antialiased">
        {/*
          Marca <html> como "js activo" antes del primer pintado, para que las
          animaciones de aparición (.reveal) sean una mejora progresiva: sin
          este script (JS bloqueado o deshabilitado), todo el contenido es
          visible desde el principio. Ver app/globals.css y ScrollReveal.
        */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-3 focus:left-3 focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-3 focus:text-ink focus:font-semibold"
        >
          Saltar al contenido principal
        </a>
        <LocalBusinessJsonLd />
        <ScrollReveal />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
