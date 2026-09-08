export const familyActivity = {
  title: 'Artes marciales en familia',
  teacher: 'Juan Carlos Palacios Guerra',
  days: 'Lunes, miércoles y viernes',
  hours: '18:00 – 19:00',
};

export const classSchedules = [
  {
    activity: 'Jiu-jitsu y entrenamiento funcional',
    teacher: 'José Manuel Urteaga',
    sessions: [
      { group: 'Mañana', days: 'Lunes, miércoles y viernes', hours: '08:30 – 09:30' },
      { group: 'Tarde', days: 'Lunes, miércoles y viernes', hours: '17:00 – 18:00' },
      { group: 'Noche', days: 'Lunes, miércoles y viernes', hours: '21:45 – 22:45' },
    ],
  },
  {
    activity: 'Pilates y readaptación corporal',
    teacher: 'José Manuel Urteaga',
    sessions: [
      { group: 'Primera hora', days: 'Martes y jueves', hours: '08:30 – 09:30' },
      { group: 'Mediodía', days: 'Lunes, martes, miércoles y jueves', hours: '12:30 – 13:30' },
      { group: 'Tarde', days: 'Lunes, martes, miércoles y jueves', hours: '16:00 – 17:00' },
      { group: 'Noche', days: 'Martes y jueves', hours: '21:45 – 22:45' },
      { group: 'Fin de semana', days: 'Sábados y domingos', hours: '11:00 – 12:00' },
    ],
  },
  {
    activity: 'Pilates',
    teacher: 'Ana Isabel Toribio',
    sessions: [
      { group: 'Clases de Pilates', days: 'Martes y jueves', hours: '19:15 – 20:15' },
    ],
  },
  {
    activity: 'Karate',
    teacher: 'Serafín Egea',
    sessions: [
      { group: 'Infantil · 9–10 años', days: 'Martes y jueves', hours: '17:00 – 18:00' },
      { group: 'Adolescentes', days: 'Martes y jueves', hours: '18:00 – 19:00' },
      { group: 'Adultos', days: 'Martes y jueves', hours: '20:30 – 21:30' },
    ],
  },
  {
    activity: 'Artes marciales',
    teacher: 'Juan Carlos Palacios Guerra',
    sessions: [
      { group: 'Mañanas', days: 'Lunes, miércoles y viernes', hours: '10:00 – 11:00' },
      { group: 'Padres e hijos', days: familyActivity.days, hours: familyActivity.hours },
      { group: 'Adultos', days: 'Lunes, miércoles y viernes', hours: '20:30 – 21:30' },
      { group: 'Infantil · 4–10 años', days: 'Martes y jueves', hours: '17:00 – 18:00' },
      { group: 'Adolescentes y adultos', days: 'Martes y jueves', hours: '18:00 – 19:00' },
    ],
  },
  {
    activity: 'Boxeo',
    teacher: 'José Javier Ofretorio · Ofre',
    sessions: [
      { group: 'Clases de boxeo', days: 'Lunes a viernes', hours: '20:00 – 21:30' },
    ],
  },
];

export const generalSchedule = [
  {
    days: 'Lunes a jueves',
    ranges: [
      { label: 'Mañanas', hours: '08:30 – 14:00' },
      { label: 'Tardes', hours: '16:00 – 22:45' },
    ],
  },
  {
    days: 'Viernes',
    ranges: [
      { label: 'Mañanas', hours: '08:30 – 14:00' },
      { label: 'Tardes', hours: '16:30 – 22:45' },
    ],
  },
  {
    days: 'Sábados',
    ranges: [{ label: 'Mañanas', hours: '10:00 – 13:30' }],
  },
  {
    days: 'Domingos',
    ranges: [{ label: 'Mañanas', hours: '11:00 – 12:00' }],
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
