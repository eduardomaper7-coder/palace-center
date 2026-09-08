import { classSchedules, generalSchedule } from '@/data/schedule';
import { waLink, defaultWhatsappMessage } from '@/data/site';

export default function Schedule() {
  return (
    <section id="horarios" className="relative py-20 sm:py-28" aria-labelledby="schedule-title">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="eyebrow justify-center">Horarios</span>
          <h2 id="schedule-title" className="section-title mt-4">
            Horarios de clases y del centro
          </h2>
          <div className="gold-rule mx-auto mt-6" />
          <p className="mt-6 text-cream-dim">
            Encuentra tu actividad y el grupo que mejor encaja contigo. Para otras disciplinas,
            consúltanos y te ayudamos a elegir.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
          {classSchedules.map((activity) => (
            <article key={activity.activity} className="card-surface reveal p-6 sm:p-8">
              <h3 className="font-display text-2xl text-cream">{activity.activity}</h3>
              <p className="mt-2 text-sm text-gold-300">{activity.teacher}</p>
              <ul className="mt-6 space-y-4">
                {activity.sessions.map((session) => (
                  <li key={`${session.group}-${session.days}`} className="border-b border-ink-line pb-4">
                    <p className="font-semibold text-cream">{session.group}</p>
                    <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <span className="text-sm text-cream-dim">{session.days}</span>
                      <span className="whitespace-nowrap font-display text-xl text-gold-200">{session.hours}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 className="reveal mt-14 text-center font-display text-2xl text-cream">Horario general del centro</h3>
        <div className="mx-auto mt-6 grid max-w-3xl gap-6 sm:grid-cols-2">
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
