import { useParams } from "react-router-dom";
import { BodyDetail } from "./BodyDetail";
import { HeaderDetail } from "./HeaderDetail";
import { RecipeTable } from "./RecipeTable";
// import { getCitaDetalleById } from "../../../../helpers/getCitaById";
import { HistorialClinica } from "../../../../data/historialClinica";
import { getDetalleById } from "../../../../api/medicPeru/medicPeruService";
import { useEffect, useState } from "react";
import { DocumentosList } from "./DocumentosList";

interface DetailMedicalProps {
  isDoctor: boolean;
}

export const DetailMedical = ({ isDoctor }: DetailMedicalProps) => {
  const [cita, setCita] = useState<HistorialClinica>();

  let idCita: string = "";

  if (isDoctor) {
    const { detail } = useParams();
    if (!detail) return; //todo: Colocar caso de error

    idCita = detail;
  }

  if (!isDoctor) {
    const { id } = useParams();
    if (!id) return; //todo: Colocar caso de error

    idCita = id;
  }

  const citaById = async () => {
    const citaId = await getDetalleById({ id: idCita });
    setCita(citaId);
  };

  useEffect(() => {
    citaById();
  }, []);

  if (!cita) {
    return <h1>Esperando....</h1>;
  }

  return (
    <main className="bg-white w-full height-per border-2 rounded-2xl border-blue-300 px-9 py-10 mt-4 overflow-y-auto space-y-8">
      <HeaderDetail cita={cita!} />
      <BodyDetail detalle={cita!.detalleClinico} />
      <RecipeTable recetario={cita!.recetario} />
      <DocumentosList />
    </main>
  );
};
