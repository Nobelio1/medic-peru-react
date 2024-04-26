import { UserPhoto } from "../../../../assets";
import { Citas } from "../../../../data/citas";

interface HistoryCardSmallProps {
  cita: Citas;
}

export const HistoryCardSmall = ({ cita }: HistoryCardSmallProps) => {
  return (
    <>
      <article className="w-full flex gap-2 px-2 py-3 my-2 rounded-md border-2 bg-white border-blue-300">
        <div>
          <img
            src={UserPhoto}
            alt="foto-doctor"
            className="w-20 h-20 object-cover rounded-full"
          />
        </div>
        <div className="w-full">
          <h1 className="text-xl text-gray-500 font-bold">Dr. {cita.name}</h1>
          <p className="text-md text-gray-400 mb-2">{cita.especialidad}</p>
          <p>Cita Pendiente</p>
          <div className="flex w-full mt-1 ">
            <div className="border border-teal-300 rounded-md p-3 mr-3">
              <span>{cita.fecha}</span>
            </div>
            <div className=" bg-teal-300 font-bold rounded-md p-3 text-white">
              <span>{cita.hora}</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
