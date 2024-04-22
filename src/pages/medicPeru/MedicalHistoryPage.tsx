import { SidebarPatient } from "./components/medical-history/SidebarPatient";

import { Outlet, useParams } from "react-router-dom";

export const MedicalHistoryPage = () => {
  const { id } = useParams();

  return (
    <>
      <div className="w-full h-screen flex overflow-hidden ">
        <div className="w-3/4 h-full  py-6  px-2 ">
          <Outlet />
        </div>
        <aside className="w-1/4 ml-14 py-6 px-2">
          <SidebarPatient dni={id} />
        </aside>
      </div>
    </>
  );
};
