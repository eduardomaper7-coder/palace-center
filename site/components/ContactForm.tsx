'use client';

import { useRef, useState, type FormEvent } from 'react';

const activities = [
  'Pilates',
  'Yoga',
  'Taichi',
  'Entrenamiento personal',
  'Entrenamiento funcional',
  'Entrenamiento para procesos oncológicos',
  'Karate',
  'Kung Fu',
  'Full Contact',
  'Kickboxing',
  'Jujutsu',
  'Boxeo',
  'Defensa personal',
  'Reiki / terapias holísticas',
  'Otra / no lo sé todavía',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Errors = Record<string, string>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const startedAt = useRef<number>(Date.now());

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const next: Errors = {};
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const privacy = data.get('privacy');

    if (name.length < 2) next.name = 'Indica tu nombre.';
    if (!/^(\+?\d[\d\s().-]{7,14})$/.test(phone)) next.phone = 'Indica un teléfono válido.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Indica un email válido.';
    if (!privacy) next.privacy = 'Debes aceptar la política de privacidad.';

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      setStatus('error');
      return;
    }

    const data = new FormData(form);
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email'),
          activity: data.get('activity'),
          message: data.get('message'),
          privacy: Boolean(data.get('privacy')),
          company: data.get('company'), // honeypot
          startedAt: startedAt.current,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.ok) {
        setErrors(json.errors || {});
        setStatus('error');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="card-surface p-8 text-center">
        <p className="font-display text-2xl text-cream">¡Gracias por escribirnos!</p>
        <p className="mt-3 text-cream-dim">
          Hemos recibido tu solicitud. Te responderemos lo antes posible al teléfono o email que
          nos has indicado.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="card-surface p-6 sm:p-8" aria-describedby="form-status">
      <h3 className="font-display text-2xl text-cream">Solicita información</h3>
      <p className="mt-2 text-sm text-cream-dim">
        Cuéntanos qué te interesa y nos pondremos en contacto contigo.
      </p>

      {/* Honeypot anti-spam: invisible para personas, visible para bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">No rellenar este campo</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass(!!errors.name)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
        </Field>

        <Field label="Teléfono" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputClass(!!errors.phone)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass(!!errors.email)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
        </Field>
      </div>

      <div className="mt-5">
        <label htmlFor="activity" className="mb-1.5 block text-sm font-medium text-cream/90">
          Actividad que te interesa
        </label>
        <select id="activity" name="activity" className={inputClass(false)} defaultValue="">
          <option value="" disabled>
            Selecciona una actividad
          </option>
          {activities.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-cream/90">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass(false)}
          placeholder="Cuéntanos lo que necesites saber..."
        />
      </div>

      <div className="mt-6">
        <label htmlFor="privacy" className="flex cursor-pointer items-start gap-3 text-sm text-cream-dim">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink-line bg-ink text-gold-500 focus:ring-gold-400"
            aria-invalid={!!errors.privacy}
            aria-describedby={errors.privacy ? 'privacy-error' : undefined}
          />
          <span>
            He leído y acepto la{' '}
            <a href="/politica-privacidad" className="underline decoration-gold-500/50 hover:text-gold-200">
              Política de Privacidad
            </a>
            .
          </span>
        </label>
        {errors.privacy && (
          <p id="privacy-error" className="mt-1.5 text-xs text-red-400">
            {errors.privacy}
          </p>
        )}
      </div>

      <div id="form-status" role="alert" className="sr-only" aria-live="polite">
        {status === 'error' && 'Hay errores en el formulario, revisa los campos marcados.'}
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-7 w-full disabled:opacity-60">
        {status === 'submitting' ? 'Enviando…' : 'Solicitar información'}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-muted focus:border-gold-400 focus:outline-none min-h-[48px] ${
    hasError ? 'border-red-400/70' : 'border-ink-line'
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-cream/90">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
