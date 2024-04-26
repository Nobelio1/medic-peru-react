import { Link } from "react-router-dom";
import { dataCitas } from "../../../../../data/citas";
import { HistoryCardLarge } from "../HistoryCardLarge";

export const Historial = () => {
  const citasComp = dataCitas.filter((citas) => citas.estado !== "Pendiente");

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h3 className="montserrat-bold text-2xl">Historial de Citas</h3>
        <Link to={"/medic-peru/cita-medica"}>
          <p className="montserrat-medium hover:underline-offset-1 hover:underline">
            {" "}
            Ver todo
          </p>
        </Link>
      </div>
      <section className="h-80 overflow-y-auto">
        {citasComp.map((cita) => (
          <HistoryCardLarge key={cita.idCita} cita={cita} />
        ))}
      </section>
    </div>
  );
};
