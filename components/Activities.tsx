import Image from 'next/image';
import { activityCategories } from '@/data/activities';
import { waLink } from '@/data/site';
import { familyActivity } from '@/data/schedule';

export default function Activities() {
  return (
    <section id="actividades" className="relative py-20 sm:py-28 bg-ink-soft/40" aria-labelledby="activities-title">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="eyebrow justify-center">Actividades y servicios</span>
          <h2 id="activities-title" className="section-title mt-4">
            Todo lo que puedes practicar en Palace Center
          </h2>
          <div className="gold-rule mx-auto mt-6" />
        </div>

        <article className="card-surface reveal mt-14 border border-gold-500/40 p-7 sm:p-10" aria-labelledby="family-title">
          <span className="eyebrow">Nueva actividad · Padres e hijos</span>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h3 id="family-title" className="font-display text-3xl text-cream sm:text-4xl">Entrenad juntos. Creced en familia.</h3>
              <p className="mt-4 text-cream-dim">
                Compartid algo más que la rutina: un rato en el tatami para aprender artes marciales,
                superar retos juntos y disfrutar del tiempo en familia. Padres e hijos participan
                en una misma actividad con Juan Carlos Palacios Guerra.
              </p>
              <p className="mt-3 text-sm text-gold-200">Una nueva forma de compartir movimiento, respeto y complicidad.</p>
            </div>
            <div className="rounded-2xl bg-ink/60 p-6">
              <h4 className="font-display text-xl text-cream">{familyActivity.title}</h4>
              <p className="mt-3 text-sm text-cream-dim">{familyActivity.days}</p>
              <p className="mt-1 font-display text-2xl text-gold-200">{familyActivity.hours}</p>
              <a href={waLink('Hola, me gustaría recibir información sobre las clases de artes marciales para padres e hijos con Juan Carlos.')} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                Quiero entrenar en familia
              </a>
            </div>
          </div>
        </article>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {activityCategories.map((cat, i) => (
            <article
              key={cat.id}
              className="card-surface reveal relative overflow-hidden p-7 sm:p-8"
              data-delay={i * 100}
            >
              {cat.image && (
                <div className="pointer-events-none absolute inset-0 opacity-15">
                  <Image src={cat.image} alt="" fill sizes="600px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-ink-soft/95 to-ink-soft/70" />
                </div>
              )}
              <div className="relative">
                <h3 className="font-display text-2xl text-cream sm:text-3xl">{cat.title}</h3>
                <p className="mt-3 text-sm text-cream-dim">{cat.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-gold-500/30 bg-ink/60 px-3.5 py-1.5 text-xs font-medium text-cream/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hola, he visto la web de Palace Center y me gustaría recibir información sobre ${cat.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 hover:text-gold-200"
                >
                  Consultar {cat.title.toLowerCase()}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-xs text-cream-muted">
          El ejercicio adaptado para procesos oncológicos, quimioterapia u operaciones se plantea
          siempre como acompañamiento seguro y progresivo, orientado al bienestar y la calidad de
          vida — nunca como tratamiento médico ni sustituto de la atención sanitaria.
        </p>
      </div>
    </section>
  );
}
