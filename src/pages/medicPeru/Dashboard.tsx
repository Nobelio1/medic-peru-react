import {
  Anuncios,
  Calendar,
  Filter,
  Historial,
} from "./components/dashboard/main";

export const Dashboard = () => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col items-center justify-center">
        <Anuncios />
        <Filter />
        <Historial />
      </div>
      <div className="divider lg:divider-horizontal pt-9"></div>
      <div>
        <Calendar />
      </div>
    </div>
  );
};
