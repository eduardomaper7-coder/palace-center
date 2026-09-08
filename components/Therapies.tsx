import { therapies } from '@/data/therapies';
import { waLink } from '@/data/site';

export default function Therapies() {
  return (
    <section id="terapias" className="py-20 sm:py-28" aria-labelledby="therapies-title">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Con Feli García Real</span>
          <h2 id="therapies-title" className="section-title mt-4">Un espacio para escucharte</h2>
          <div className="gold-rule mx-auto mt-6" />
          <p className="mt-6 text-cream-dim">Conoce las propuestas de acompañamiento holístico y energético de Feli, con atención individual y tiempo para ti.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {therapies.map((therapy) => (
            <article key={therapy.title} className="card-surface reveal flex flex-col p-7">
              <h3 className="font-display text-2xl text-cream">{therapy.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-dim">{therapy.description}</p>
              <p className="mt-4 text-sm leading-relaxed text-cream-dim">{therapy.session}</p>
              <a href={waLink(`Hola, me gustaría recibir información sobre ${therapy.title.toLowerCase()} con Feli García Real.`)} target="_blank" rel="noopener noreferrer" className="mt-auto pt-6 text-sm font-semibold text-gold-300 hover:text-gold-200">Consultar con Feli →</a>
            </article>
          ))}
        </div>
        <p className="reveal mx-auto mt-8 max-w-3xl text-center text-xs text-cream-muted">Estas prácticas de bienestar y exploración personal no constituyen un diagnóstico ni un tratamiento médico o psicológico.</p>
      </div>
    </section>
  );
}
