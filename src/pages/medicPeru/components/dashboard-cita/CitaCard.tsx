import { UserPersona } from "../../../../assets";
import { SlArrowRight } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { DataPaciente } from "../../../../data/pacientes";

interface CitaCardProps {
  paciente: DataPaciente;
}

export const CitaCard = ({ paciente }: CitaCardProps) => {
  const navigate = useNavigate();

  const onPacienteHistory = () => {
    if (!paciente.dni) {
      console.log("aparecio un error...");
    }

    navigate(`/medic-peru/medical-history/${paciente.dni}`);
  };

  return (
    <>
      <tr className="bg-white ">
        <td
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
        >
          <img
            className="w-10 h-10 rounded-full"
            src={UserPersona}
            alt="user-name"
          />
          <div className="pl-4">
            <div className="text-base font-semibold">{paciente.nombre}</div>
            <div className="font-normal text-gray-500">{paciente.consulta}</div>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold">{paciente.dni}</td>
        <td className="px-6 py-4 font-semibold">{paciente.celular}</td>
        <td className="px-6 py-4 font-semibold">{paciente.ubicacion}</td>
        <td scope="row">
          <div className="ps-3 ">
            <div className="text-base font-semibold">{paciente.fecha}</div>
            <div className="font-normal text-gray-500">13:00 PM</div>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold">{paciente.tiempoCita}</td>

        <td className="px-6 py-4">
          <Link to={`/medic-peru/medical-history/${paciente.dni}`}>
            <button
              onClick={onPacienteHistory}
              className="btn bg-transparent border-none shadow-none"
            >
              <SlArrowRight />
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};
