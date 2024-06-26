import { Link } from "react-router-dom";
import { CardSpecialties } from "./components/all-specialties/CardSpecialties";
import { SlArrowLeft } from "react-icons/sl";
import { useEffect, useState } from "react";
import { Especialidades } from "../../interfaces/especialidades.interface";
import { listarEspecialidades } from "../../api/medicPeru/MedicPeruEspecialidades";

export const AllSpecialtiesPage = () => {
  const [especialidad, setEspecialidad] = useState<Especialidades[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const listaEspecialidad = async () => {
    setLoading(true);
    const especialidades: Especialidades[] = await listarEspecialidades();
    if (especialidades) {
      setEspecialidad(especialidades);
    }
    setLoading(false);
  };

  useEffect(() => {
    listaEspecialidad();
  }, []);

  return (
    <div className="w-full py-2 px-4 ">
      <main className="  bg-white rounded-md">
        <Link className="btn btn-ghost text-lg mt-2" to={"/medic-peru/"}>
          <SlArrowLeft />
          Volver
        </Link>
        <section className="px-4 py-2">
          <h1 className="text-2xl text-center font-semibold mt-5 mb-4">
            Conozca a Nuestros Especialistas
          </h1>
          <p className="text-center pb-4">
            Los mejores cirujanos especialistas con equipo está formado por
            profesionales expertos en el sector sanitario, lo que garantiza la
            excelencia en el servicio, la atención personalizada y la seguridad
            médica.
          </p>
        </section>
      </main>
      <section className="pb-4">
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 mt-6 ">
          {loading ? (
            <>
              <span className="text-center">CARGANDO...</span>
            </>
          ) : (
            especialidad.map((spec) => (
              <div className="bg-white flex justify-center items-center rounded-md shadow-sm" key={spec.id_especialidad}>
                <CardSpecialties
                  specialties={spec}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};
