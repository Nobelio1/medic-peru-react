import { dataPrueba } from "../data";

export const getDoctorByDni = ({ dni }: { dni: string }) => {
  dni = dni.trim();

  if (dni.length === 0) return dataPrueba;

  return dataPrueba.filter((doctor) => doctor.dni.includes(dni));
};

export const getOneDoctorByDni = ({ dni }: { dni: string }) => {
  if (!dni) {
    throw new Error("No se encontro doctor con este dni");
  }

  return dataPrueba.find((doctor) => doctor.dni === dni);
};
