import { Field, useField } from "formik";
import { MapPoint } from "../../../assets";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Ubigeo } from "../../../interfaces/medicPeru.interface";
import {
  getProvincias,
  getDistritos,
} from "../../../api/medicPeru/medicPeruService";

interface selectUbigeoProp {
  tipo: string;
  ubigeo?: Ubigeo[];
  name: string;
  dataProvincia?: Dispatch<SetStateAction<Ubigeo[]>>;
  dataDistritos?: Dispatch<SetStateAction<Ubigeo[]>>;
}

const resetArray: Ubigeo[] = [];

export const SelectUbigeo = ({
  tipo,
  ubigeo,
  name,
  dataProvincia,
  dataDistritos,
}: selectUbigeoProp) => {
  const [meta] = useField(name);

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

  useEffect(() => {
    onValueUbigeo(meta.value, ubigeo!);
  }, [meta.value]);

  return (
    <div className="flex flex-col my-2">
      <span className="font-medium">
        {name.replace(/\b\w/g, (item) => item.toUpperCase())}:{" "}
      </span>

      <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
        <img src={MapPoint} alt="Logo" className="w-5 mr-2" />
        {ubigeo ? (
          <Field as="select" name={name} className="flex-1 focus:outline-none">
            <option value="">--Selecione--</option>
            {ubigeo!.map((item) => (
              <option key={item.idUbigeo} value={item.idUbigeo}>
                {item.nombre}
              </option>
            ))}
          </Field>
        ) : (
          <p>cargando</p>
        )}
      </label>
    </div>
  );
};
