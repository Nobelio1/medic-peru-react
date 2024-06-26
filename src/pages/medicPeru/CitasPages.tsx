import { CalendarioEventos } from "../../utils/CalendarioEventos";

export const CitasPages = () => {
  return (
    <>
      <div className=" flex justify-center mb-5 ">
        <div className="w-5/6 bg-white px-2 py-3 rounded-md shadow-sm">
          <h1 className="text-center text-2xl font-bold">Mis Citas</h1>
        </div>
      </div>
      <CalendarioEventos />
    </>
  );
};
