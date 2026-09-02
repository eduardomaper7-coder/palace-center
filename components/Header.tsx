'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { site, waLink, defaultWhatsappMessage } from '@/data/site';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#actividades', label: 'Actividades' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#tarifas', label: 'Tarifas' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur-md border-b border-ink-line shadow-card' : 'bg-gradient-to-b from-ink/80 to-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Palace Center — Inicio">
          <Image
            src="/images/brand/palace-logo-header.png"
            alt="Palace Center"
            width={666}
            height={375}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cream/85 hover:text-gold-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#matricula" className="btn-outline text-xs px-4 py-2.5">
            Matrícula abierta
          </a>
          <a
            href={waLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-5 py-2.5"
          >
            Solicita información
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 text-cream"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-[32rem]' : 'max-h-0'
        }`}
      >
        <nav aria-label="Navegación móvil" className="container-x flex flex-col gap-1 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-cream/90 hover:bg-ink-raised hover:text-gold-300 min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-3">
            <a href="#matricula" onClick={() => setOpen(false)} className="btn-outline w-full">
              Matrícula abierta
            </a>
            <a
              href={waLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Solicita información
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
