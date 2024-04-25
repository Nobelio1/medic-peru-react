import { useState } from "react";
import { HeaderCitaPaciente } from "./components/citas-page/HeaderCitaPaciente";
import { TableCitaPaciente } from "./components/citas-page/TableCitaPaciente";
import { Citas, dataCitas } from "../../data/citas";

export const CitasPages = () => {
  const [dataCita, setDataCita] = useState<Citas[]>(dataCitas);
  return (
    <>
      <div className="w-full h-screen py-3 px-2">
        <HeaderCitaPaciente setDataCita={setDataCita} />
        <div className=" height-per overflow-y-scroll">
          <TableCitaPaciente dataCita={dataCita} />
        </div>
      </div>
    </>
  );
};
