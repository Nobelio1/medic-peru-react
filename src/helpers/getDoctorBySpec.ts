import { dataPrueba } from "../data";

export const getDoctorBySpec = ({ spec }: { spec: string }) => {
  if (spec.length === 0) return dataPrueba;

  return dataPrueba.filter((doctor) => doctor.especialidad === spec);
};
