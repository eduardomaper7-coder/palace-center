import Image from 'next/image';
import { teachers } from '@/data/team';
import { waLink } from '@/data/site';

export default function Team() {
  return (
    <section id="equipo" className="relative py-20 sm:py-28 bg-ink-soft/40" aria-labelledby="team-title">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="eyebrow justify-center">Equipo profesores</span>
          <h2 id="team-title" className="section-title mt-4">
            Nuestro equipo
          </h2>
          <div className="gold-rule mx-auto mt-6" />
          <p className="mt-6 text-cream-dim">
            Profesionales con recorrido en su disciplina, cerca de ti para acompañarte desde el
            primer día.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => (
            <article
              key={t.slug}
              className="card-surface reveal group overflow-hidden"
              data-delay={(i % 3) * 110}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
                {t.image && (
                  <>
                    <Image
                      src={t.image}
                      alt={`${t.name} — ${t.role}`}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                        t.lowRes ? 'object-top' : ''
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-70" />
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-cream">{t.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold-300">{t.role}</p>
                {t.extra && <p className="mt-0.5 text-xs text-cream-muted">{t.extra}</p>}
                <a
                  href={waLink(`Hola, he visto la web de Palace Center y me gustaría recibir información sobre ${t.whatsappActivity}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cream/90 hover:text-gold-200"
                >
                  Consultar sus actividades
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
