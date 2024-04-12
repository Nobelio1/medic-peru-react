import { dataPrueba } from "../data";

export const getDoctorByDni = ({ dni }: { dni: string }) => {
  dni = dni.trim();

  if (dni.length === 0) return dataPrueba;

  return dataPrueba.filter((doctor) => doctor.dni.includes(dni));
};
