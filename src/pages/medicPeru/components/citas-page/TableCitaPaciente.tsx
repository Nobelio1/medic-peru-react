import { Citas } from "../../../../data/citas";
import { CitaCardPaciente } from "./CitaCardPaciente";

interface TablaCitaPacienteProps {
  dataCita: Citas[];
}

export const TableCitaPaciente = ({ dataCita }: TablaCitaPacienteProps) => {
  return (
    <>
      <div className="relative overflow-x-auto mt-3 rounded-md border-2 border-blue-300">
        {dataCita.length !== 0 ? (
          <table className="w-full text-left rtl:text-right">
            {/* head */}
            <thead className="text-md font-light text-gray-6  text-center 00 uppercase bg-blue-300">
              <tr>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Doctor
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  ID Cita
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Especialidad
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Fecha / Hora
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Centro Clinico
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Tiempo de la cita
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3 text-blue-900"></th>
              </tr>
            </thead>
            <tbody>
              {dataCita.map((cita) => (
                <CitaCardPaciente key={cita.idCita} cita={cita} />
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
