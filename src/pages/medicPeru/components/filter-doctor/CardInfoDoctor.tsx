import { IoIosStar } from "react-icons/io";
import { UserPhoto } from "../../../../assets";

export const CardInfoDoctor = () => {
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
              Alexander Doctor
            </h2>
            <span className="text-md text-gray-400">Dr. Pediatra</span>
            <span className="flex gap-2 mt-1 items-center text-md  text-gray-500">
              <IoIosStar color="red" size={15} />
              4.7 (Puntacion)
            </span>
            <span className="text-gray-400">
              Egresado de la Universidad Privada Cayetano Heredia
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <h2 className="text-xl text-gray-600 font-medium">Experiencia</h2>
          <ul className="list-disc  text-gray-400">
            <li>Manejo en caso de muerte</li>
            <li>Muerte</li>
            <li>Muerte</li>
          </ul>
        </div>
        <div className="flex flex-col  justify-center gap-2">
          <h2 className="text-xl text-gray-600 font-medium">Idiomas</h2>
          <ul className="list-disc  text-gray-400">
            <li>Idioma 1</li>
            <li>Idioma 2 </li>
            <li>Idioma 3 </li>
          </ul>
        </div>
        <div className="flex flex-col  justify-center gap-2">
          <h2 className="text-xl text-gray-600 font-medium">Contacto</h2>
          <ul className="list-disc  text-gray-400">
            <li>225588996</li>
            <li>prueba@prueba.com</li>
            <li>prueba@prueba.com</li>
          </ul>
        </div>
      </div>
    </>
  );
};
