import { MapPoint } from "../../../../assets";

export const SidebarDate = () => {
  return (
    <>
      <div className="w-full bg-white rounded-md border-2 border-blue-300 flex flex-col py-8 px-3 ">
        <h1 className="font-semibold text-lg mb-3 text-gray-600 text-center">
          Agender Cita
        </h1>
        {/* Selecionar direcion */}
        <div className="flex flex-col my-5 mx-2">
          <label className="font-semibold text-gray-500 mb-2">
            Seleccion la direccion
          </label>
          <div className="flex gap-1">
            <img src={MapPoint} className="w-5" />
            <select className="select select-ghost w-full max-w-xs">
              <option value="">Seleccione la direccion</option>
              <option>Calle 2</option>
              <option>Calle 3</option>
              <option>Calle 4</option>
            </select>
          </div>
        </div>
        {/* fechas disponibles */}
        <div className="mt-1 mb-6 mx-2">
          <h3>Esto sera un carousel con opciones</h3>
          <p>---- En desarrollo ----</p>
        </div>
        {/* horas y turnos disponibles */}
        <div className="mx-2">
          <div className="flex flex-col mb-5 gap-2">
            <h2 className="font-semibold text-gray-500 mb-5">Mañana</h2>
            <div className=" grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto  md:grid-cols-3">
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  07:00 am
                </button>
              </div>
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  08:00 am
                </button>
              </div>
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  09:00 am
                </button>
              </div>

              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  11:00 am
                </button>
              </div>
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  12:00 pm
                </button>
              </div>
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  03:00 pm
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-5 gap-2">
            <h2 className="font-semibold text-gray-500 mb-5">Tarde</h2>
            <div className=" grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto  md:grid-cols-3">
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  07:00 am
                </button>
              </div>
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  08:00 am
                </button>
              </div>
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  09:00 am
                </button>
              </div>
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  10:00 am
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-5 gap-2">
            <h2 className="font-semibold text-gray-500 mb-5">Noche</h2>
            <div className=" grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto  md:grid-cols-3">
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  07:00 am
                </button>
              </div>
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  08:00 am
                </button>
              </div>
              <div>
                <button className="btn btn-md font-normal text-gray-500 bg-white border hover:bg-emerald-600 hover:text-white hover:border-none">
                  09:00 am
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* boton chistoso */}
        <div className="mx-2 mt-5">
          <button className=" btn  text-white bg-emerald-500 w-full hover:bg-emerald-600 ">
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};
