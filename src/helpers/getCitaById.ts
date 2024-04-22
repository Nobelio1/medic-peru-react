import { HistorialClinica, historialClinica } from "../data/historialClinica";

export const getCitaById = ({ id }: { id: string }) => {
  id = id.trim();

  if (id.length === 0) return historialClinica;

  return historialClinica.filter((visita) => visita.id.includes(id));
};

export const getCitaDetalleById = ({
  id,
}: {
  id: string;
}): HistorialClinica => {
  if (!id) {
    throw new Error("No se encontro id");
  }

  return historialClinica.find((visita) => visita.id === id)!;
};
