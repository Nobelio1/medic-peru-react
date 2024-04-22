import { CitaCard } from "./CitaCard";
import { DataPaciente } from "../../../../data/pacientes";

interface TableCitaProps {
  dataPaciente: DataPaciente[];
}

export const TableCita = ({ dataPaciente }: TableCitaProps) => {
  return (
    <>
      <div className="relative overflow-x-auto mt-3 rounded-md border-2 border-blue-300">
        {dataPaciente.length !== 0 ? (
          <table className="w-full text-left rtl:text-right">
            {/* head */}
            <thead className="text-md font-light text-gray-6  00 uppercase bg-blue-300">
              <tr>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Paciente
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  DNI
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Celular
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Ubicacion
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Tiempo de la cita
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900"></th>
              </tr>
            </thead>
            <tbody>
              {dataPaciente.map((paciente) => (
                <CitaCard key={paciente.id} paciente={paciente} />
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="w-full text-2xl text-center mt-10 font-semibold">
            No se encontrar registros{" "}
          </h2>
        )}
      </div>
    </>
  );
};
