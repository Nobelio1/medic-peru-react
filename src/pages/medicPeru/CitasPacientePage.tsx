import { useEffect, useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import { getEventosPaciente } from "../../api/medicPeru/CitasServices";
import { Eventos } from "../../interfaces/citas.interface";

export const CitasPacientePage = () => {
  const [listaCitas, setlistaCitas] = useState<Eventos[]>([]);
  const usuario = useAppStore((state) => state.usuario);

  const getListaCitas = async () => {
    const listaCitas = await getEventosPaciente(usuario.email);
    setlistaCitas(listaCitas);
  };

  useEffect(() => {
    getListaCitas();
  }, []);

  return (
    <>
      <div className="flex justify-center mb-5 ">
        <div className="w-5/6 bg-white px-2 py-3 rounded-md shadow-sm">
          <h1 className="text-center text-2xl font-bold">Mis Citas</h1>
        </div>
      </div>
      <div className="px-10">
        {listaCitas.length === 0 ? (
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold">No tienes citas agendadas</h1>
          </div>
        ) : (
          <>
            {listaCitas.map((cita) => (
              <div
                key={cita.idCita}
                className="flex  items-center bg-white border border-gray-200 rounded-lg shadow flex-row md:max-w-xl "
              >
                <img
                  className="object-cover w-full rounded-t-lg  md:rounded-none md:rounded-s-lg"
                  src={cita.imagen_url}
                  alt="imagen_cita"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
                    {cita.nombre_servicio}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    {cita.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
