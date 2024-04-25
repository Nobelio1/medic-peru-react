import { FaUserFriends } from "react-icons/fa";
import { IoCompassOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbBuildingHospital } from "react-icons/tb";
import { UserPersona } from "../../../../assets";
import { getOneDoctorByDni } from "../../../../helpers/getDoctorByDni";

interface SidebarDoctorProps {
  dni?: string;
}

export const SidebarDoctor = ({ dni }: SidebarDoctorProps) => {
  const dataPaciente = getOneDoctorByDni({ dni: dni! });

  if (!dataPaciente) {
    return <p className="text-4xl">Todo salio mal</p>;
  }

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
            Dr. {dataPaciente.nombres || "Alexander"}
          </h2>
          <h4 className="text-blue-400 font-normal">#{dni}</h4>
        </div>
        {/* INFO */}
        <div className="w-full px-2 mb-36">
          <h2 className="text-2xl text-gray-700 font-bold mb-6">Informacion</h2>
          <div>
            <div className="flex flex-row gap-3 item-center mb-2 bg-rose-200 p-2 rounded-md ">
              <div className="flex justify-center items-center">
                <IoCompassOutline size={35} color="#e11d48" />
              </div>
              <div className="w-full">
                <span className="text-lg text-rose-900 font-bold">
                  Reside en
                </span>
                <p className="text-rose-700 text-md mb-1">
                  {dataPaciente.distrito || "Comas"}
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-3 item-center mb-2 bg-lime-200 p-2 rounded-md">
              <div className="flex justify-center items-center">
                <FaUserFriends size={35} color="#65a30d" />
              </div>
              <div className=" w-full ">
                <span className="text-lg text-lime-900 font-bold">Sexo</span>
                <p className="text-lime-700 text-md mb-1">
                  {dataPaciente.sexo === "M" ? "Masculino" : "Femenino"}
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-3 item-center mb-2 bg-violet-200 p-2 rounded-md">
              <div className="flex justify-center items-center">
                <LiaBirthdayCakeSolid size={35} color="#7c3aed" />
              </div>
              <div className=" w-full ">
                <span className="text-lg text-violet-900 font-bold">
                  Fecha de nacimiento
                </span>
                <p className="text-violet-700 text-md mb-1">
                  {dataPaciente.fecNac}
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-3 item-center mb-2 bg-sky-200 p-2 rounded-md">
              <div className="flex justify-center items-center">
                <TbBuildingHospital size={35} color="#0284c7" />
              </div>
              <div className=" w-full ">
                <span className="text-lg text-sky-900 font-bold">
                  Ultima cita conmigo:
                </span>
                <p className="text-sky-700 text-md mb-1">
                  18 de agosto de 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
