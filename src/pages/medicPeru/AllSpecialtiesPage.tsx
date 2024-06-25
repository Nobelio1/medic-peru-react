import { Link } from "react-router-dom";
import { CardSpecialties } from "./components/all-specialties/CardSpecialties";
import { SlArrowLeft } from "react-icons/sl";
import { useEffect, useState } from 'react';
import { Especialidades } from "../../interfaces/especialidades.interface";
import { listarEspecialidades } from "../../api/medicPeru/MedicPeruEspecialidades";

export const AllSpecialtiesPage = () => {

  const [especialidad, setEspecialidad] = useState<Especialidades[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const listaEspecialidad = async () => {
    setLoading(true)
    const especialidades: Especialidades[] = await listarEspecialidades()
    if(especialidades){
      setEspecialidad(especialidades)
    }
    setLoading(false)
  }

  useEffect(() => {
    listaEspecialidad()
  }, [])
  

  return (
    <div className="w-full py-2 px-4  ">
      <Link className="btn btn-ghost text-lg my-2" to={"/medic-peru/"}>
          <SlArrowLeft />
          Volver
        </Link>
      <main className="  bg-white     rounded-md px-10 ">
        <section className=" mb-3 py-1">
          <h1 className="text-2xl text-center font-semibold mt-5 mb-4">
            Conozca a Nuestros Especialistas
          </h1>
          <p className="text-center">
            Los mejores cirujanos especialistas con equipo está formado por
            profesionales expertos en el sector sanitario, lo que garantiza la
            excelencia en el servicio, la atención personalizada y la seguridad
            médica.
          </p>
        </section>
        <section className="pb-4">  
          <h2 className="text-2xl font-medium ">Especialidades</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 px-10 mt-6 height-sm overflow-y-scroll">
            {loading ? (
              <>
                <span className="text-center">CARGANDO...</span> 
              </>
            ) : (
              especialidad.map((spec) => (
                <CardSpecialties key={spec.id_especialidad} specialties={spec} />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
