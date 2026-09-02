export type TeacherFocus = 'cuerpo' | 'artes-marciales' | 'alma' | 'salud';

export type Teacher = {
  slug: string;
  name: string;
  role: string;
  focus: TeacherFocus;
  image: string;
  extra?: string;
  whatsappActivity: string;
  lowRes?: boolean;
};

// Nombres, cargos y datos tal y como aparecen en los carteles del "Equipo Profesores".
// No se han inventado titulaciones, años de experiencia ni biografías adicionales.
export const teachers: Teacher[] = [
  {
    slug: 'feli-garcia-real',
    name: 'Feli García Real',
    role: 'Profesora de Yoga y Terapeuta Holística y Energética',
    focus: 'alma',
    image: '/images/team/feli-garcia-real.webp',
    whatsappActivity: 'Yoga y terapias holísticas',
  },
  {
    slug: 'ana-isabel-toribio',
    name: 'Ana Isabel Toribio',
    role: 'Profesora de Pilates, Zumba y Entrenadora Personal',
    focus: 'cuerpo',
    image: '/images/team/ana-isabel-toribio.webp',
    whatsappActivity: 'Pilates, Zumba y entrenamiento personal',
  },
  {
    slug: 'serafin-egea',
    name: 'Serafín Egea',
    role: 'Maestro de Karate 4º Dan',
    extra: 'Técnico Superior Deportivo · Coach Internacional',
    focus: 'artes-marciales',
    image: '/images/team/serafin-egea.webp',
    whatsappActivity: 'Karate',
  },
  {
    slug: 'juan-carlos-palacios-guerra',
    name: 'Juan Carlos Palacios Guerra',
    role: 'Profesor de Artes Marciales',
    focus: 'artes-marciales',
    image: '/images/team/juan-carlos-palacios.webp',
    whatsappActivity: 'Artes marciales',
  },
  {
    slug: 'ruth-carbonero-marcos',
    name: 'Ruth Carbonero Marcos',
    role: 'Entrenamiento Funcional y Ejercicio Adaptado',
    extra: 'Colegiada nº 69147',
    focus: 'salud',
    image: '/images/team/ruth-carbonero.webp',
    whatsappActivity: 'Entrenamiento funcional / oncológico',
    lowRes: true,
  },
];
