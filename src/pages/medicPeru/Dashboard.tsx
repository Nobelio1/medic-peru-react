import { dataCitas } from "../../data/citas";
import { HistoryCardSmall } from "./components/dashboard/HistoryCardSmall";
import {
  Anuncios,
  Calendar,
  Filter,
  Historial,
} from "./components/dashboard/main";

export const Dashboard = () => {
  const citasPnd = dataCitas.filter((citas) => citas.estado !== "Confirmada");
  return (
    <div className="flex justify-around w-full h-screen overflow-hidden">
      <div className="w-3/4 h-full items-center py-6 px-6">
        <Anuncios />
        <Filter />
        <Historial />
      </div>
      <div className="divider lg:divider-horizontal py-6 px-2"></div>
      <div className="w-1/4 h-full">
        <Calendar />
        <h3 className="text-2xl my-3 font-bold">Citas Pendientes</h3>
        <div className="mt-4  rounded-md px-2 py-4">
          {citasPnd.map((cita) => (
            <HistoryCardSmall key={cita.idCita} cita={cita} />
          ))}
        </div>
      </div>
    </div>
  );
};
