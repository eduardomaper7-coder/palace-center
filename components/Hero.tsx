import Image from 'next/image';
import { site, waLink, defaultWhatsappMessage } from '@/data/site';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[640px] items-center overflow-hidden bg-ink-radial pt-32 pb-20 sm:min-h-[760px] sm:pt-40 sm:pb-28"
    >
      {/* Vídeo de fondo — clase de blanco y negro aplicada al elemento como
          respaldo visible (el archivo ya está codificado en escala de grises),
          más un velo dorado en modo "color" y un degradado oscuro para
          mantener el texto legible sobre cualquier fotograma. */}
      <div className="absolute inset-0">
        <video
          className="hero-video h-full w-full object-cover grayscale contrast-[1.08] brightness-[0.85]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/brand/hero-video-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-bg.webm" type="video/webm" />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Alternativa estática para quien prefiere movimiento reducido */}
        <Image
          src="/images/brand/hero-video-poster.jpg"
          alt=""
          fill
          priority
          className="hero-video-poster object-cover grayscale contrast-[1.08] brightness-[0.85]"
        />

        {/* Velo dorado sutil sobre el blanco y negro (identidad Palace Center) */}
        <div aria-hidden="true" className="absolute inset-0 bg-gold-900/25 mix-blend-color" />
        {/* Degradado de legibilidad: más oscuro arriba (bajo el header) y abajo (bajo el contenido) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/55 to-ink/95"
        />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-x relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Image
            src="/images/brand/palace-logo-full.png"
            alt="Palace Center — Cuerpo · Mente · Alma"
            width={666}
            height={375}
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
