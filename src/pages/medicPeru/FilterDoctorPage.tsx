import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import { DropFilter } from "./components/filter-doctor/DropFilter";
import { CardInfoDoctor } from "./components/filter-doctor/CardInfoDoctor";
import { Field, Form, Formik } from "formik";
import {
  DataDoctor,
  Especialidades,
  Ubigeo,
} from "../../interfaces/medicPeru.interface";
import { dataPrueba } from "../../data";
import { getDoctorByDni } from "../../helpers/getDoctorByDni";
import { useEffect, useState } from "react";
import {
  getDepartamentos,
  getListarEspecialidad,
} from "../../api/medicPeru/medicPeruService";
import { DropFilterGeneric } from "./components/filter-doctor/DropFilterGeneric";

interface DniDoctor {
  dni: string;
}

export const FilterDoctorPage = () => {
  const [dataDoctor, setDataDoctor] = useState<DataDoctor[]>(dataPrueba);
  const [departamentos, setDepartamentos] = useState<Ubigeo[]>([]);
  const [provincias, setProvincias] = useState<Ubigeo[]>([]);
  const [distritos, setDistritos] = useState<Ubigeo[]>([]);
  const [especialidad, setEspecialidad] = useState<Especialidades[]>([]);

  useEffect(() => {
    getDtpo();
    getEspecialidades();
  }, []);

  console.log(distritos);

  const onSearchSubmit = async ({ dni }: { dni: string }) => {
    let filterDoctor = getDoctorByDni({ dni: dni });
    setDataDoctor(filterDoctor);
  };

  const getDtpo = async () => {
    const dpto = await getDepartamentos();
    setDepartamentos(dpto);
  };

  const getEspecialidades = async () => {
    const esp = await getListarEspecialidad();
    setEspecialidad(esp);
  };

  return (
    <div className="w-full h-screen py-6 px-3 overflow-hidden">
      <div className="overflow-hidden h-full bg-white border-2 border-blue-300 rounded-md p-4 ">
        {/* Parametros  */}
        <nav className="flex-1 ">
          <Link className="btn btn-ghost text-lg" to={"/medic-peru/"}>
            <SlArrowLeft />
            Volver
          </Link>
        </nav>

        <main>
          <section className="grid grid-cols-5  items-center">
            <DropFilterGeneric
              especialidades={especialidad}
              dataDoctor={setDataDoctor}
              tipo={"Especialidad"}
            />

            <DropFilter
              ubigeo={departamentos}
              dataProvincia={setProvincias}
              dataDistritos={setDistritos}
              tipo={"Departamento"}
            />
            <DropFilter
              ubigeo={provincias}
              dataDistritos={setDistritos}
              tipo={"Provincia"}
            />
            <DropFilter ubigeo={distritos} tipo={"Distrito"} />

            <Formik
              initialValues={{
                dni: "",
              }}
              onSubmit={(values: DniDoctor) => {
                onSearchSubmit({ dni: values.dni });
              }}
            >
              <Form>
                <label className="input input-bordered flex items-center gap-2">
                  <Field
                    type="text"
                    className="grow"
                    placeholder="Search"
                    name="dni"
                  />
                  <button
                    className="hover:bg-gray-200 p-2 rounded-md"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </label>
              </Form>
            </Formik>
          </section>
          <section className="overflow-y-auto pb-20 h-screen">
            {/* Card */}
            <div className="mt-4 flex flex-col gap-4">
              {dataDoctor.length === 0 ? (
                <div className="w-full text-center mt-20">
                  <h1 className="text-2xl font-bold">NO EXISTE REGISTRO :(</h1>
                </div>
              ) : (
                dataDoctor.map((doctor) => (
                  <CardInfoDoctor key={doctor.id} doctor={doctor} />
                ))
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
