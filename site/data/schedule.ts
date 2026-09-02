export const generalSchedule = [
  {
    days: 'Lunes a Viernes',
    ranges: [
      { label: 'Mañanas', hours: '10:00 – 14:00' },
      { label: 'Tardes', hours: '16:30 – 21:30' },
    ],
  },
  {
    days: 'Sábados',
    ranges: [{ label: 'Mañanas', hours: '10:00 – 13:30' }],
  },
];

// Horario específico del programa de Entrenamiento Funcional / Oncológico,
// impartido por Ruth Carbonero Marcos (colegiada 69147), según el cartel específico.
export const functionalSchedule = [
  {
    label: 'Mañana',
    days: 'Lunes, martes, miércoles y jueves',
    hours: '10:00 – 11:00',
  },
  {
    label: 'Tarde',
    days: 'Martes y jueves',
    hours: '17:00 – 18:00',
  },
];

export const functionalPricing = [
  { freq: '1 día / semana', price: '20 €', period: '/ mes' },
  { freq: '2 días / semana', price: '30 €', period: '/ mes' },
  { freq: '3 días / semana', price: '45 €', period: '/ mes' },
];
