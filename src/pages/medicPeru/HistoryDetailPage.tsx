import { Link } from "react-router-dom";
import { SidebarPatient } from "./components/medical-history/SidebarPatient";
import { SlArrowLeft } from "react-icons/sl";
import { DetailMedical } from "./components/medical-detail/DetailMedical";

export const HistoryDetailPage = () => {
  return (
    <>
      <div className="w-full h-screen flex overflow-hidden ">
        <div className="w-3/4 h-full py-6 px-2 ">
          <Link
            className="btn btn-ghost text-lg "
            to={"/medic-peru/medical-history"}
          >
            <SlArrowLeft />
            Volver a la pagina anterior
          </Link>
          <DetailMedical />
        </div>
        <div className="w-1/4 ml-14 py-6 px-2">
          <SidebarPatient />
        </div>
      </div>
    </>
  );
};
