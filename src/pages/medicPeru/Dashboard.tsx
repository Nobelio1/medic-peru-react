import { CitasPendientesCardSmall } from "./components/dashboard/CitasPendientesCardSmall";
import { Calendar, Filter, Historial } from "./components/dashboard/main";

export const Dashboard = () => {
  return (
    <div className="px-4 mb-4">
      <div>
        <Filter />
        <Calendar />
        <CitasPendientesCardSmall />
        <Historial />
      </div>
    </div>
  );
};
