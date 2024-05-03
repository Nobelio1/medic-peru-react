import { servicesSpecialties, TypeSpecialties } from "../data/typeSpecialties";

export const getServicesSpcByUd = ({
  id,
}: {
  id: string;
}): TypeSpecialties[] => {
  if (!id) throw new Error("El id ingresado no existe");

  const dataService = servicesSpecialties.find(
    (servicio) => servicio.codigo === id
  );

  if (!dataService) throw new Error("Fallo al traer la data");

  return dataService.services;
};
