import { CitaCard } from "./CitaCard";
import { DataPaciente } from "../../../../data/pacientes";

interface TableCitaProps {
  dataPaciente: DataPaciente[];
}

export const TableCita = ({ dataPaciente }: TableCitaProps) => {
  return (
    <>
      <div className="relative overflow-x-auto mt-3">
        {dataPaciente.length !== 0 ? (
          <table className="w-full text-left rtl:text-right">
            {/* head */}
            <thead className="text-md font-light text-gray-6  00 uppercase bg-gray-300">
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
