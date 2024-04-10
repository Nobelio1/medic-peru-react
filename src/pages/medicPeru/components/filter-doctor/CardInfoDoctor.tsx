import { IoIosStar } from "react-icons/io";
import { UserPhoto } from "../../../../assets";
import { DataDoctor } from "../../../../interfaces/medicPeru.interface";

interface CardInfoDoctorProps {
  doctor: DataDoctor;
}

export const CardInfoDoctor = ({ doctor }: CardInfoDoctorProps) => {
  return (
    <>
      <div className="border border-black border-solid rounded-md px-3 py-2 grid grid-cols-5">
        {/* Revisar border R */}
        <div className="col-span-2 flex gap-4 ">
          <div className="avatar">
            <div className="rounded-full w-36 border-solid border-blue-300 border-8">
              <img src={UserPhoto} alt="user-prueba" />
            </div>
          </div>
          <div className="flex flex-col ">
            <h2 className="mt-5 font-semibold text-gray-500 text-2xl">
              {doctor.nombres}
            </h2>
            <span className="text-md text-gray-400">{doctor.especialidad}</span>
            <span className="flex gap-2 mt-1 items-center text-md  text-gray-500">
              <IoIosStar color="red" size={15} />
              4.7 (Puntacion)
            </span>
            <span className="text-gray-400">{doctor.lugarDeTrabajo}</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <h2 className="text-xl text-gray-600 font-medium">
            Datos Personales
          </h2>
          <ul className="list-disc  text-gray-400">
            <li>{doctor.edad}</li>
            <li>{doctor.sexo}</li>
            <li>{doctor.numColegiatura}</li>
          </ul>
        </div>
        <div className="flex flex-col  justify-center gap-2">
          <h2 className="text-xl text-gray-600 font-medium">Datos Generales</h2>
          <ul className="list-disc  text-gray-400">
            <li>{doctor.provincia}</li>
            <li>{doctor.distrito}</li>
            <li>Ciudad</li>
          </ul>
        </div>
        <div className="flex flex-col  justify-center gap-2">
          <h2 className="text-xl text-gray-600 font-medium">Contacto</h2>
          <ul className="list-disc  text-gray-400">
            <li>{doctor.celular}</li>
            <li>{doctor.direccion}</li>
            <li>{doctor.email}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
