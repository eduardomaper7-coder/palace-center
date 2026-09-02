# Palace Center — Sitio Web

Sitio web oficial de **Palace Center** (Cuerpo · Mente · Alma), centro de artes marciales,
entrenamiento, pilates, yoga y terapias holísticas en Leganés (Madrid).

Construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, mobile-first,
optimizado para SEO local, accesibilidad y rendimiento.

## Requisitos

- Node.js 18.18 o superior (recomendado 20 LTS)
- npm 9+

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Compilar para producción

```bash
npm run build
npm start
```

## Estructura del proyecto

```
app/                Rutas (App Router): home, páginas legales, sitemap.xml, robots.txt, API del formulario
components/         Componentes de UI (Header, Hero, Actividades, Equipo, Contacto, etc.)
data/                Contenido separado del código: equipo, actividades, horarios, tarifas, datos de contacto
public/images/       Fotografías reales del centro y del equipo, y logotipo recortado de los carteles
```

Para actualizar contenido (profesores, horarios, precios, teléfonos, textos) **no hace falta
tocar los componentes**: basta con editar los archivos de `data/`.

- `data/site.ts` — nombre, dirección, teléfonos, email, enlaces de mapa y WhatsApp
- `data/team.ts` — equipo de profesores
- `data/activities.ts` — categorías de actividades y pilares Cuerpo/Mente/Alma
- `data/schedule.ts` — horarios generales y del programa de entrenamiento funcional/oncológico, y tarifas

## Despliegue

El proyecto está listo para desplegarse en [Vercel](https://vercel.com) (recomendado, es el
fabricante de Next.js) con un solo clic, o en cualquier hosting compatible con Node.js /
Next.js (Netlify, Railway, un VPS con `next start`, etc.). No requiere base de datos.

## ⚠️ Pendiente antes de publicar

Este proyecto se ha generado a partir de los carteles/material gráfico proporcionado. Antes de
publicar la web en producción falta:

1. **Foto de Ruth Carbonero Marcos.** La única fuente disponible era una miniatura circular muy
   pequeña dentro de uno de los carteles (`public/images/team/ruth-carbonero.webp`, 174×138 px).
   Se recomienda una fotografía en mayor resolución.
2. **Datos fiscales/legales.** `app/aviso-legal/page.tsx` y `app/politica-privacidad/page.tsx`
   contienen marcadores `[PENDIENTE DE CONFIRMAR]` para la razón social, el NIF/CIF y el
   registro mercantil. Hay que sustituirlos por los datos reales (idealmente revisados por un
   asesor legal) antes de publicar.
4. **Dominio real.** `data/site.ts` usa `https://www.palacecenter.es` como marcador de posición
   para las metaetiquetas (Open Graph, canonical, sitemap). Sustitúyelo por el dominio
   definitivo cuando se contrate.
5. **Envío del formulario.** El formulario de contacto (`components/ContactForm.tsx`) llama a
   `app/api/contact/route.ts`, que valida los datos y aplica protección anti-spam
   (honeypot + tiempo mínimo de relleno), pero **todavía no envía el email**: el punto exacto
   donde conectar un proveedor (Resend, SMTP, Formspree, etc.) está señalado con un comentario
   `TODO` en ese archivo.
6. **Fecha de la Gran Inauguración.** El cartel indica "3 de septiembre" sin año. No se ha
   incluido ese dato en la web para evitar mostrar una fecha incorrecta: confirmar el año antes
   de añadir un aviso o contador de inauguración.
7. **Email de contacto.** Los carteles y el material proporcionado usan
   `info@sietenotasbaila.com` (dominio de otra marca/actividad). Se ha mantenido tal cual por
   ser el dato facilitado — confirmar si es el correo definitivo o si debe crearse uno propio
   (p. ej. `info@palacecenter.es`).
8. **Redes sociales.** No se ha facilitado Instagram/Facebook; los campos están vacíos en
   `data/site.ts` (`social`) y no se muestran enlaces en el sitio. Añádelos cuando existan.
9. **Banner de cookies.** El sitio, tal como se entrega, no instala cookies no esenciales (solo
   un mapa embebido de Google, que puede fijar sus propias cookies). Si en el futuro se añade
   analítica (Google Analytics, Meta Pixel, etc.) habrá que implementar un banner de
   consentimiento previo.

## Accesibilidad y rendimiento

- Estructura semántica con encabezados jerarquizados (H1 único en portada, H2 por sección).
- Navegación completa por teclado, foco visible en todos los elementos interactivos.
- Contraste AA sobre fondo oscuro (dorado claro `#e6cd7e` / crema `#f6f2e9` sobre negro `#0a0908`).
- `aria-label`, `aria-describedby` y estados de error accesibles en el formulario.
- Imágenes con `alt` descriptivo, `next/image` con `sizes` y carga diferida automática.
- Tipografías autoalojadas con `next/font` (sin peticiones externas en tiempo de ejecución).
- Animaciones sutiles que respetan `prefers-reduced-motion`.
