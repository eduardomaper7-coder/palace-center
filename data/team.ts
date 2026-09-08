export type TeacherFocus = 'cuerpo' | 'artes-marciales' | 'alma' | 'salud';

export type Teacher = {
  slug: string;
  name: string;
  role: string;
  focus: TeacherFocus;
  image?: string;
  extra?: string;
  qualifications?: string[];
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
    qualifications: [
      'Licenciada en CAFYD (Ciencias de la Actividad Física y del Deporte), en alto rendimiento.',
      'Máster en Readaptación y Prevención de Lesiones.',
    ],
    focus: 'salud',
    image: '/images/team/ruth-carbonero-marcos.png',
    whatsappActivity: 'Entrenamiento funcional / oncológico',
  },
  {
    slug: 'jose-javier-ofretorio',
    name: 'José Javier Ofretorio',
    role: 'Profesor de Boxeo y Entrenador Personal',
    focus: 'artes-marciales',
    image: '/images/team/jose-javier-ofretorio.png',
    whatsappActivity: 'Boxeo y entrenamiento personal',
  },
  {
    slug: 'jose-manuel-urteaga',
    name: 'José Manuel Urteaga',
    role: 'Profesor de Pilates y Readaptación Corporal',
    extra: 'Instructor de Jiu-jitsu y Entrenamiento Funcional',
    focus: 'artes-marciales',
    whatsappActivity: 'Pilates, readaptación corporal, jiu-jitsu y entrenamiento funcional con José Manuel Urteaga',
  },
];
