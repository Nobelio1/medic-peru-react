import { Link, useParams } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { DetailMedical } from "./components/medical-detail/DetailMedical";

export const HistoryDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <Link
        className="btn btn-ghost text-lg "
        to={`/medic-peru/medical-history/${id}`}
      >
        <SlArrowLeft />
        Volver a la pagina anterior
      </Link>
      <DetailMedical />
    </>
  );
};
