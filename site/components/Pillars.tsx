import { pillars } from '@/data/activities';

const icons: Record<string, JSX.Element> = {
  cuerpo: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <circle cx="12" cy="5" r="2.4" />
      <path strokeLinecap="round" d="M12 8v6m0 0-4 7m4-7 4 7M7 11l-2.5 2M17 11l2.5 2" />
    </svg>
  ),
  mente: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3.5a4.5 4.5 0 0 0-4.4 5.5A4 4 0 0 0 6 17h9a4.5 4.5 0 0 0 1-8.9A4.5 4.5 0 0 0 9 3.5Z"
      />
      <path strokeLinecap="round" d="M9 3.5v13.5M9 8h3M9 12h4.5" />
    </svg>
  ),
  alma: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.5c4.5-3 8-6.6 8-10.8A4.7 4.7 0 0 0 12 6.4 4.7 4.7 0 0 0 4 9.7c0 4.2 3.5 7.8 8 10.8Z"
      />
    </svg>
  ),
};

export default function Pillars() {
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="pillars-title">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="eyebrow justify-center">Nuestra filosofía</span>
          <h2 id="pillars-title" className="section-title mt-4">
            Un centro, tres dimensiones del bienestar
          </h2>
          <div className="gold-rule mx-auto mt-6" />
          <p className="mt-6 text-cream-dim">
            En Palace Center entendemos el bienestar como algo integral. Por eso combinamos
            entrenamiento físico, disciplina mental y cuidado espiritual en un mismo espacio,
            adaptado a cada persona y a cada etapa de su vida.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.id}
              className="card-surface reveal group relative p-8 transition-transform duration-300 hover:-translate-y-1"
              data-delay={i * 120}
            >
              <div className="ornament-line absolute inset-x-8 top-0" />
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 text-gold-300 transition-colors group-hover:bg-gold-500/10">
                {icons[p.id]}
              </div>
              <h3 className="font-display mt-6 text-2xl text-cream">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
