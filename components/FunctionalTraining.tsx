import { functionalSchedule, functionalPricing } from '@/data/schedule';
import { waLink } from '@/data/site';

const blocks = [
  {
    title: 'Entrenamiento Funcional',
    text: 'Mejora tu fuerza, resistencia, movilidad y salud general a través de entrenamientos dinámicos y adaptados a tu nivel.',
    tags: ['Fuerza', 'Resistencia', 'Movilidad'],
  },
  {
    title: 'Entrenamiento para Oncológicos',
    text: 'Ejercicio seguro y adaptado que acompaña tu bienestar, ayuda a manejar la fatiga y favorece cuerpo y mente durante y después del tratamiento.',
    tags: ['Bienestar', 'Equilibrio', 'Esperanza'],
  },
  {
    title: 'Readaptación y Prevención de Lesiones',
    text: 'Trabajamos para recuperar movilidad, corregir desequilibrios y fortalecer tu cuerpo de forma segura, previniendo lesiones y mejorando tu rendimiento en el día a día.',
    tags: ['Recupera', 'Previene', 'Mejora'],
  },
];

export default function FunctionalTraining() {
  return (
    <section id="tarifas" className="relative py-20 sm:py-28" aria-labelledby="functional-title">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="eyebrow justify-center">Fuerza, bienestar y esperanza</span>
          <h2 id="functional-title" className="section-title mt-4">
            Entrenamiento Funcional y para Procesos Oncológicos
          </h2>
          <div className="gold-rule mx-auto mt-6" />
          <p className="mt-6 text-cream-dim">
            Un programa dirigido por Ruth Carbonero Marcos (colegiada nº 69147), pensado para
            acompañar tu bienestar físico en cada etapa, con seguimiento profesional y adaptado a
            tu ritmo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blocks.map((b, i) => (
            <div key={b.title} className="card-surface reveal p-7" data-delay={i * 110}>
              <h3 className="font-display text-xl text-cream">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">{b.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {b.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Horarios */}
          <div className="card-surface reveal p-7 sm:p-8" data-delay="0">
            <h3 className="font-display text-xl text-cream">Horarios del programa</h3>
            <ul className="mt-5 divide-y divide-ink-line">
              {functionalSchedule.map((s) => (
                <li key={s.label} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-semibold text-gold-200">{s.label}</p>
                    <p className="text-xs text-cream-muted">{s.days}</p>
                  </div>
                  <p className="font-display text-lg text-cream">{s.hours}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarifas */}
          <div className="card-surface reveal p-7 sm:p-8" data-delay="110">
            <h3 className="font-display text-xl text-cream">Tarifas</h3>
            <ul className="mt-5 divide-y divide-ink-line">
              {functionalPricing.map((p) => (
                <li key={p.freq} className="flex items-center justify-between gap-4 py-4">
                  <span className="text-sm text-cream/90">{p.freq}</span>
                  <span className="font-display text-lg text-gold-200">
                    {p.price} <span className="text-xs text-cream-muted">{p.period}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 inline-flex rounded-full bg-gold-500/10 px-4 py-2 text-xs font-semibold text-gold-200">
              Primera mensualidad con descuento
            </p>
            <a
              href={waLink('Hola, he visto la web de Palace Center y me gustaría recibir información sobre el entrenamiento funcional / oncológico.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
