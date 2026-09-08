export type ActivityCategory = {
  id: string;
  title: string;
  pillar: 'cuerpo' | 'mente' | 'alma' | 'salud';
  description: string;
  items: string[];
  image?: string;
};

// Actividades de los carteles proporcionados y actualizaciones del centro.
export const activityCategories: ActivityCategory[] = [
  {
    id: 'cuerpo-mente',
    title: 'Cuerpo y Mente',
    pillar: 'cuerpo',
    description:
      'Disciplinas de movimiento consciente y entrenamiento que fortalecen el cuerpo y calman la mente.',
    items: ['Pilates', 'Readaptación corporal', 'Entrenamiento funcional', 'Yoga', 'Taichi', 'Entrenamientos Personales'],
  },
  {
    id: 'artes-marciales',
    title: 'Artes Marciales',
    pillar: 'cuerpo',
    description:
      'Un equipo con recorrido en competición y docencia, para todos los niveles, desde la iniciación hasta el alto rendimiento.',
    items: ['Karate', 'Kung Fu', 'Full Contact', 'Kickboxing', 'Jiu-jitsu', 'Boxeo', 'Defensa Personal', 'Artes marciales en familia'],
    image: '/images/brand/hero-artes-marciales.jpg',
  },
  {
    id: 'alma-energia',
    title: 'Alma y Energía',
    pillar: 'alma',
    description:
      'Espacios de calma y trabajo energético que acompañan el equilibrio interior.',
    items: ['Terapia floral', 'Limpieza energética con péndulo hebreo', 'Constelaciones familiares', 'Reiki', 'Registros Akáshicos', 'Sanaciones', 'Regresiones', 'Limpiezas Energéticas'],
  },
  {
    id: 'salud-rehabilitacion',
    title: 'Salud y Rehabilitación',
    pillar: 'salud',
    description:
      'Ejercicio adaptado y acompañado, orientado al bienestar, la movilidad y la calidad de vida.',
    items: [
      'Entrenamiento adaptado para procesos oncológicos',
      'Acompañamiento durante y después de quimioterapia',
      'Ejercicio adaptado tras prótesis u operaciones',
      'Entrenadores especializados',
    ],
  },
];

export const pillars = [
  {
    id: 'cuerpo',
    title: 'Cuerpo',
    text: 'Entrenamiento, artes marciales y disciplinas de movimiento para ganar fuerza, resistencia y movilidad a cualquier nivel.',
  },
  {
    id: 'mente',
    title: 'Mente',
    text: 'Espacios de concentración, disciplina y equilibrio que acompañan cada práctica, dentro y fuera del tatami.',
  },
  {
    id: 'alma',
    title: 'Alma',
    text: 'Yoga, reiki y terapias holísticas para el bienestar interior, en un entorno sereno pensado para el cuidado personal.',
  },
] as const;
