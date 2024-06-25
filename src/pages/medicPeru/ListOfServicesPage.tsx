import { Link, useParams } from "react-router-dom";
import { allSpecialties } from "../../data/specialties";
import { SlArrowLeft } from "react-icons/sl";
import { useState, useEffect } from "react";
import { especialidadPorId } from "../../api/medicPeru/MedicPeruEspecialidades";
import { EspecialidadesId } from "../../interfaces/especialidades.interface";
import { CardServicesSpec } from "./components/all-specialties/CardServicesSpec";


export const ListOfServicesPage = () => {
  const { id } = useParams();
  if (!id) throw new Error("No se encontro el id en los parametros");

  const [servicios, setServicios] = useState<EspecialidadesId[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const listarServicios = async () => {
    setLoading(true)
    const servicios: EspecialidadesId[] = await especialidadPorId({id: +id})
    if(servicios){
      setServicios(servicios)
    }
    setLoading(false)
  }

  useEffect(() => {
    listarServicios()
  }, [])


  const titleSpec = allSpecialties.find((spec) => spec.id === id);

  return (
    <div className="h-full w-full py-2 px-3 ">
      <Link
        className="btn btn-ghost text-2xl my-2"
        to={"/medic-peru/specialties"}
      >
        <SlArrowLeft />
        Volver
      </Link>
      <div className=" bg-white  rounded-md py-2 px-4">
        <main className="px-2 py-2">
          <h1 className="mb-10 text-2xl font-medium">
            Nuestro servicios para
            <span className="text-blue-700 text-3xl font-bold uppercase">
              {titleSpec?.onTitle}
            </span>
          </h1>
          <div className="">
            <section className="px-4 grid grid-cols-1 gap-4 justify-items-center align-items-center">
              {
                loading ? (
                  <>
                    <span className="text-center">CARGANDO...</span> 
                  </>
                ) : (servicios.map((service) => (
                  <CardServicesSpec
                    key={service.id_servicios}
                    service={service}
                  />
                )))
              }
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};








 
