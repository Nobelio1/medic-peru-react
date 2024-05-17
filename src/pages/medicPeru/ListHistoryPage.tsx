import { useEffect, useState } from "react";
import { HistorialClinica } from "../../data/historialClinica";
import { HeaderHistory } from "./components/medical-history/HeaderHistory";
import { HospitalCard } from "./components/medical-history/HospitalCard";
import { useParams } from "react-router-dom";
import { getHistoriasByDni } from "../../api/medicPeru/medicPeruService";

export const ListHistoryPage = () => {
  const [historial, setHistorial] = useState<HistorialClinica[]>([]);

  const { id } = useParams();

  if (!id) throw new Error("No se encontro id en la url");

  const historiasClinicas = async () => {
    const historiasCli = await getHistoriasByDni({ dni: id });
    setHistorial(historiasCli);
  };

  useEffect(() => {
    historiasClinicas();
  }, []);

  return (
    <>
      <HeaderHistory setHistorial={setHistorial} />
      <main className="bg-white w-full height-per2 border-2 rounded-md border-blue-300 px-3 py-3 mt-4 overflow-y-auto space-y-2">
        {historial.map((consulta) => (
          <HospitalCard key={consulta.idHistoria} visita={consulta} />
        ))}
      </main>
    </>
  );
};
