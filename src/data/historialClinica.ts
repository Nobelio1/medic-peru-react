export interface HistorialClinica {
  id: string;
  nombre: string;
  fecha: string;
  hora: string;
  motivo: string;
}

export const historialClinica: HistorialClinica[] = [
  {
    id: "43224CH",
    nombre: "Hospital Cayetano Heredia",
    fecha: "21/02/2023",
    hora: "16:00 PM",
    motivo:
      "Afección en el oído izquierdo tras meterse a un lago con posibles bacterias infecciosas",
  },
  {
    id: "56789CH",
    nombre: "Hospital Nacional Arzobispo Loayza",
    fecha: "15/03/2023",
    hora: "10:30 AM",
    motivo: "Consulta por dolor abdominal persistente",
  },
  {
    id: "67890CH",
    nombre: "Hospital Edgardo Rebagliati Martins",
    fecha: "28/04/2023",
    hora: "14:15 PM",
    motivo: "Examen de rutina de presión arterial",
  },
  {
    id: "78901CH",
    nombre: "Hospital Guillermo Almenara Irigoyen",
    fecha: "05/05/2023",
    hora: "09:00 AM",
    motivo: "Control postoperatorio de apendicectomía",
  },
  {
    id: "89012CH",
    nombre: "Hospital Nacional Dos de Mayo",
    fecha: "12/06/2023",
    hora: "11:45 AM",
    motivo: "Evaluación por síntomas de infección respiratoria",
  },
  {
    id: "90123CH",
    nombre: "Hospital San José",
    fecha: "19/07/2023",
    hora: "13:20 PM",
    motivo: "Chequeo anual de salud preventivo",
  },
];
