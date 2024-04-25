import { useParams } from "react-router-dom";
import { BodyDetail } from "./BodyDetail";
import { HeaderDetail } from "./HeaderDetail";
import { RecipeTable } from "./RecipeTable";
import { getCitaDetalleById } from "../../../../helpers/getCitaById";
import { HistorialClinica } from "../../../../data/historialClinica";

interface DetailMedicalProps {
  isDoctor: boolean;
}

export const DetailMedical = ({ isDoctor }: DetailMedicalProps) => {
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

  const dateDetail: HistorialClinica = getCitaDetalleById({ id: idCita });

  return (
    <main className="bg-white w-full height-per border-2 rounded-2xl border-blue-300 px-9 py-10 mt-4 overflow-y-auto space-y-8">
      <HeaderDetail cita={dateDetail} />
      <BodyDetail detalle={dateDetail.detalleClinico} />
      <RecipeTable recetario={dateDetail.recetario} />
    </main>
  );
};
