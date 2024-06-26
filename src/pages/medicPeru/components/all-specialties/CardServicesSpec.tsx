import { useNavigate } from "react-router-dom";
import { EspecialidadesId } from "../../../../interfaces/especialidades.interface";

interface CardServicesSpecProps {
  service: EspecialidadesId;
}

export const CardServicesSpec = ({ service }: CardServicesSpecProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between  w-full h-auto bg-slate-100 rounded-md overflow-hidden  ">
      <button
          onClick={() =>
            navigate(`/medic-peru/specialties/servicie/${service.id_especialidad}/${service.id_servicios}`)
          }
        >
      <img
        src={service.imagen_url}
        alt="imagen-operacion"
        className="w-full h-auto"
      />
      <div className="py-2">
        <div>
          <p className="text-md font-medium text-center">{service.nombre}</p>
        </div>
      </div>
      </button>
    </div>
  );
};
