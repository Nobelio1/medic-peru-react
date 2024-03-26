import { SlArrowLeft } from "react-icons/sl";
import { FaFilter } from "react-icons/fa";

export const HearderCita = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-lg">
            <SlArrowLeft />
            Volver a Inicio
          </a>
        </div>
        <div className="flex-none gap-2">
          <label className="input rounded-full bg-purple-50 flex items-center gap-2">
            <input
              type="text"
              className="grow placeholder:text-indigo-600 placeholder:font-medium "
              placeholder="Search"
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
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost ">
              <div className="rounded-full flex items-center gap-3">
                <FaFilter /> <span className="text-lg">Filtro</span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-30"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
