import { Field, useField } from "formik";
import { MapPoint } from "../../../assets";
import { useEffect, useMemo } from "react";
import { departamentos } from "../../../data/departamentos";
import { provincias } from "../../../data/provincias";
import { distritos } from "../../../data/distritos";

interface selectUbigeoProp {
  name: string;
  setChange: React.Dispatch<React.SetStateAction<string>>;
  ubigeo?: string;
  value: string;
}

export const SelectUbigeo = ({
  name,
  setChange,
  value,
  ubigeo,
}: selectUbigeoProp) => {
  const [meta] = useField(name);

  const data = useMemo(() => {
    let newData = departamentos;

    if (ubigeo !== "") {
      if (value === "2") {
        newData = provincias[ubigeo!];
      }
      if (value === "3") {
        newData = distritos[ubigeo!];
      }
    }

    return newData;
  }, [ubigeo, value]);

  const isUbigeoValid = () => {
    // if (meta.value === "") {
    //   setChange("");
    //   ubigeo = "";
    //   return;
    // }
    setChange(meta.value);
  };

  useEffect(() => {
    isUbigeoValid();
  }, [meta]);

  return (
    <div className="flex flex-col my-2">
      <span className="font-medium">
        {name.replace(/\b\w/g, (item) => item.toUpperCase())}:{" "}
      </span>

      <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
        <img src={MapPoint} alt="Logo" className="w-5 mr-2" />
        <Field as="select" name={name} className="flex-1 focus:outline-none">
          <option value="">--Selecione--</option>
          {data.map((item) => (
            <option key={item.id_ubigeo} value={item.id_ubigeo}>
              {item.nombre_ubigeo}
            </option>
          ))}
        </Field>
      </label>
    </div>
  );
};
