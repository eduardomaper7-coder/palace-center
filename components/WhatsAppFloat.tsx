import { site, waLink, defaultWhatsappMessage } from '@/data/site';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      <a
        href={`tel:${site.phone.href}`}
        aria-label={`Llamar a Palace Center al ${site.phone.display}`}
        className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/50 bg-ink-soft/90 text-gold-200 shadow-card backdrop-blur transition-transform hover:-translate-y-0.5 hover:border-gold-300"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
      <a
        href={waLink(defaultWhatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar información por WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-sm font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:-translate-y-0.5 min-h-[48px]"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden sm:inline">Solicitar información</span>
        <span className="inline sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.2.6 4.27 1.63 6.06L3.9 29l8.2-2.15a12.9 12.9 0 0 0 3.92.61h.01c6.62 0 12.02-5.37 12.02-11.98C28.05 8.37 22.65 3 16.02 3zm7.02 17.15c-.3.83-1.72 1.59-2.36 1.68-.6.09-1.35.13-2.18-.14-.5-.16-1.15-.37-1.98-.72-3.48-1.5-5.75-4.99-5.93-5.22-.17-.23-1.42-1.89-1.42-3.6s.9-2.56 1.22-2.9c.31-.35.68-.43.91-.43.23 0 .46 0 .66.01.21.01.5-.08.78.6.3.7 1.02 2.43 1.11 2.6.09.18.15.39.03.62-.12.23-.18.37-.36.57-.18.2-.38.44-.54.6-.18.17-.37.36-.16.7.21.35.93 1.53 2 2.48 1.38 1.23 2.54 1.61 2.9 1.79.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.33.12 2.06.97 2.42 1.15.36.18.6.27.68.42.09.15.09.85-.21 1.67z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.5c0-1.1.9-2 2-2h1.28a1 1 0 0 1 .97.76l.9 3.6a1 1 0 0 1-.27.98L6.6 10.2a12.6 12.6 0 0 0 7.2 7.2l1.36-1.28a1 1 0 0 1 .98-.27l3.6.9a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2h-1C10.16 21 3 13.84 3 5.5z"
      />
    </svg>
  );
}
