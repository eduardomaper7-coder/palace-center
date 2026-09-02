import { NextRequest, NextResponse } from 'next/server';

/**
 * Endpoint de recepción del formulario de contacto.
 *
 * TODO antes de publicar: conectar con un proveedor de email/backend real,
 * por ejemplo:
 *   - Resend (https://resend.com) + su SDK de Node
 *   - Nodemailer con SMTP corporativo
 *   - Reenvío a un servicio de formularios (Formspree, Getform, etc.)
 *
 * De momento este endpoint valida los datos, aplica una protección
 * anti-spam básica (honeypot + tiempo mínimo de relleno) y responde con
 * éxito para que el frontend pueda probarse de extremo a extremo. Sustituye
 * el bloque marcado como "// TODO: enviar email" por el envío real.
 */

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  activity?: string;
  message?: string;
  privacy?: boolean;
  company?: string; // honeypot: debe llegar vacío
  startedAt?: number; // timestamp en el que se mostró el formulario
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/[\s().-]/g, '');
  return /^(\+?\d{9,15})$/.test(digits);
}

export async function POST(req: NextRequest) {
  let data: ContactPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'JSON inválido.' }, { status: 400 });
  }

  // Honeypot: si este campo (oculto para personas) llega relleno, es un bot.
  if (data.company && data.company.trim().length > 0) {
    return NextResponse.json({ ok: true }); // Respondemos OK sin procesar, para no delatar el filtro.
  }

  // Tiempo mínimo de relleno: los bots suelen enviar el formulario en milisegundos.
  if (data.startedAt && Date.now() - data.startedAt < 1500) {
    return NextResponse.json({ ok: false, error: 'Envío demasiado rápido, inténtalo de nuevo.' }, { status: 400 });
  }

  const errors: Record<string, string> = {};
  const name = (data.name ?? '').trim();
  const phone = (data.phone ?? '').trim();
  const email = (data.email ?? '').trim();
  const message = (data.message ?? '').trim();

  if (name.length < 2) errors.name = 'Indica tu nombre.';
  if (!phone || !isValidPhone(phone)) errors.phone = 'Indica un teléfono válido.';
  if (!email || !isValidEmail(email)) errors.email = 'Indica un email válido.';
  if (!data.privacy) errors.privacy = 'Debes aceptar la política de privacidad.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO: enviar email con los datos (name, phone, email, activity, message)
  // a info@sietenotasbaila.com usando el proveedor elegido.
  // eslint-disable-next-line no-console
  console.log('[contacto] Nueva solicitud de información', {
    name,
    phone,
    email,
    activity: data.activity,
    message,
  });

  return NextResponse.json({ ok: true });
}
