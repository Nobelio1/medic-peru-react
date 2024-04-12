import { IoIosStar } from "react-icons/io";
import { UserPersona } from "../../../../assets";
import { TestimonialItem } from "./TestimonialItem";
import { DataDoctor } from "../../../../interfaces/medicPeru.interface";
import { useEffect, useState } from "react";
import { dataPrueba } from "../../../../data";

export const HeroDoctor = ({ dni }: { dni: string }) => {
  const [doctor, setDoctor] = useState<DataDoctor>();

  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = () => {
    const dataDoctor = dataPrueba.find((doctor) => doctor.dni === dni);
    setDoctor(dataDoctor);
  };

  return (
    <>
      <div className="bg-white rounded-md w-11/12">
        {/* user y info */}
        <div className="flex border-b-2 border-gray-200">
          {/* user */}
          <div className="w-1/3 h-80">
            <div className="border-r-2 h-full justify-center flex flex-col items-center border-gray-200">
              <div className="avatar">
                <div className="w-40 border-solid border-4 border-sky-500 rounded-full">
                  <img src={UserPersona} />
                </div>
              </div>
              <h2 className="mt-5 font-semibold text-gray-500 text-xl">
                {doctor?.nombres}
              </h2>
              <span className="text-sm text-gray-400">
                {doctor?.especialidad}
              </span>
              <span className="flex gap-2 mt-1 items-center text-sm  text-gray-500">
                <IoIosStar color="red" size={15} />
                4.7 (Puntacion)
              </span>
            </div>
          </div>
          {/* info */}
          <div className="w-2/3 h-80">
            <div className="p-3 flex flex-col justify-between w-full h-full flex-1 ">
              <div className="my-2">
                <h3 className=" text-gray-500 text-md font-semibold">
                  Biografia
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.consectetur adipisicing elit
                </p>
              </div>
              <div className="flex justify-between my-4">
                <div className="w-1/2 mr-10">
                  <h3 className=" text-gray-500 text-md font-semibold">
                    Centro de Salud
                  </h3>
                  <p>{doctor?.lugarDeTrabajo}</p>
                </div>
                <div className="w-1/2">
                  <h3 className=" text-gray-500 text-md font-semibold">
                    Colegiatura
                  </h3>
                  <p>{doctor?.numColegiatura} </p>
                </div>
              </div>
              <div className="my-2">
                <h3 className=" text-gray-500 text-md font-semibold">
                  Contactos
                </h3>
                <p>Celular: {doctor?.celular}</p>
                <p>Email: {doctor?.email}</p>
                <p>Direccion: {doctor?.direccion}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Opiniones */}
        <div className="h-80">
          <div className="flex justify-between p-3 mt-3 mx-4 items-center">
            <span className="text-lg font-medium text-gray-600">Opiniones</span>
            <button className="text-sm transition-all ease-in-out delay-150 hover:underline duration-300">
              Ver todo
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-4 mt-3  mb-8 md:flex-row md:mb-0 flex-between">
            {/* FALTA DATA PARA SER DINAMICO */}
            <TestimonialItem />
            <TestimonialItem />
            <TestimonialItem />
          </div>
        </div>
      </div>
    </>
  );
};
