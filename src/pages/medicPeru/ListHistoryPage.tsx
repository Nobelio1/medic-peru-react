import { useState } from "react";
import {
  HistorialClinica,
  historialClinica,
} from "../../data/historialClinica";
import { HeaderHistory } from "./components/medical-history/HeaderHistory";
import { HospitalCard } from "./components/medical-history/HospitalCard";

export const ListHistoryPage = () => {
  const [historial, setHistorial] =
    useState<HistorialClinica[]>(historialClinica);
  return (
    <>
      <HeaderHistory setHistorial={setHistorial} />
      <main className="bg-white w-full height-per2 border-2 rounded-2xl border-gray-300 px-3 py-5 mt-4 overflow-y-auto space-y-2">
        {historial.map((consulta) => (
          <HospitalCard key={consulta.id} visita={consulta} />
        ))}
      </main>
    </>
  );
};
