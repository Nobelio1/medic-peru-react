import { UserPersona } from "../../../../assets";
import { IoCompassOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbBuildingHospital } from "react-icons/tb";
import { BsJournalMedical } from "react-icons/bs";

export const SidebarPatient = () => {
  return (
    <>
      <div className="p-5 w-full flex flex-col items-center gap-3">
        {/* USER */}
        <div className="text-center mb-6 font-bold">
          <div className="avatar">
            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={UserPersona} alt="user-photo" className="" />
            </div>
          </div>
          <h2 className="text-2xl mt-4 text-gray-500">Carlos Barrera</h2>
        </div>
        {/* INFO */}
        <div className="w-full px-2 mb-36">
          <h2 className="text-2xl text-gray-700 font-bold mb-3">Informacion</h2>
          <div>
            <div className="flex flex-row gap-3 item-center mb-2">
              <div>
                <IoCompassOutline size={35} />
              </div>
              <div className=" w-full border-b-2 border-indigo-100">
                <span className="text-lg text-gray-600 font-bold">
                  Reside en
                </span>
                <p className="text-gray-400 text-md mb-1">Comas</p>
              </div>
            </div>
            <div className="flex flex-row gap-3 item-center mb-2">
              <div>
                <FaUserFriends size={35} />
              </div>
              <div className=" w-full border-b-2 border-indigo-100">
                <span className="text-lg text-gray-600 font-bold">Sexo</span>
                <p className="text-gray-400 text-md mb-1">Masculino</p>
              </div>
            </div>
            <div className="flex flex-row gap-3 item-center mb-2">
              <div>
                <LiaBirthdayCakeSolid size={35} />
              </div>
              <div className=" w-full border-b-2 border-indigo-100">
                <span className="text-lg text-gray-600 font-bold">
                  Fecha de nacimiento
                </span>
                <p className="text-gray-400 text-md mb-1">
                  19 de marzo de 2001
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3 item-center mb-2">
              <div>
                <TbBuildingHospital size={35} />
              </div>
              <div className=" w-full border-b-2 border-indigo-100">
                <span className="text-lg text-gray-600 font-bold">
                  Ultima cita conmigo:
                </span>
                <p className="text-gray-400 text-md mb-1">
                  18 de agosto de 2023
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3 item-center mb-2">
              <div>
                <BsJournalMedical size={35} />
              </div>
              <div className=" w-full border-b-2 border-indigo-100">
                <span className="text-lg text-gray-600 font-bold">
                  Pastillas Recetadas
                </span>

                <ul className="  text-gray-400 text-md mb-1">
                  <li>Paracetamol</li>
                  <li>Ibupofreno</li>
                  <li>Toxinas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
