import { MapsDemo } from "../../../../assets";

export const MapLocation = () => {
  return (
    <>
      <div className="bg-whitem mb-2">
        <h1 className="font-medium text-gray-700 text-xl my-2">Ubicacion</h1>
        <div className="bg-red-100 ">
          {/* AQUI DEBERIA ESTAR EL SERVICIO DE MAPAS, !SI HUBIERA UN SERVICIO DE MAPAS¡ */}
          <img src={MapsDemo} alt="mapa-demo" className="w-full object-fill" />
        </div>
      </div>
    </>
  );
};
