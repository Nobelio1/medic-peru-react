import { Link } from "react-router-dom";

export const Filter = () => {
  return (
    <div className="mt-4 w-full">
      <div className="grid gap-3 text-white">
        {/* item-1 */}
        <div className="flex justify-between items-center filtro-color-box-1 rounded-xl px-3 py-4">
          <div className="flex items-center">
            <div className="bg-white rounded-2xl p-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-stethoscope"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
                <path d="M8 15a6 6 0 1 0 12 0v-3" />
                <path d="M11 3v2" />
                <path d="M6 3v2" />
                <path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              </svg>
            </div>
            <Link to="/medic-peru/filter-doctor">
              <p className="text-xl">Doctores disponibles</p>
            </Link>
          </div>
          <div className="text-4xl pr-2">
            <p>112</p>
          </div>
        </div>

        {/* item-2 */}
        <div className="flex justify-between items-center filtro-color-box-2 rounded-xl p-3 py-4">
          <div className="flex items-center">
            <div className="bg-white rounded-2xl p-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-ambulance"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                <path d="M6 10h4m-2 -2v4" />
              </svg>
            </div>
            <p className="text-xl">Clinicas disponibles</p>
          </div>
          <div className="text-4xl pr-2">
            <p>30</p>
          </div>
        </div>

        {/* item-3 */}
        <div className=" flex justify-between items-center filtro-color-box-3 rounded-xl p-3 flex-1 py-4">
          <div className="flex items-center">
            <div className="bg-white rounded-2xl p-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-building-hospital"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                <path d="M10 9l4 0" />
                <path d="M12 7l0 4" />
              </svg>
            </div>

            <p className="text-xl">Hospitales disponibles</p>
          </div>
          <div className="text-4xl pr-2">
            <p>54</p>
          </div>
        </div>

        {/* ---- */}
      </div>
    </div>
  );
};
