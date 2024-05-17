import { UserPersona } from "../../../../assets";
import { IoCompassOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbBuildingHospital } from "react-icons/tb";
import { BsJournalMedical } from "react-icons/bs";
import { getPacienteByDni } from "../../../../helpers/getPacienteByDni";
import { InfoPacienteCard } from "./InfoPacienteCard";

interface SidebarPatientProps {
  dni?: string;
}

export const SidebarPatient = ({ dni }: SidebarPatientProps) => {
  const dataPaciente = getPacienteByDni({ dni: dni! });

  return (
    <>
      <aside className="p-5 w-full h-full flex flex-col items-center gap-3 bg-white border-2 rounded-lg border-blue-300">
        {/* USER */}
        <div className="text-center mb-6 font-bold">
          <div className="avatar">
            <div className="w-56 rounded-full border-4 border-blue-500">
              <img src={UserPersona} alt="user-photo" />
            </div>
          </div>
          <h2 className="text-2xl mt-4 text-gray-700">
            {dataPaciente[0].nombre || "Alexander"}
          </h2>
          <h4 className="text-blue-400 font-normal">#{dni}</h4>
        </div>
        {/* INFO */}
        <div className="w-full px-2 mb-36">
          <h2 className="text-2xl text-gray-700 font-bold mb-6">Informacion</h2>
          <div>
            <InfoPacienteCard
              backgroundColor={"bg-blue-50"}
              icon={<IoCompassOutline size={35} color="#2563eb" />}
              title={"Reside en"}
              titleColor={"text-blue-900 "}
              subtitle={dataPaciente[0].ubicacion || "Comas"}
              subtitleColor={"text-blue-700"}
            />
            <InfoPacienteCard
              backgroundColor={"bg-blue-50"}
              icon={<FaUserFriends size={35} color="#2563eb" />}
              title={"Sexo"}
              titleColor={"text-blue-900 "}
              subtitle={"Masculino"}
              subtitleColor={"text-blue-700"}
            />
            <InfoPacienteCard
              backgroundColor={"bg-blue-50"}
              icon={<LiaBirthdayCakeSolid size={35} color="#2563eb" />}
              title={"Fecha de nacimiento"}
              titleColor={"text-blue-900 "}
              subtitle={"19 de marzo de 2001"}
              subtitleColor={"text-blue-700"}
            />
            <InfoPacienteCard
              backgroundColor={"bg-blue-50"}
              icon={<TbBuildingHospital size={35} color="#2563eb" />}
              title={"Reside en"}
              titleColor={"text-blue-900 "}
              subtitle={dataPaciente[0].ubicacion || "Comas"}
              subtitleColor={"text-blue-700"}
            />
            <InfoPacienteCard
              backgroundColor={"bg-blue-50"}
              icon={<BsJournalMedical size={35} color="#2563eb" />}
              title={"Ultima cita conmigo:"}
              titleColor={"text-blue-900 "}
              subtitle={"18 de agosto de 2023"}
              subtitleColor={"text-blue-700"}
            />
          </div>
        </div>
      </aside>
    </>
  );
};
