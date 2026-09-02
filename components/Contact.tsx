import { site, waLink, defaultWhatsappMessage } from '@/data/site';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-20 sm:py-28 bg-ink-soft/40" aria-labelledby="contact-title">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="eyebrow justify-center">Ubicación y contacto</span>
          <h2 id="contact-title" className="section-title mt-4">
            Visítanos en Leganés
          </h2>
          <div className="gold-rule mx-auto mt-6" />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="reveal flex flex-col gap-6">
            <div className="card-surface p-7 sm:p-8">
              <address className="not-italic">
                <p className="font-display text-2xl text-cream">{site.name}</p>
                <p className="mt-3 text-cream-dim">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}, {site.address.region}
                  <br />
                  {site.address.country}
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  <li>
                    <a href={`tel:${site.phone.href}`} className="text-cream/90 hover:text-gold-300">
                      Teléfono: {site.phone.display}
                    </a>
                  </li>
                  <li>
                    <a
                      href={waLink(defaultWhatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/90 hover:text-gold-300"
                    >
                      WhatsApp / Móvil: {site.mobile.display}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="text-cream/90 hover:text-gold-300">
                      {site.email}
                    </a>
                  </li>
                </ul>
              </address>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={site.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Cómo llegar
                </a>
                <a
                  href={waLink(defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="card-surface overflow-hidden">
              <iframe
                title={`Mapa de ubicación de ${site.name} en ${site.address.street}, ${site.address.city}`}
                src={site.mapsEmbedSrc}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[15%]"
              />
            </div>
          </div>

          <div className="reveal" data-delay="120">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
