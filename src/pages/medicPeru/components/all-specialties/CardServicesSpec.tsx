import { BsChevronCompactRight } from "react-icons/bs";
import { TypeSpecialties } from "../../../../data/typeSpecialties";
import { useNavigate } from "react-router-dom";

interface CardServicesSpecProps {
  service: TypeSpecialties;
  type: string;
}

export const CardServicesSpec = ({ service, type }: CardServicesSpecProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between w-full h-auto bg-slate-100 rounded-md overflow-hidden  ">
      <img
        src={service.image}
        alt="imagen-operacion"
        className="w-full h-auto"
      />
      <div className="flex mt-2 items-center px-3 justify-between ">
        <div>
          <p className="text-md font-medium">{service.desc}</p>
          <p className="mb-4 text-lg font-medium text-blue-400">
            {service.price}
          </p>
        </div>
        <button
          onClick={() =>
            navigate(`/medic-peru/specialties/servicie/${type}/${service.id}`)
          }
        >
          <BsChevronCompactRight size={25} />
        </button>
      </div>
    </div>
  );
};
