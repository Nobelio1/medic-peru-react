import { CardService } from "./components/detalle-compra/CardService";

export const DetalleCompraPage = () => {
  return (
    <>
      <div className="w-full px-4 mb-4">
        <div className="bg-white rounded-md py-2 px-4">
          <h1 className="text-center pt-2 text-xl font-bold uppercase">
            Detalle de la Cita
          </h1>
          <CardService />
          <div className="my-2">
            <label htmlFor="price">Elige el precio:</label>
            <select
              name="price"
              id="price"
              className="mt-1 select select-bordered select-sm w-full"
            >
              <option value="">price1</option>
              <option value="">price2</option>
            </select>
          </div>
          <div className="my-2">
            <label htmlFor="fecha">Elige la fecha:</label>
            <input
              type="date"
              id="fecha"
              className="border mt-1 border-gray-300 rounded-md block w-full py-0.5 px-2"
            />
          </div>
          <div className="my-2">
            <label htmlFor="doctor">Elige el doctor:</label>
            <select
              name="doctor"
              id="doctor"
              className="mt-1 select select-bordered select-sm w-full"
            >
              <option value="">price1</option>
              <option value="">price2</option>
            </select>
          </div>
          <div className="my-2">
            <label htmlFor="centro-medico">Elige el centro medico:</label>
            <select
              name="centro-medico"
              id="centro-medico"
              className="mt-1 select select-bordered select-sm w-full"
            >
              <option value="">Hospital 1</option>
              <option value="">Hospital 2</option>
            </select>
          </div>
          <div className="my-2">
            <p className="pb-2">Selecionne su horario:</p>
            <div className="flex justify-around">
              <button className="btn bg-blue-500 hover:bg-blue-800 text-white">
                11:00 am
              </button>
              <button className="btn bg-blue-500 hover:bg-blue-800 text-white">
                2:00 pm
              </button>
              <button className="btn bg-blue-500 hover:bg-blue-800 text-white">
                4:00 pm
              </button>
            </div>
          </div>

          <div className="mt-36 flex items-center w-full bg-sky-200 justify-between py-2 px-4 rounded-md">
            <p className="font-bold">Total:</p>
            <p className="font-bold text-xl">S/ 3,500</p>
          </div>
          <div className="mt-2">
            <button className="btn w-full bg-blue-500 hover:bg-blue-800 text-white">
              Ir a pagar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
