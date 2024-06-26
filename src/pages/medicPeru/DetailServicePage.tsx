import { useNavigate, useParams } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { useAppStore } from "../../store/useAppStore";
import { CitaActiva } from "../../store/citasSlice";

export const DetailServicePage = () => {
  const { type, id } = useParams();
  const nagivate = useNavigate();
  const setCitaActiva = useAppStore((state) => state.setCitaActiva);

  if (!id) throw new Error("No se encontro el id en los parametros");
  if (!type) throw new Error("No se encontro el type en los parametros");

  const service: CitaActiva = {
    id_especialidad: Number(type),
    id_servico: Number(id),
  };
  setCitaActiva(service);

  const backPage = () => {
    nagivate(-1);
  };

  const handleBuy = () => {
    nagivate("/medic-peru/specialties/servicie/buy");
  };

  return (
    <div className="w-auto py-2 px-2 ">
      <div className="bg-white border-2 rounded-md p-4">
        <button onClick={backPage} className="btn btn-ghost text-lg ">
          <SlArrowLeft />
          Volver
        </button>
        <main className=" flex flex-col items-center ">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl text-center font-semibold mb-6 px-2">
              {/* {service.desc}  */}
              hola mundo
            </h1>
          </div>

          <section className=" bg-slate-100 p-2 rounded-md">
            {/* seccion uno */}
            <div className="w-full grid md:grid-cols-2 gap-8 ">
              <div className="">
                <img src="" alt="imagen-de-operacion" className="w-full" />
              </div>
              {/* seccion 2 */}
              <div>
                <h3 className="text-lg font-bold mb-2">Precio</h3>
                <div className="pb-4">
                  <p className="text-blue-400 text-medium  text-xl ">
                    hola mundo
                  </p>
                </div>
                <div className="pt-4 pb-8">
                  <div className="grid grid-cols-2 grid-rows-5 gap-y-3">
                    <p className="font-medium">Hospitalización:</p>
                    <p>01 Día de hospitalización</p>
                    <p className="font-medium">Duración de la Cirugía:</p>
                    <p>30 - 40 min</p>
                    <p className="font-medium">Anestesia:</p>
                    <p>General</p>
                    <p className="font-medium">Recuperación Total:</p>
                    <p>04 Semanas</p>
                    <p className="font-medium">Tipo de Cirugía:</p>
                    <p>Laparoscópica</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-16 flex flex-col  px-4">
            <div className="pb-10">
              <div className="flex items-center justify-center">
                <span className="barra-sep"></span>
                <h3 className="text-2xl font-semibold mb-6 text-center px-2">
                  ¿Qué incluye?
                </h3>
                <span className="barra-sep"></span>
              </div>
              <p className="text-gray-500 text-justify">
                Incluye los honorarios de los cirujanos y el anestesiólogo,
                demuestra nuestro compromiso de brindar atención médica de
                calidad y accesible para todos. Estamos aquí para apoyar a
                nuestros pacientes en cada paso del camino, desde la consulta
                inicial hasta la recuperación postoperatoria, y nos enorgullece
                ser parte de su viaje hacia la salud y el bienestar.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <span className="barra-sep"></span>
                <h3 className="text-2xl font-semibold mb-6 text-center px-2">
                  ¿Qué no incluye?
                </h3>
                <span className="barra-sep"></span>
              </div>

              <p className="text-gray-500 text-justify pb-2 ">
                Requisitos para evaluar el diagnóstico del paciente.
              </p>
              <ul className="flex flex-col gap-2 text-gray-500">
                <li>
                  Consulta Médica <span>(s/. 50.00)</span>
                </li>
                <li>
                  Exámenes de laboratorio preoperatorio
                  <span>(s/. 150.00)</span>
                </li>
                <li>
                  Riesgo Cardiológico <span>(s/. 100.00)</span>
                </li>
                <li>
                  Ecografía Abdominal Actualizada <span>(s/. 100.00)</span>
                </li>
              </ul>
            </div>
            <div className=" mt-10 w-full h-full flex justify-center">
              <button
                onClick={handleBuy}
                className="w-full text-lg bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded-md"
              >
                Reservar
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
