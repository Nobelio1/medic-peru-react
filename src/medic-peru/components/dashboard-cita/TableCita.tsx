import { CitaCard } from "./CitaCard";

export const TableCita = () => {
  return (
    <>
      <div className="relative overflow-x-auto mt-3">
        <table className="w-full text-left rtl:text-right">
          {/* head */}
          <thead className="text-md font-light text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Paciente
              </th>
              <th scope="col" className="px-6 py-3">
                DNI
              </th>
              <th scope="col" className="px-6 py-3">
                Celular
              </th>
              <th scope="col" className="px-6 py-3">
                Ubicacion
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Tiempo de la cita
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <CitaCard />
            <CitaCard />
            <CitaCard />
            <CitaCard />
            <CitaCard />
            <CitaCard />
            <CitaCard />
            <CitaCard />
            <CitaCard />
            <CitaCard />
          </tbody>
        </table>
      </div>
    </>
  );
};
