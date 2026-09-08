export type TeacherFocus = 'cuerpo' | 'artes-marciales' | 'alma' | 'salud';

export type Teacher = {
  slug: string;
  name: string;
  role: string;
  focus: TeacherFocus;
  image?: string;
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
    image: '/images/team/feli-garcia-real.png',
    whatsappActivity: 'Yoga y terapias holísticas',
  },
  {
    slug: 'ana-isabel-toribio',
    name: 'Ana Isabel Toribio',
    role: 'Profesora de Pilates, Zumba y Entrenadora Personal',
    focus: 'cuerpo',
    image: '/images/team/ana-isabel-toribio.png',
    whatsappActivity: 'Pilates, Zumba y entrenamiento personal',
  },
  {
    slug: 'serafin-egea',
    name: 'Serafín Egea',
    role: 'Maestro de Karate 4º Dan',
    extra: 'Técnico Superior Deportivo · Coach Internacional',
    focus: 'artes-marciales',
    image: '/images/team/serafin-egea.png',
    whatsappActivity: 'Karate',
  },
  {
    slug: 'juan-carlos-palacios-guerra',
    name: 'Juan Carlos Palacios Guerra',
    role: 'Profesor de Artes Marciales',
    focus: 'artes-marciales',
    image: '/images/team/juan-carlos-palacios.png',
    whatsappActivity: 'Artes marciales',
  },
  {
    slug: 'ruth-carbonero-marcos',
    name: 'Ruth Carbonero Marcos',
    role: 'Entrenamiento Funcional y Ejercicio Adaptado',
    extra: 'Colegiada nº 69147',
    focus: 'salud',
    image: '/images/team/ruth-carbonero-marcos.png',
    whatsappActivity: 'Entrenamiento funcional / oncológico',
  },
];
