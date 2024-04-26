import { Link } from "react-router-dom";
import { UserPhoto } from "../../../../assets";
import { Citas } from "../../../../data/citas";
import { BsChevronCompactRight } from "react-icons/bs";

interface HistoryCardLargeProps {
  cita: Citas;
}

export const HistoryCardLarge = ({ cita }: HistoryCardLargeProps) => {
  return (
    <div className="mt-3">
      <div className="grid grid-cols-7 items-center bg-white px-2 py-3 gap-2 rounded-md border-2 border-blue-300 hover:bg-blue-300">
        <img
          src={UserPhoto}
          alt="Logo"
          className="w-20 h-20  rounded-full bg-slate-600"
        />
        <div>
          <h3 className="montserrat-bold">Dr. {cita.name}</h3>
          <p className="montserrat-medium ">{cita.especialidad}</p>
        </div>
        <h2 className="montserrat-bold text-sm">{cita.clinicalCenter}</h2>
        <h2 className="montserrat-bold">{cita.fecha}</h2>
        <h2 className="montserrat-bold">{cita.hora}</h2>
        <h2 className="montserrat-bold">{cita.estado}</h2>
        <div className="">
          <Link to={`/medic-peru/cita-detalle/${cita.idCita}`}>
            <button className="btn btn-ghost">
              <BsChevronCompactRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
