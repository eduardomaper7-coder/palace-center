export default function About() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-28" aria-labelledby="about-title">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <span className="eyebrow">Nosotros</span>
            <h2 id="about-title" className="section-title mt-4">
              Exclusividad, profesionalidad y equilibrio
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 text-cream-dim">
              Palace Center nace con una idea clara: reunir en un mismo espacio de Leganés todo
              lo necesario para cuidar el cuerpo, entrenar la mente y nutrir el alma. Artes
              marciales de competición, entrenamiento funcional, disciplinas de movimiento
              consciente y terapias holísticas conviven bajo un mismo techo, con un equipo de
              profesionales dedicado a acompañarte en cada paso.
            </p>
            <p className="mt-4 text-cream-dim">
              Creemos en un entrenamiento serio y exigente, pero también en el bienestar, el
              descanso y el equilibrio interior. Por eso nuestra propuesta une fuerza deportiva
              con calma y cuidado personal — dos mundos que en Palace Center encajan de forma
              natural.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {['Exclusividad', 'Profesionalidad', 'Bienestar', 'Equilibrio'].map((value) => (
                <li key={value} className="rounded-xl border border-ink-line bg-ink-raised/60 px-3 py-4 text-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-300">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative" data-delay="140">
            <div className="card-surface relative aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-ink-radial" />
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <blockquote className="text-center">
                  <p className="font-display text-2xl leading-snug text-cream sm:text-3xl">
                    “Cuerpo, mente y alma no son tres caminos distintos.
                    <span className="text-gold-300"> En Palace Center son uno solo.</span>”
                  </p>
                </blockquote>
              </div>
              <div aria-hidden="true" className="absolute inset-6 rounded-xl border border-gold-500/25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
