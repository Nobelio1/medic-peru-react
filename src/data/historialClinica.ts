export interface HistorialClinica {
  id: string;
  nombre: string;
  fecha: string;
  hora: string;
  motivo: string;
  sala: string;
  detalleClinico: string;
  recetario: Recetario[];
}

export interface Recetario {
  nombre: string;
  tiempoCon: string;
  CantPorDia: string;
}

export const historialClinica: HistorialClinica[] = [
  {
    id: "43224CH",
    nombre: "Hospital Cayetano Heredia",
    fecha: "21/02/2023",
    hora: "16:00 PM",
    motivo:
      "Afección en el oído izquierdo tras meterse a un lago con posibles bacterias infecciosas",
    sala: "A",
    detalleClinico:
      "El paciente presentaba inflamación en el oído izquierdo y molestias. Se le realizó un examen físico detallado y se prescribió un tratamiento de antibióticos para tratar la posible infección bacteriana.",
    recetario: [
      {
        nombre: "Antibiótico",
        tiempoCon: "7 días",
        CantPorDia: "1 vez cada 12 horas",
      },
      {
        nombre: "Analgésico",
        tiempoCon: "5 días",
        CantPorDia: "1 vez cada 8 horas",
      },
    ],
  },
  {
    id: "56789CH",
    nombre: "Hospital Nacional Arzobispo Loayza",
    fecha: "15/03/2023",
    hora: "10:30 AM",
    motivo: "Consulta por dolor abdominal persistente",
    sala: "B",
    detalleClinico:
      "El paciente se quejaba de dolor abdominal persistente en la parte inferior derecha. Se realizaron exámenes de laboratorio y se le recomendó reposo y seguimiento.",
    recetario: [
      {
        nombre: "Analgésico",
        tiempoCon: "5 días",
        CantPorDia: "1 vez cada 8 horas",
      },
    ],
  },
  {
    id: "67890CH",
    nombre: "Hospital Edgardo Rebagliati Martins",
    fecha: "28/04/2023",
    hora: "14:15 PM",
    motivo: "Examen de rutina de presión arterial",
    sala: "C",
    detalleClinico:
      "El paciente se presentó para su examen de rutina de presión arterial. Se realizaron múltiples mediciones y se le aconsejó seguir una dieta baja en sodio.",
    recetario: [
      {
        nombre: "Analgésico",
        tiempoCon: "5 días",
        CantPorDia: "1 vez cada 8 horas",
      },
      {
        nombre: "Analgésico Forte",
        tiempoCon: "3 días",
        CantPorDia: "1 vez cada 24 horas",
      },
      {
        nombre: "Analgésico Inyectable",
        tiempoCon: "5 días",
        CantPorDia: "2 vez cada 12 horas",
      },
    ],
  },
  {
    id: "78901CH",
    nombre: "Hospital Guillermo Almenara Irigoyen",
    fecha: "05/05/2023",
    hora: "09:00 AM",
    motivo: "Control postoperatorio de apendicectomía",
    sala: "D",
    detalleClinico:
      "El paciente se presentó para el control postoperatorio después de una apendicectomía. La cicatrización estaba progresando adecuadamente y se le dio de alta.",
    recetario: [
      {
        nombre: "Analgésico",
        tiempoCon: "5 días",
        CantPorDia: "1 vez cada 8 horas",
      },
    ],
  },
  {
    id: "89012CH",
    nombre: "Hospital Nacional Dos de Mayo",
    fecha: "12/06/2023",
    hora: "11:45 AM",
    motivo: "Evaluación por síntomas de infección respiratoria",
    sala: "E",
    detalleClinico:
      "El paciente presentaba síntomas de infección respiratoria como tos y fiebre. Se le recetaron medicamentos antivirales y se le recomendó reposo.",
    recetario: [
      {
        nombre: "Antiviral",
        tiempoCon: "5 días",
        CantPorDia: "1 vez cada 12 horas",
      },
    ],
  },
  {
    id: "90123CH",
    nombre: "Hospital San José",
    fecha: "19/07/2023",
    hora: "13:20 PM",
    motivo: "Chequeo anual de salud preventivo",
    sala: "F",
    detalleClinico:
      "El paciente llegó para su chequeo anual. Se le realizaron múltiples análisis para descartar posibles malestares y se asignó un psicólogo para su salud mental.",
    recetario: [
      {
        nombre: "Vitamina D",
        tiempoCon: "30 días",
        CantPorDia: "1 vez al día",
      },
      {
        nombre: "Calcio",
        tiempoCon: "30 días",
        CantPorDia: "2 veces al día",
      },
      {
        nombre: "Ácido Fólico",
        tiempoCon: "30 días",
        CantPorDia: "1 vez al día",
      },
    ],
  },
];
