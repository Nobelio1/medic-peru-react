import { Download } from "../../../../assets";
import { HistorialClinica } from "../../../../data/historialClinica";

interface HeaderDetailProps {
  cita: HistorialClinica;
}

export const HeaderDetail = ({ cita }: HeaderDetailProps) => {
  return (
    <section className="w-full ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">
          Cita Medica{" "}
          <span className="font-bold text-blue-800">#{cita.id}</span>
        </h1>
        <button className="btn bg-blue-500 text-lg text-white">
          Descargar ficha
          <img src={Download} alt="download-icon" className="w-6 h-6" />
        </button>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg">
          <span className="font-bold ">Centro Clinico:</span> {cita.nombre}
        </h3>
        <div className="flex gap-4">
          <h3 className="text-lg">
            <span className="font-bold ">Fecha:</span> {cita.fecha}{" "}
          </h3>
          <h3 className="text-lg">
            <span className="font-bold ">Hora:</span> {cita.hora}
          </h3>
        </div>
        <h3 className="text-lg">
          <span className="font-bold ">Sala:</span> {cita.sala}
        </h3>
        <h3 className="text-lg">
          <span className="font-bold ">Motivo:</span> {cita.motivo}
        </h3>
      </div>
    </section>
  );
};
