import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import { DropFilter } from "./components/filter-doctor/DropFilter";
import { LuFilter } from "react-icons/lu";
import { CardInfoDoctor } from "./components/filter-doctor/CardInfoDoctor";

export const FilterDoctorPage = () => {
  return (
    <div className=" w-full h-full p-4">
      <div className="flex-1 ">
        <Link className="btn btn-ghost text-lg" to={""}>
          <SlArrowLeft />
          Volver
        </Link>
      </div>

      <div className="border bg-white border-solid border-black rounded-md mt-4 p-4">
        {/* Parametros  */}
        <div className="grid grid-cols-4 gap-4 items-center">
          <DropFilter tipo={"Especialidad"} />
          <DropFilter tipo={"Departamento"} />
          <DropFilter tipo={"Distrito"} />
          <button className="btn btn-ghost text-lg">
            <LuFilter />
            Filtro
          </button>
        </div>
        {/* Card */}
        <div className="mt-4 flex flex-col gap-4">
          <CardInfoDoctor />
          <CardInfoDoctor />
          <CardInfoDoctor />
          <CardInfoDoctor />
        </div>
      </div>
    </div>
  );
};
