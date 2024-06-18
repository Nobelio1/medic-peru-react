import { useEffect, useState } from "react";
import { TypeSpecialties } from "../../data/typeSpecialties";
import { CardService } from "./components/detalle-compra/CardService";
import { Link } from "react-router-dom";

export const DetalleCompraPage = () => {
  const [priceBuy, setPriceBuy] = useState("");

  const localService = localStorage.getItem("service");

  if (!localService) {
    throw new Error(
      "Hubo un error al tratar de encontrar el servicio a comprar"
    );
  }

  const service: TypeSpecialties = JSON.parse(localService);

  let prices = service.price
    .replaceAll("S/", "")
    .replace("-", "")
    .replaceAll(",", "")
    .split(" ");
  prices = prices.filter((price) => price !== "");

  const doctores = [
    { name: "Dr. Julio", id: 1 },
    { name: "Dr. Oscar", id: 2 },
    { name: "Dr. Roberto", id: 3 },
  ];

  const sedes = [
    {
      id: 1,
      name: "Clínica Santa Lucía",
      price: prices.length > 1 ? Number(prices[0]) + 100 : Number(prices[0]),
    },
    {
      id: 2,
      name: "Clínica Monte Sinai",
      price: prices.length > 1 ? Number(prices[0]) + 200 : Number(prices[0]),
    },
    {
      id: 3,
      name: "Clínica San Borja Salud",
      price: prices.length > 1 ? Number(prices[0]) + 300 : Number(prices[0]),
    },
  ];

  const priceSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceBuy(e.target.value);
    localStorage.setItem("price", e.target.value);
  };

  useEffect(() => {
    setPriceBuy(String(Number(prices[0]) + 100));
    localStorage.setItem("price", String(Number(prices[0]) + 100));
  }, []);

  return (
    <>
      <div className="w-full px-4 mb-4">
        <div className="bg-white rounded-md py-2 px-4">
          <h1 className="text-center pt-2 text-xl font-bold uppercase">
            Detalle de la Cita
          </h1>
          <CardService />

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
              {doctores.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
          <div className="my-2">
            <label htmlFor="centro-medico">Elige el centro medico:</label>
            <select
              name="centro-medico"
              id="centro-medico"
              className="mt-1 select select-bordered select-sm w-full"
              onChange={(e) => priceSelected(e)}
            >
              {sedes.map((sede) => (
                <option key={sede.id} value={sede.price}>
                  {sede.name}
                </option>
              ))}
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

          <div className="mt-52 flex items-center w-full bg-sky-200 justify-between py-2 px-4 rounded-md">
            <p className="font-bold">Total:</p>
            <p className="font-bold text-xl">S/ {priceBuy}</p>
          </div>
          <div className="mt-2">
            <Link
              className="btn w-full bg-blue-500 hover:bg-blue-800 text-white"
              to={"/medic-peru/specialties/servicie/payment"}
            >
              Ir a pagar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
