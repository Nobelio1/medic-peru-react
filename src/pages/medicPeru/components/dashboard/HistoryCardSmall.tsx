import { UserPhoto } from "../../../../assets";
import { Citas } from "../../../../data/citas";

interface HistoryCardSmallProps {
  cita: Citas;
}

export const HistoryCardSmall = ({ cita }: HistoryCardSmallProps) => {
  return (
    <>
      <article className="grid grid-cols-3 px-2 py-3 border-b-2 ">
        <div className="self-center">
          <img
            src={UserPhoto}
            alt="foto-doctor"
            className="w-36 object-cover rounded-full"
          />
        </div>
        <div className="col-span-2 pl-4 g">
          <h1 className="text-xl text-gray-600 font-bold">Dr. {cita.name}</h1>
          <p className="text-md text-gray-400 mb-2">{cita.especialidad}</p>
          <div className="flex w-full mt-1 ">
            <div className="border border-sky-300 rounded-md p-3 mr-3">
              <span className="text-gray-500">{cita.fecha}</span>
            </div>
            <div className=" bg-sky-300 font-bold rounded-md p-3 text-white">
              <span>{cita.hora}</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
