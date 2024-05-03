import { useNavigate } from "react-router-dom";
import { Specialties } from "../../../../data/specialties";

interface CardSpecialtiesProps {
  specialties: Specialties;
}

export const CardSpecialties = ({ specialties }: CardSpecialtiesProps) => {
  const nagivate = useNavigate();

  return (
    <button
      onClick={() => nagivate(`/medic-peru/specialties/list/${specialties.id}`)}
      className="flex flex-col items-center gap-4 m-2 cursor-pointer py-2 px-6 hover:border-blue-300 hover:border-2 rounded-md "
    >
      <img
        src={specialties.image}
        alt="icon-especialidad"
        className="w-8 h-8 my-2"
      />
      <p className="text-lg font-medium hover:text-blue-400">
        {specialties.onTitle}
      </p>
      <p className="text-start text-sm">{specialties.content}</p>
    </button>
  );
};
