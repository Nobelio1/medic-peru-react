import { Link, useParams } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { useState, useEffect } from "react";
import { especialidadPorId } from "../../api/medicPeru/MedicPeruEspecialidades";
import { EspecialidadesId } from "../../interfaces/especialidades.interface";
import { CardServicesSpec } from "./components/all-specialties/CardServicesSpec";

export const ListOfServicesPage = () => {
  const { id } = useParams();
  if (!id) throw new Error("No se encontro el id en los parametros");

  const [servicios, setServicios] = useState<EspecialidadesId[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const listarServicios = async () => {
    setLoading(true);
    const servicios: EspecialidadesId[] = await especialidadPorId(+id );
    if (servicios) {
      setServicios(servicios);
    }
    setLoading(false);
  };

  useEffect(() => {
    listarServicios();
  }, []);


  return (
    <div className="w-full py-2 px-3 mb-2 ">
      <div className=" bg-white  rounded-md ">
        <Link
          className="btn btn-ghost text-lg my-2"
          to={"/medic-peru/specialties"}
        >
          <SlArrowLeft />
          Volver
        </Link>
      </div>
      <div className="mt-4">
        <section className=" grid grid-cols-2 gap-4 justify-items-center align-items-center">
          {loading ? (
            <div className="flex justify-center col-span-2 mt-6">
              <span className="loading loading-spinner text-info loading-lg"></span>
            </div>
          ) : (
            servicios.map((service) => (
              <CardServicesSpec key={service.id_servicios} service={service} />
            ))
          )}
        </section>
      </div>
    </div>
  );
};
