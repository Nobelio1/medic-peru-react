import { MapPoint } from "../../../../assets";

export const DropFilter = ({ tipo }: { tipo: string }) => {
  return (
    <>
      <div className="flex flex-col my-5 mx-2 border-solid border-black px-4 py-2  border rounded-md">
        <label className="font-semibold  text-lg text-gray-600 mb-2">
          Seleccionar {tipo}
        </label>
        <div className="flex gap-1">
          <img src={MapPoint} className="w-5" />
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Seleciona una opcion
            </option>
            <option>Calle 2</option>
            <option>Calle 3</option>
            <option>Calle 4</option>
          </select>
        </div>
      </div>
    </>
  );
};
