import { IoIosStar } from "react-icons/io";
import { UserPersona } from "../../../../assets";
import { TestimonialItem } from "./TestimonialItem";
import {
  DataDoctor,
  idOpinions,
} from "../../../../interfaces/medicPeru.interface";
import { useEffect, useState } from "react";
import { dataPrueba } from "../../../../data";
import { getOpinionsByDni } from "../../../../helpers/getOpinionsByDni";

export const HeroDoctor = ({ dni }: { dni: string }) => {
  const [doctor, setDoctor] = useState<DataDoctor>();
  const [opinion, setOpinion] = useState<idOpinions>();

  useEffect(() => {
    getDoctor();
    getOpionions();
  }, []);

  const getDoctor = () => {
    const dataDoctor = dataPrueba.find((doctor) => doctor.dni === dni);
    setDoctor(dataDoctor);
  };

  const getOpionions = () => {
    const opiniones = getOpinionsByDni({ dni: dni });
    setOpinion(opiniones);
  };

  return (
    <>
      <section>
        {/* user */}
        <article className="mt-4">
          <div className="justify-center flex flex-col items-center ">
            <div className="avatar">
              <div className="w-40 border-solid border-4 border-sky-500 rounded-full">
                <img src={UserPersona} />
              </div>
            </div>
            <h2 className="mt-2 font-semibold text-gray-700 text-3xl">
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
        </article>
        {/* info */}
        <article className="mt-4 w-full">
          <div className="flex flex-col">
            <div className="my-2">
              <h3 className=" text-gray-700 text-xl font-semibold">
                Biografia
              </h3>
              <p className="text-gray-600 mt-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi distinctio non accusantium odit minus est.
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <div className="w-1/2 mr-10">
                <h3 className=" text-gray-700 text-xl font-semibold">
                  Centro de Salud
                </h3>
                <p className="text-gray-600 mt-1">{doctor?.lugarDeTrabajo}</p>
              </div>
              <div className="w-1/2">
                <h3 className=" text-gray-700 text-xl font-semibold">
                  Colegiatura
                </h3>
                <p className="text-gray-600 mt-1">{doctor?.numColegiatura} </p>
              </div>
            </div>
            <div className="mt-3">
              <h3 className=" text-gray-700 text-xl font-semibold">
                Contactos
              </h3>
              <div className="mt-1">
                <p>Celular: {doctor?.celular}</p>
                <p>Email: {doctor?.email}</p>
                <p>Direccion: {doctor?.direccion}</p>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* Opiniones */}
      <section>
        <div className="flex justify-between items-center mt-6">
          <span className="text-2xl font-medium text-gray-700">Opiniones</span>
          <button className="text-sm transition-all ease-in-out delay-150 hover:underline duration-300">
            Ver todo
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-3  mb-8 md:flex-row md:mb-0 flex-between">
          {opinion?.opiniones.map((opinion) => (
            <TestimonialItem key={opinion.author} opinion={opinion} />
          ))}
        </div>{" "}
      </section>
    </>
  );
};
