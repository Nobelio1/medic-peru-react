import { MapPoint } from "../../../../assets";
import { especialidad } from "../../../../data/especialidades";
import { getDoctorBySpec } from "../../../../helpers/getDoctorBySpec";
import { DataDoctor } from "../../../../interfaces/medicPeru.interface";

interface DropFilterProps {
  tipo: string;
  dataDoctor: React.Dispatch<React.SetStateAction<DataDoctor[]>>;
}

export const DropFilter = ({ tipo, dataDoctor }: DropFilterProps) => {
  const onSpecialty = (specialty: string) => {
    const filterSpecialty = getDoctorBySpec({ spec: specialty });
    dataDoctor(filterSpecialty);
  };

  return (
    <>
      <div className="flex flex-col my-5 mx-2 border-solid border-black px-4 py-2  border rounded-md">
        <label className="font-semibold  text-lg text-gray-600 mb-2">
          Seleccionar {tipo}
        </label>
        <div className="flex gap-1">
          <img src={MapPoint} className="w-5" />
          <select
            className="select select-ghost w-full max-w-xs"
            onChange={(e) => onSpecialty(e.target.value)}
          >
            <option selected value="">
              Seleciona una opcion
            </option>
            {especialidad.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
