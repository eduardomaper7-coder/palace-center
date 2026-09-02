import Image from 'next/image';
import { site, waLink, defaultWhatsappMessage } from '@/data/site';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink-radial pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Alas doradas decorativas de fondo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07]">
        <Image
          src="/images/brand/palace-logo-full.png"
          alt=""
          width={1100}
          height={610}
          className="w-[140%] max-w-none sm:w-[90%]"
        />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-x relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Image
            src="/images/brand/palace-logo-full.png"
            alt="Palace Center — Cuerpo · Mente · Alma"
            width={700}
            height={388}
            priority
            className="wing-glow mb-4 h-auto w-64 sm:w-80"
          />

          <p className="eyebrow reveal">Palace Center · Leganés</p>

          <h1 className="section-title reveal mt-4 text-4xl sm:text-5xl md:text-6xl" data-delay="80">
            Entrena tu cuerpo. Equilibra tu mente.
            <span className="block bg-gold-gradient bg-clip-text text-transparent">Cuida tu alma.</span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-base sm:text-lg text-cream-dim" data-delay="160">
            Un centro integral en Leganés que une artes marciales, entrenamiento, pilates, yoga
            y terapias holísticas bajo un mismo techo. Para quienes buscan fuerza, equilibrio y
            bienestar real.
          </p>

          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row" data-delay="240">
            <a href="#matricula" className="btn-primary">
              Solicita información
            </a>
            <a href="#actividades" className="btn-outline">
              Ver actividades
            </a>
            <a
              href={waLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Escríbenos por WhatsApp →
            </a>
          </div>

          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-cream-muted" data-delay="320">
            <span>Matrícula abierta</span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-gold-500" />
            <span>Calle Nápoles, 11 · Leganés</span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-gold-500" />
            <span>{site.phone.display}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
