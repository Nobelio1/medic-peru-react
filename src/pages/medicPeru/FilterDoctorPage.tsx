import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import { DropFilter } from "./components/filter-doctor/DropFilter";
import { CardInfoDoctor } from "./components/filter-doctor/CardInfoDoctor";
import { Field, Form, Formik } from "formik";
import { DataDoctor } from "../../interfaces/medicPeru.interface";
// import { getDoctor } from "../../api/medicPeru/medicPeruService";
import { dataPrueba } from "../../data";
import { getDoctorByDni } from "../../helpers/getDoctorByDni";
import { useState } from "react";

interface DniDoctor {
  dni: string;
}

export const FilterDoctorPage = () => {
  const [dataDoctor, setDataDoctor] = useState<DataDoctor[]>(dataPrueba);
  //todo: crer funcion para llamar al servicio

  const onSearchSubmit = async ({ dni }: { dni: string }) => {
    let filterDoctor = getDoctorByDni({ dni: dni });
    setDataDoctor(filterDoctor);
  };

  return (
    <div className=" w-full h-screen py-3 overflow-hidden">
      <div className="border overflow-hidden h-full  bg-white border-solid border-black rounded-md  p-4 ">
        {/* Parametros  */}
        <nav className="flex-1 ">
          <Link className="btn btn-ghost text-lg" to={""}>
            <SlArrowLeft />
            Volver
          </Link>
        </nav>

        <main>
          <section className="grid grid-cols-4 gap-4 items-center">
            <DropFilter dataDoctor={setDataDoctor} tipo={"Especialidad"} />
            <DropFilter dataDoctor={setDataDoctor} tipo={"Departamento"} />
            <DropFilter dataDoctor={setDataDoctor} tipo={"Distrito"} />

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
          <section className="overflow-y-auto pb-16 h-screen">
            {/* Card */}
            <div className="mt-4 flex flex-col  gap-4">
              {dataDoctor.map((doctor) => (
                <CardInfoDoctor key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
