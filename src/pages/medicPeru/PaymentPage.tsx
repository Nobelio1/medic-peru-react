import { SlArrowLeft } from "react-icons/sl";
import { Logo, Tarjetas } from "../../assets";
import { Link, useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const price = localStorage.getItem("price");
  const nagivate = useNavigate();

  const retrocer = () => {
    nagivate(-1);
  };

  return (
    <div className="w-full px-4 mb-4">
      <div className="bg-white rounded-md h-[768px] py-2 px-4">
        <button className="btn btn-ghost text-lg" onClick={retrocer}>
          <SlArrowLeft />
          Volver
        </button>

        <h1 className="mt-4 text-2xl text-center uppercase font-bold text-blue-800">
          Proceso de pago
        </h1>
        <div className="mt-12 px-2">
          <div className="grid mt-1">
            <input
              className="border border-blue-300 rounded-md px-2 py-1"
              type="text"
              placeholder="Numero de tarjeta"
            />
          </div>
          <div className="grid grid-cols-2 mt-1 gap-1">
            <input
              className="border border-blue-300 rounded-md px-2 py-1"
              type="text"
              placeholder="MM/AA"
            />
            <input
              className="border border-blue-300 rounded-md px-2 py-1"
              type="text"
              placeholder="CVV"
            />
          </div>
          <div className="grid grid-cols-2 mt-1 gap-1">
            <input
              className="border border-blue-300 rounded-md px-2 py-1"
              type="text"
              placeholder="Nombres"
            />
            <input
              className="border border-blue-300 rounded-md px-2 py-1"
              type="text"
              placeholder="Apellidos"
            />
          </div>
          <div className="grid mt-1">
            <input
              className="border border-blue-300 rounded-md px-2 py-1"
              type="text"
              placeholder="correo electronico"
            />
          </div>
          <div className="mt-2 bg-blue-100 rounded-md p-2">
            <input type="checkbox" id="recovery" className="mr-1" />
            <label htmlFor="recovery">Recordar tarjeta</label>
          </div>
        </div>

        <div className=" text-center mt-6">
          <Link
            to={"/medic-peru/specialties/servicie/success"}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-bold text-xl"
          >
            Pagar S/ {price}
          </Link>
        </div>

        <div className="flex justify-between mt-14 px-5">
          <img src={Logo} alt="img-medic-peru" className="w-10 object-cover" />
          <img src={Tarjetas} alt="img-tarjeta" className="w-32" />
        </div>
      </div>
    </div>
  );
};
