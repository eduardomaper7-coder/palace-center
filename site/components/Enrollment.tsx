import { site, waLink, defaultWhatsappMessage } from '@/data/site';

export default function Enrollment() {
  return (
    <section id="matricula" className="relative py-20 sm:py-28 bg-ink-soft/40" aria-labelledby="enrollment-title">
      <div className="container-x">
        <div className="card-surface reveal relative overflow-hidden px-6 py-14 text-center sm:px-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-gradient" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold-gradient" />

          <span className="eyebrow justify-center">Matrícula abierta</span>
          <h2 id="enrollment-title" className="section-title mx-auto mt-4 max-w-2xl">
            ¿Quieres formar parte de Palace Center?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-cream-dim">
            Cuéntanos qué actividad te interesa y te ayudamos a elegir el horario y el plan que
            mejor se adapta a ti. Sin compromiso.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primary">
              Solicitar información
            </a>
            <a
              href={waLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp
            </a>
            <a href={`tel:${site.phone.href}`} className="btn-ghost">
              Llamar · {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
