import { useState } from "react";
import { DataPaciente, dataPacientes } from "../../data/pacientes";
import { HearderCita } from "./components/dashboard-cita/HearderCita";
import { TableCita } from "./components/dashboard-cita/TableCita";

export const FilterPacientePage = () => {
  const [dataPaciente, setDataPaciente] =
    useState<DataPaciente[]>(dataPacientes);
  return (
    <>
      <div className="w-full h-screen py-3 px-2">
        <HearderCita setDataPaciente={setDataPaciente} />
        <div className=" height-per overflow-y-scroll">
          <TableCita dataPaciente={dataPaciente} />
        </div>
      </div>
    </>
  );
};
