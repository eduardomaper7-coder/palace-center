import Image from 'next/image';
import { site } from '@/data/site';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#actividades', label: 'Actividades' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#contacto', label: 'Contacto' },
];

const legal = [
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/politica-privacidad', label: 'Política de privacidad' },
  { href: '/politica-cookies', label: 'Política de cookies' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink py-14">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/brand/palace-logo-header.png"
              alt="Palace Center"
              width={666}
              height={375}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm text-cream-muted">Cuerpo · Mente · Alma</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-300">Navegación</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-dim">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-300">Contacto</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-dim">
              <li>{site.address.street}</li>
              <li>
                {site.address.postalCode} {site.address.city}, {site.address.region}
              </li>
              <li>
                <a href={`tel:${site.phone.href}`} className="hover:text-gold-200">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`tel:${site.mobile.href}`} className="hover:text-gold-200">
                  {site.mobile.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold-200">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-300">Legal</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-dim">
              {legal.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ornament-line mt-12" />

        <p className="mt-6 text-center text-xs text-cream-muted">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
