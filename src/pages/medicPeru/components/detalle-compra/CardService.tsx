import { EspecialidadesId } from "../../../../interfaces/especialidades.interface";

interface CardServiceProps {
  user: EspecialidadesId
}

export const CardService = ({user}: CardServiceProps) => {
 

  return (
    <div className="flex my-4 bg-sky-100 rounded-md overflow-hidden">
      <img src={user.imagen_url} alt="imagen-servicio" className="w-24" />
      <div className="pl-4 flex flex-col justify-center gap-2">
        <p className="text-sm font-bold text-gray-800">{user.nombre}</p>
      </div>
    </div>
  );
};
