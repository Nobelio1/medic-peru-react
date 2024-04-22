import { MapsDemo } from "../../../../assets";

export const MapLocation = () => {
  return (
    <>
      <div className="mt-5 w-11/12 rounded-md border-2 border-blue-300 h-64 bg-white p-4">
        <h1 className="font-medium text-gray-500 text-lg mb-3">Ubicacion</h1>
        <div className="bg-red-100 h-4/5">
          {/* AQUI DEBERIA ESTAR EL SERVICIO DE MAPAS, !SI HUBIERA UN SERVICIO DE MAPAS¡ */}
          <img
            src={MapsDemo}
            alt="mapa-demo"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </>
  );
};
