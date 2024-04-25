import { Dispatch, SetStateAction } from "react";
import { Citas } from "../../../../data/citas";
import { Formik, Field, Form } from "formik";
import { FaFilter } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import { getCitaPacienteById } from "../../../../helpers/getCitaById";

interface HeaderCitaPacienteProps {
  setDataCita: Dispatch<SetStateAction<Citas[]>>;
}

interface IdDoctor {
  id: string;
}

export const HeaderCitaPaciente = ({
  setDataCita,
}: HeaderCitaPacienteProps) => {
  const onSearchSubmit = ({ id }: { id: string }) => {
    let filterPaciente = getCitaPacienteById({ id: id });
    console.log(filterPaciente);
    setDataCita(filterPaciente);
  };

  return (
    <>
      <header className="navbar bg-base-100 mb-4 rounded-md border-2 border-blue-300">
        <div className="flex-1">
          <Link
            className="btn btn-ghost text-lg flex items-center justify-center "
            to={"/medic-peru/"}
          >
            <SlArrowLeft color="#1e3a8a" size={15} />
            Volver a Inicio
          </Link>
        </div>
        <div className="flex-none gap-2">
          <Formik
            initialValues={{
              id: "",
            }}
            onSubmit={(values: IdDoctor) => {
              onSearchSubmit({ id: values.id });
            }}
          >
            <Form>
              <label className="input rounded-full bg-purple-50 flex items-center gap-2">
                <Field
                  type="text"
                  className="grow placeholder:text-blue-600 placeholder:font-medium "
                  placeholder="Search"
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
          {/* BOTON DE FILTRO ---- TODO: POR REVISAR */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost ">
              <div className="rounded-full flex items-center gap-3">
                <FaFilter color="#1e3a8a" />{" "}
                <span className="text-lg text-blue-900">Filtro</span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36"
            >
              <li>
                <a>Enfermedad 1</a>
              </li>
              <li>
                <a>Enfermedad 2</a>
              </li>
              <li>
                <a>Enfermedad 3</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
