import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MapPoint } from "../../../../assets";
import { Ubigeo } from "../../../../interfaces/medicPeru.interface";
import {
  getDistritos,
  getProvincias,
} from "../../../../api/medicPeru/medicPeruService";

interface DropFilterProps {
  tipo: string;
  ubigeo?: Ubigeo[];
  dataProvincia?: Dispatch<SetStateAction<Ubigeo[]>>;
  dataDistritos?: Dispatch<SetStateAction<Ubigeo[]>>;
}

const resetArray: Ubigeo[] = [];

export const DropFilter = ({
  tipo,
  ubigeo,
  dataProvincia,
  dataDistritos,
}: DropFilterProps) => {
  const [isValidUbigeo, setIsValidUbigeo] = useState(false);

  useEffect(() => {
    if (tipo == "Departamento") {
      const isValid = ubigeo?.length === 0 ? true : false;
      setIsValidUbigeo(isValid);
    }
    if (tipo == "Provincia") {
      const isValid = ubigeo?.length === 0 ? true : false;
      setIsValidUbigeo(isValid);
    }
    if (tipo == "Distrito") {
      const isValid = ubigeo?.length === 0 ? true : false;
      setIsValidUbigeo(isValid);
    }
  }, [ubigeo]);

  const onValueUbigeo = async (id: string, ubigeo: Ubigeo[]) => {
    if (tipo == "Departamento") {
      const prov = await getProvincias({ idDep: id });
      dataProvincia!(prov);
      dataDistritos!(resetArray);
    }
    if (tipo == "Provincia") {
      const prov = ubigeo.filter((prov) => prov.idUbigeo === id);
      const dis = await getDistritos({
        idDep: prov[0].idPadre,
        idPro: prov[0].idUbigeo,
      });
      dataDistritos!(dis);
    }
  };

  return (
    <>
      <div className="flex flex-col px-2 rounded-md">
        <label className="font-semibold text-md text-blue-700 mb-2">
          Seleccionar {tipo}
        </label>
        <div className="flex gap-1 border border-blue-300 rounded-md py-3 px-2">
          <img src={MapPoint} className="w-5" />
          {ubigeo ? (
            <select
              className="w-full max-w-xs disabled:opacity-20 "
              onChange={(e) => onValueUbigeo(e.target.value, ubigeo)}
              disabled={isValidUbigeo}
            >
              <option value="">Seleciona una opcion</option>
              {ubigeo!.map((item) => (
                <option key={item.idUbigeo} value={item.idUbigeo}>
                  {item.nombre}
                </option>
              ))}
            </select>
          ) : (
            <p>cargando</p>
          )}
        </div>
      </div>
    </>
  );
};
