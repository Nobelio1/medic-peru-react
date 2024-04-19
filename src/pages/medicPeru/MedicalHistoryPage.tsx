import { useState } from "react";
import { HeaderHistory } from "./components/medical-history/HeaderHistory";
import { HospitalCard } from "./components/medical-history/HospitalCard";
import { SidebarPatient } from "./components/medical-history/SidebarPatient";
import {
  HistorialClinica,
  historialClinica,
} from "../../data/historialClinica";

export const MedicalHistoryPage = () => {
  const [historial, setHistorial] =
    useState<HistorialClinica[]>(historialClinica);

  return (
    <>
      <div className="w-full h-screen flex overflow-hidden ">
        <div className="w-3/4 h-full  py-6  px-2 ">
          <HeaderHistory setHistorial={setHistorial} />
          <main className="bg-white w-full height-per2 border-2 rounded-2xl border-gray-300 px-3 py-5 mt-4 overflow-y-auto space-y-2">
            {historial.map((consulta) => (
              <HospitalCard key={consulta.id} visita={consulta} />
            ))}
          </main>
        </div>
        <aside className="w-1/4 ml-14 py-6 px-2">
          <SidebarPatient />
        </aside>
      </div>
    </>
  );
};
