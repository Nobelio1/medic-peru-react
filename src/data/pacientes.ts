export interface DataPaciente {
  id: string;
  nombre: string;
  consulta: string;
  dni: string;
  celular: string;
  ubicacion: string;
  fecha: string;
  tiempoCita: string;
}

export const dataPacientes: DataPaciente[] = [
  {
    id: "1",
    nombre: "Antoni Perez",
    consulta: "Vacunacion",
    dni: "87654312",
    celular: "999888777",
    ubicacion: "Lima-Comas",
    fecha: "14/01/2022",
    tiempoCita: "30 minutos",
  },
  {
    id: "2",
    nombre: "María Rodriguez",
    consulta: "Control de embarazo",
    dni: "76543219",
    celular: "666555444",
    ubicacion: "Lima-Surco",
    fecha: "22/03/2022",
    tiempoCita: "45 minutos",
  },
  {
    id: "3",
    nombre: "Juan González",
    consulta: "Odontología",
    dni: "98765432",
    celular: "333222111",
    ubicacion: "Lima-Lince",
    fecha: "05/05/2022",
    tiempoCita: "60 minutos",
  },
  {
    id: "4",
    nombre: "Ana Martínez",
    consulta: "Pediatría",
    dni: "65432198",
    celular: "111000999",
    ubicacion: "Lima-Miraflores",
    fecha: "18/06/2022",
    tiempoCita: "40 minutos",
  },
  {
    id: "5",
    nombre: "Carlos Sánchez",
    consulta: "Nutrición",
    dni: "12345678",
    celular: "888777666",
    ubicacion: "Lima-San Borja",
    fecha: "30/07/2022",
    tiempoCita: "50 minutos",
  },
  {
    id: "6",
    nombre: "Luisa López",
    consulta: "Cardiología",
    dni: "34567891",
    celular: "777666555",
    ubicacion: "Lima-Surquillo",
    fecha: "12/08/2022",
    tiempoCita: "55 minutos",
  },
  {
    id: "7",
    nombre: "Elena Pérez",
    consulta: "Dermatología",
    dni: "56789123",
    celular: "666555444",
    ubicacion: "Lima-San Isidro",
    fecha: "25/09/2022",
    tiempoCita: "35 minutos",
  },
  {
    id: "8",
    nombre: "Javier García",
    consulta: "Psicología",
    dni: "78912345",
    celular: "555444333",
    ubicacion: "Lima-Chorrillos",
    fecha: "07/10/2022",
    tiempoCita: "50 minutos",
  },
  {
    id: "9",
    nombre: "Patricia Flores",
    consulta: "Ginecología",
    dni: "23456789",
    celular: "444333222",
    ubicacion: "Lima-San Miguel",
    fecha: "19/11/2022",
    tiempoCita: "45 minutos",
  },
  {
    id: "10",
    nombre: "Roberto Martinez",
    consulta: "Oftalmología",
    dni: "45678912",
    celular: "333222111",
    ubicacion: "Lima-Pueblo Libre",
    fecha: "03/12/2022",
    tiempoCita: "40 minutos",
  },
  {
    id: "11",
    nombre: "Laura Díaz",
    consulta: "Fisioterapia",
    dni: "89123456",
    celular: "222111000",
    ubicacion: "Lima-Barranco",
    fecha: "15/01/2023",
    tiempoCita: "60 minutos",
  },
];
