import { MapPoint } from "../../../../assets";
import { especialidad } from "../../../../data/especialidades";
import { getDoctorBySpec } from "../../../../helpers/getDoctorBySpec";
import { DataDoctor } from "../../../../interfaces/medicPeru.interface";

interface DropFilterGenericProps {
  tipo: string;
  dataDoctor: React.Dispatch<React.SetStateAction<DataDoctor[]>>;
}

export const DropFilterGeneric = ({
  tipo,
  dataDoctor,
}: DropFilterGenericProps) => {
  const onSpecialty = (specialty: string) => {
    const filterSpecialty = getDoctorBySpec({ spec: specialty });
    dataDoctor(filterSpecialty);
  };

  return (
    <>
      <div className="flex flex-col my-5 mx-2 px-4 rounded-md">
        <label className="font-semibold text-md text-blue-700 mb-2">
          Seleccionar {tipo}
        </label>
        <div className="flex gap-1 border border-blue-300 rounded-md py-3 px-2">
          {/* CAMBIARLE DE COLOR */}
          <img src={MapPoint} className="w-5" />
          <select
            className="w-full max-w-xs "
            onChange={(e) => onSpecialty(e.target.value)}
          >
            <option value="">Seleciona una opcion</option>
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
