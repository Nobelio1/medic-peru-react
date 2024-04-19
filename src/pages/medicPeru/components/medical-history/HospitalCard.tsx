import { Logo } from "../../../../assets";
import { HistorialClinica } from "../../../../data/historialClinica";

interface HospitalCardProps {
  visita: HistorialClinica;
}

export const HospitalCard = ({ visita }: HospitalCardProps) => {
  return (
    <>
      <article className="grid grid-cols-5 border-2 rounded-2xl border-gray-300 w-full ">
        <section className="flex justify-center  ">
          <img src={Logo} width={150} />
        </section>

        <section className="col-span-2 w-full h-full text-left flex flex-col justify-start py-3">
          <div className="font-bold text-xl text-gray-700 mb-2">
            {visita.nombre}
          </div>
          <div className="text-gray-500">
            <span className="text-gray-700 font-semibold">Dia: </span>
            {visita.fecha}
          </div>
          <div className="text-gray-500">
            <span className="text-gray-700 font-semibold">Hora: </span>
            {visita.hora}
          </div>
          <div className="text-gray-500">
            <span className="text-gray-700 font-semibold">ID: </span>{" "}
            {visita.id}
          </div>
        </section>

        <section className="col-span-2  w-full h-full flex flex-col justify-start py-3  text-left ">
          <div className="font-bold text-xl text-gray-700 mb-2">Motivos:</div>
          <div className="text-gray-500">{visita.motivo}</div>
        </section>
      </article>
    </>
  );
};
