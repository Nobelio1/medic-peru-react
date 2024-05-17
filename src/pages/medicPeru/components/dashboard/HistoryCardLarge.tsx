import { UserPhoto } from "../../../../assets";
import { Citas } from "../../../../data/citas";

interface HistoryCardLargeProps {
  cita: Citas;
}

export const HistoryCardLarge = ({ cita }: HistoryCardLargeProps) => {
  return (
    <div className="mt-3 border-b-2">
      <div className="grid grid-cols-3 items-center place-content-center bg-white px-2 py-3 gap-2">
        <div className="flex flex-col items-center justify-center">
          <img src={UserPhoto} alt="Logo" className="w-20 rounded-full mb-1" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-center font-semibold text-gray-600 roboto-thin">
              Dr. {cita.name}
            </p>
            <p className="text-sm text-gray-500 roboto-thin">
              {cita.especialidad}
            </p>
          </div>
        </div>

        <div className="justify-self-center">
          <p className="text-center text-sm roboto-thin">
            {cita.clinicalCenter}
          </p>
        </div>

        <div className="justify-self-center">
          <p className="montserrat-bold text-lg text-blue-800 font-medium roboto-thin">
            {cita.fecha}
          </p>
        </div>
      </div>
    </div>
  );
};
