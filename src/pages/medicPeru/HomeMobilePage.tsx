import { useNavigate } from "react-router-dom";
import { ChatIALogo, DoctorCitaLogo, MedicalLogo } from "../../assets";

export const HomeMobilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full roboto-thin h-screen carousel">
      <div className="carousel-item flex-col w-full bg-white">
        <div className="flex flex-col h-full justify-center items-center ">
          <div className="w-[625px] relative -left-10 mb-4 overflow-hidden">
            <img src={MedicalLogo} alt="logo-icono" />
          </div>
          <h1 className="font-bold text-2xl">¡Hola! Bienvendido a MedicPeru</h1>
          <p className="text-center text-md text-gray-800 pt-4">
            Una app donde podras reservar tus citas, gestionar documentos,
            chatear con los doctores y muchos más
          </p>
        </div>
        <button
          className="btn mt-4 w-4/5 bg-blue-600 text-white self-end mx-auto mb-4"
          onClick={() => navigate("/auth/login")}
        >
          Empieza ya
        </button>
      </div>
      <div className="carousel-item flex-col w-full bg-white">
        <div className="flex flex-col h-full justify-center items-center overflow-hidden">
          <div className="w-[625px] relative -top-4 mb-4">
            <img src={DoctorCitaLogo} alt="logo-icono" />
          </div>
          <h1 className="font-bold text-2xl text-center px-1">
            Reserva tu cita de manera rapida y dale seguimiento
          </h1>
          <p className="text-center text-md text-gray-800 pt-4 px-3">
            Lleva un control de todas tus citas, revisa lo recetado y chatea con
            los doctores en tiempo real
          </p>
        </div>
        <button
          className="btn mt-4 w-4/5 bg-blue-600 text-white self-end mx-auto mb-4"
          onClick={() => navigate("/auth/login")}
        >
          Empieza ya
        </button>
      </div>
      <div className="carousel-item flex-col w-full bg-white">
        <div className="flex flex-col h-full justify-center items-center overflow-hidden">
          <div className="w-[625px] relative -top-4 left-10 mb-4">
            <img src={ChatIALogo} alt="logo-icono" />
          </div>
          <h1 className="font-bold text-2xl text-center px-2">
            Prueba nuestra IA especializada para resolver tus necesidades
          </h1>
          <p className="text-center text-md text-gray-800 pt-4 px-3">
            Nuestra nueva IA entrenda para resolver tus dudas y registrate citas
            con los mejores dotores
          </p>
        </div>
        <button
          className="btn mt-4 w-4/5 bg-blue-600 text-white self-end mx-auto mb-4"
          onClick={() => navigate("/auth/login")}
        >
          Empieza ya
        </button>
      </div>
    </div>
  );
};
