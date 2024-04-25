export interface Citas {
  name: string;
  idCita: string;
  idDoctor: string;
  especialidad: string;
  fecha: string;
  hora: string;
  tiempo: string;
  estado: string;
  clinicalCenter: string;
}

export const dataCitas: Citas[] = [
  {
    name: "Juan Perez",
    idCita: "43224CH",
    idDoctor: "987654321",
    especialidad: "Cardiología",
    fecha: "01/02/2024",
    hora: "10:00",
    tiempo: "30 minutos",
    estado: "Confirmada",
    clinicalCenter: "Hospital Cayetano Heredia",
  },
  {
    name: "María García",
    idCita: "56789CH",
    idDoctor: "12348765",
    especialidad: "Pediatría",
    fecha: "01/04/2024",
    hora: "14:30",
    tiempo: "45 minutos",
    estado: "Confirmada",
    clinicalCenter: "Hospital Nacional Arzobispo Loayza",
  },
  {
    name: "Carlos Martínez",
    idCita: "67890CH",
    idDoctor: "135792468",
    especialidad: "Oftalmología",
    fecha: "01/03/2024",
    hora: "09:30",
    tiempo: "20 minutos",
    estado: "Confirmada",
    clinicalCenter: "Hospital Edgardo Rebagliati Martins",
  },
  {
    name: "Laura Fernández",
    idCita: "78901CH",
    idDoctor: "246813579",
    especialidad: "Pediatría",
    fecha: "01/02/2024",
    hora: "15:15",
    tiempo: "30 minutos",
    estado: "Pendiente",
    clinicalCenter: "Hospital Guillermo Almenara Irigoyen",
  },
  {
    name: "Gabriela Rodríguez",
    idCita: "89012CH",
    idDoctor: "753951486",
    especialidad: "Ortopedia",
    fecha: "15/03/2024",
    hora: "12:45",
    tiempo: "40 minutos",
    estado: "Confirmada",
    clinicalCenter: "Hospital Nacional Dos de Mayo",
  },
  {
    name: "Luis López",
    idCita: "90123CH",
    idDoctor: "159263487",
    especialidad: "Ginecología",
    fecha: "15/03/2024",
    hora: "08:00",
    tiempo: "30 minutos",
    estado: "Pendiente",
    clinicalCenter: "Hospital San José",
  },
];
