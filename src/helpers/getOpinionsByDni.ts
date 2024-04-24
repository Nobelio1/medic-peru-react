import { medicosConOpiniones } from "../data/opininoes";
import { idOpinions } from "../interfaces/medicPeru.interface";

export const getOpinionsByDni = ({ dni }: { dni: string }): idOpinions => {
  if (!dni) {
    throw new Error("No se encontro dni");
  }

  return medicosConOpiniones.find((opinion) => opinion.id === dni)!;
};
