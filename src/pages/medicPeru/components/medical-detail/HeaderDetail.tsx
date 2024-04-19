import { Download } from "../../../../assets";

export const HeaderDetail = () => {
  return (
    <section className="w-full ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">
          Cita Medica <span className="font-bold">#4333H</span>
        </h1>
        <button className="btn bg-teal-500 text-lg text-white">
          Descargar ficha
          <img src={Download} alt="download-icon" className="w-6 h-6" />
        </button>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg">
          <span className="font-bold ">Centro Clinico:</span> Hospital Cayetano
          Heredia
        </h3>
        <div className="flex gap-4">
          <h3 className="text-lg">
            <span className="font-bold ">Fecha:</span> 24/02/2024{" "}
          </h3>
          <h3 className="text-lg">
            <span className="font-bold ">Hora:</span> 16:00 PM
          </h3>
        </div>
        <h3 className="text-lg">
          <span className="font-bold ">Sala:</span> H
        </h3>
        <h3 className="text-lg">
          <span className="font-bold ">Motivo:</span> Afeccion del odio
          izquierdo{" "}
        </h3>
      </div>
    </section>
  );
};
