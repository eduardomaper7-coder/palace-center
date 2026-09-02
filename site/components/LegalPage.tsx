import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="contenido" className="pt-32 pb-24">
        <div className="container-x max-w-3xl">
          <h1 className="section-title">{title}</h1>
          <p className="mt-3 text-sm text-cream-muted">Última actualización: {updated}</p>
          <div className="gold-rule mt-6" />
          <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-cream-dim [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-cream [&_strong]:text-cream [&_a]:text-gold-300 [&_a]:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
