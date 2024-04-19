import { historialClinica } from "../data/historialClinica";

export const getCitaById = ({ id }: { id: string }) => {
  id = id.trim();

  if (id.length === 0) return historialClinica;

  return historialClinica.filter((visita) => visita.id.includes(id));
};
