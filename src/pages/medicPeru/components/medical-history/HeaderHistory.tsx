import { Dispatch, SetStateAction } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import { HistorialClinica } from "../../../../data/historialClinica";
import { Field, Form, Formik } from "formik";

interface HeaderHistoryProps {
  setHistorial: Dispatch<SetStateAction<HistorialClinica[]>>;
}

interface IdCita {
  id: string;
}

export const HeaderHistory = ({}: HeaderHistoryProps) => {
  //const onSearchSubmit = ({ id }: { id: string }) => {
  // let filterPaciente = getCitaById({ id: id });
  // setHistorial(filterPaciente);
  //};

  return (
    <>
      <div>
        <div className="flex-1">
          <Link
            className="btn btn-ghost text-lg"
            to={"/medic-peru/filter-pacientes"}
          >
            <SlArrowLeft />
            Volver
          </Link>
        </div>
      </div>
      <header className="navbar mt-2 bg-base-100 rounded-md border-2 border-blue-300">
        <div className="flex-1 flex items-center">
          <h1 className="text-3xl font-bold ml-4">Historia Clinica</h1>
        </div>
        <div className="flex-none gap-2">
          <Formik
            initialValues={{
              id: "",
            }}
            onSubmit={(values: IdCita) => {
              console.log(values);
            }}
          >
            <Form>
              <label className="input rounded-full bg-purple-50 flex items-center gap-2">
                <Field
                  type="text"
                  className="grow placeholder:text-indigo-300 placeholder:font-medium "
                  placeholder="Buscar por ID"
                  name="id"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(79, 70, 229)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </label>
            </Form>
          </Formik>
        </div>
      </header>
    </>
  );
};
