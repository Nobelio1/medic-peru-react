import { IoIosStar } from "react-icons/io";
import { UserPhoto } from "../../../../assets";
import { DataDoctor } from "../../../../interfaces/medicPeru.interface";
import { useNavigate } from "react-router-dom";

interface CardInfoDoctorProps {
  doctor: DataDoctor;
}

export const CardInfoDoctor = ({ doctor }: CardInfoDoctorProps) => {
  const navigate = useNavigate();

  const handleProfileDoctor = () => {
    localStorage.setItem("doctor_dni", doctor.dni);
    navigate(`/medic-peru/profile-doctor/${doctor.dni}`);
  };

  return (
    <>
      <div className="border-2 bg-sky-100 border-blue-300 hover:bg-blue-100 border-solid rounded-md p-2 grid md:grid-cols-5">
        {/* Foto y Nombre */}
        <div className="col-span-2 flex justify-center  md:justify-normal gap-4">
          <div className="avatar">
            <div className="rounded-full w-36">
              <img src={UserPhoto} alt="user-prueba" />
            </div>
          </div>
          <div className="flex flex-col">
            <button onClick={handleProfileDoctor}>
              <h2 className="mt-5 text-start font-semibold text-gray-600 text-2xl hover:text-black hover:underline hover:underline-offset-1">
                {doctor.nombres}
              </h2>
            </button>
            <span className="text-md text-gray-400">{doctor.especialidad}</span>
            <span className="flex gap-2 mt-1 items-center text-md  text-gray-500">
              <IoIosStar color="red" size={15} />
              4.7 (Puntacion)
            </span>
            <span className="text-gray-400">{doctor.lugarDeTrabajo}</span>
          </div>
        </div>
        {/* Datos Personales */}
        <div className="mt-2 col-span-2 md:col-span-3 grid md:grid-cols-3 ">
          <div className="flex flex-col w-full justify-center gap-2">
            <h2 className="text-xl text-gray-600 font-medium">
              Datos Personales
            </h2>
            <ul className=" text-gray-400">
              <li>
                <span className="text-gray-600 ">Edad: </span>
                {doctor.edad}
              </li>
              <li>
                <span className="text-gray-600 ">Genero: </span>
                {doctor.sexo}
              </li>
              <li>
                <span className="text-gray-600 ">Colegiatura: </span>
                {doctor.numColegiatura}
              </li>
            </ul>
          </div>
          <div className="flex flex-col  justify-center gap-2">
            <h2 className="text-xl text-gray-600 font-medium">Residencia</h2>
            <ul className=" text-gray-400">
              <li>
                <span className="text-gray-600 ">Provincia: </span>
                {doctor.provincia}
              </li>
              <li>
                <span className="text-gray-600 ">Distrito: </span>
                {doctor.distrito}
              </li>
              <li>
                <span className="text-gray-600 ">Cuidad: </span>Ciudad
              </li>
            </ul>
          </div>
          <div className="flex flex-col  justify-center gap-2">
            <h2 className="text-xl text-gray-600 font-medium">Contacto</h2>
            <ul className=" text-gray-400">
              <li>
                <span className="text-gray-600 ">Celular: </span>
                {doctor.celular}
              </li>
              <li>
                <span className="text-gray-600 ">Direccion: </span>
                {doctor.direccion}
              </li>
              <li>
                <span className="text-gray-600 ">Email: </span>
                {doctor.email}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
