import { Link, useParams } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { DetailMedical } from "./components/medical-detail/DetailMedical";

interface HistoryDetailPageProps {
  isDoctor: boolean;
}

export const HistoryDetailPage = ({ isDoctor }: HistoryDetailPageProps) => {
  const { id } = useParams();

  return (
    <>
      <Link
        className="btn btn-ghost text-lg "
        to={
          isDoctor
            ? `/medic-peru/medical-history/${id}`
            : `/medic-peru/cita-medica`
        }
      >
        <SlArrowLeft />
        Volver a la pagina anterior
      </Link>
      <DetailMedical isDoctor={isDoctor} />
    </>
  );
};
