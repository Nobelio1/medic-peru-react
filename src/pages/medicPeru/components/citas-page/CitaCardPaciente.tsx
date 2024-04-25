import { Link } from "react-router-dom";
import { Citas } from "../../../../data/citas";
import { UserPhoto } from "../../../../assets";
import { SlArrowRight } from "react-icons/sl";

interface CitaCardPacienteProps {
  cita: Citas;
}

export const CitaCardPaciente = ({ cita }: CitaCardPacienteProps) => {
  return (
    <>
      <tr className="bg-white ">
        <td
          scope="row"
          className="flex items-center px-6 py-4 whitespace-nowrap "
        >
          <img
            className="w-12 h-12 rounded-full"
            src={UserPhoto}
            alt="user-name"
          />
          <div className="pl-4">
            <div className="text-base font-semibold">{cita.name}</div>
            <div className="font-normal text-gray-500">{cita.idDoctor}</div>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold">{cita.idCita}</td>
        <td className="px-6 py-4 font-semibold">{cita.especialidad}</td>
        <td scope="row">
          <div className="ps-3 ">
            <div className="text-base font-semibold">{cita.fecha}</div>
            <div className="font-normal text-gray-500">{cita.hora}</div>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold">{cita.clinicalCenter}</td>
        <td className="px-6 py-4 font-semibold">{cita.tiempo}</td>
        <td className="px-6 py-4 font-semibold">{cita.estado}</td>

        <td className="px-6 py-4">
          <Link to={`/medic-peru/cita-detalle/${cita.idCita}`}>
            <button className="btn bg-transparent border-none shadow-none">
              <SlArrowRight color="#1e3a8a" size={20} />
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};
