import { useParams } from "react-router-dom";
import { HistoryDetailPage } from "./HistoryDetailPage";
import { dataCitas } from "../../data/citas";
import { dataPrueba } from "../../data";
import { SidebarDoctor } from "./components/citas-page/SidebarDoctor";

export const CitaDetallePage = () => {
  const { id } = useParams();

  if (!id) throw new Error("No se encontro dni");

  const cita = dataCitas.find((citas) => citas.idCita === id);
  const doctor = dataPrueba.find(
    (doctor) => doctor.numColegiatura === cita?.idDoctor
  );

  return (
    <>
      <div className="w-full h-screen flex overflow-hidden ">
        <div className="w-3/4 h-full  py-6  px-2 ">
          <HistoryDetailPage isDoctor={false} />
        </div>
        <aside className="w-1/4 ml-14 py-6 px-2">
          <SidebarDoctor dni={doctor?.dni} />
        </aside>
      </div>
    </>
  );
};
