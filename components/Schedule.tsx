import { generalSchedule } from '@/data/schedule';
import { waLink, defaultWhatsappMessage } from '@/data/site';

export default function Schedule() {
  return (
    <section id="horarios" className="relative py-20 sm:py-28" aria-labelledby="schedule-title">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="eyebrow justify-center">Horarios</span>
          <h2 id="schedule-title" className="section-title mt-4">
            Horario general del centro
          </h2>
          <div className="gold-rule mx-auto mt-6" />
          <p className="mt-6 text-cream-dim">
            Los horarios de cada actividad concreta pueden variar. Consúltanos para conocer el
            horario exacto de la disciplina que te interesa.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {generalSchedule.map((block, i) => (
            <div key={block.days} className="card-surface reveal p-8" data-delay={i * 120}>
              <h3 className="font-display text-2xl text-cream">{block.days}</h3>
              <div className="mt-5 space-y-4">
                {block.ranges.map((r) => (
                  <div key={r.label} className="flex items-baseline justify-between border-b border-ink-line pb-3">
                    <span className="text-sm font-medium text-gold-300">{r.label}</span>
                    <span className="font-display text-xl text-cream">{r.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-gold-200">
            Matrícula abierta
          </span>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Consultar actividad
            </a>
            <a href="#contacto" className="btn-outline">
              Ver dirección y contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
