import { HearderCita } from "./components/dashboard-cita/HearderCita";
import { TableCita } from "./components/dashboard-cita/TableCita";

export const ProfilePage = () => {
  return (
    <>
      <div className="mt-5">
        <HearderCita />
        <TableCita />
      </div>
    </>
  );
};
