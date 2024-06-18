import { TypeSpecialties } from "../../../../data/typeSpecialties";

export const CardService = () => {
  const localService = localStorage.getItem("service");

  if (!localService) {
    throw new Error(
      "Hubo un error al tratar de encontrar el servicio a comprar"
    );
  }

  const service: TypeSpecialties = JSON.parse(localService);

  return (
    <div className="flex my-4 bg-sky-100 rounded-md overflow-hidden">
      <img src={service.image} alt="imagen-servicio" className="w-24" />
      <div className="pl-4 flex flex-col justify-center gap-2">
        <p className="text-sm font-bold text-gray-800">{service.desc}</p>
        <p className="text-lg font-bold text-blue-900">{service.price}</p>
      </div>
    </div>
  );
};
