import { dataCitas } from "../../../../data/citas";
import { HistoryCardSmall } from "./HistoryCardSmall";

export const CitasPendientesCardSmall = () => {
  const citasPnd = dataCitas.filter((citas) => citas.estado !== "Confirmada");

  return (
    <div className="mt-4 bg-white rounded-xl p-4">
      <h3 className="text-2xl mb-3 font-bold border-b-2 pb-2">
        Citas Pendientes
      </h3>
      {citasPnd.map((cita) => (
        <HistoryCardSmall key={cita.idCita} cita={cita} />
      ))}
    </div>
  );
};
