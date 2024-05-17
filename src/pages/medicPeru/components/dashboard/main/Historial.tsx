import { Link } from "react-router-dom";
import { dataCitas } from "../../../../../data/citas";
import { HistoryCardLarge } from "../HistoryCardLarge";

export const Historial = () => {
  const citasComp = dataCitas.filter((citas) => citas.estado !== "Pendiente");

  return (
    <div className="mt-4 bg-white rounded-xl p-4">
      <div className="flex justify-between items-center border-b-2 pb-2">
        <h3 className="text-2xl font-bold">Historial de Citas</h3>
        <Link to={"/medic-peru/cita-medica"}>
          <p className=" hover:underline-offset-1 hover:underline">Ver todo</p>
        </Link>
      </div>
      <section>
        {citasComp.map((cita) => (
          <HistoryCardLarge key={cita.idCita} cita={cita} />
        ))}
      </section>
    </div>
  );
};
