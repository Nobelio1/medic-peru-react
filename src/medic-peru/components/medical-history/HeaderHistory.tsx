import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";

export const HeaderHistory = () => {
  return (
    <>
      <div>
        <div className="flex-1">
          <Link className="btn btn-ghost text-lg" to={"/profile"}>
            <SlArrowLeft />
            Volver
          </Link>
        </div>
      </div>
      <div className="navbar bg-base-100 mb-10">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Historia Clinica</h1>
        </div>
        <div className="flex-none gap-2">
          <label className="input rounded-full bg-purple-50 flex items-center gap-2">
            <input
              type="text"
              className="grow placeholder:text-indigo-300 placeholder:font-medium "
              placeholder="Buscar por ID"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(79, 70, 229)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};
