import { useNavigate } from "react-router-dom";
import { Especialidades } from "../../../../interfaces/especialidades.interface";

interface CardSpecialtiesProps {
  specialties: Especialidades;
}

export const CardSpecialties = ({ specialties }: CardSpecialtiesProps) => {
  const nagivate = useNavigate();

  return (
    <button
      onClick={() => nagivate(`/medic-peru/specialties/list/${specialties.id_especialidad}`)}
      className="flex flex-col items-center gap-2 m-2 cursor-pointer py-2   hover:border-2 rounded-md "
    >
      <img
        src={specialties.imagen_url}
        alt="icon-especialidad"
        className="w-8 h-8 my-2"
      />
      <p className="text-lg font-medium hover:text-blue-400">
        {specialties.nombre}
      </p>
    </button>
  );
};
