import { useParams } from "react-router-dom";
import { servicesSpecialties } from "../../data/typeSpecialties";

export const DetailServicePage = () => {
  const { type, id } = useParams();

  if (!id) throw new Error("No se encontro el id en los parametros");
  if (!type) throw new Error("No se encontro el type en los parametros");

  const typeService = servicesSpecialties.find(
    (services) => services.codigo === type
  );

  if (!typeService)
    throw new Error(`No se encontro especialidad con id ${type}`);

  const service = typeService.services.find((service) => service.id === id);

  if (!service) throw new Error(`No se encontro servicio con id ${id}`);

  return (
    <div className="w-full h-screen  py-6 px-3 ">
      <div className="h-full overflow-y-auto bg-white border-2 border-blue-300 rounded-md p-4">
        <main className=" flex flex-col items-center ">
          <div className="flex items-center justify-center">
            <span className="barra-sep"></span>
            <h1 className="text-2xl font-semibold mb-6 px-2">{service.desc}</h1>
            <span className="barra-sep"></span>
          </div>
          <section className="bg-slate-100 p-2 rounded-md">
            <div className="w-auto h-auto flex gap-8 ">
              <div className="imagen-operacion">
                <img
                  src={service.image}
                  alt="imagen-de-operacion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Precio</h3>
                <div className="pb-4">
                  <p className="text-blue-400 text-medium  text-xl ">
                    {service.price}
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
                <div className="flex w-full items-center">
                  <p className="pr-3">SEDES</p>
                  <select
                    className="w-3/4 py-2 px-1 border border-gray-300  rounded-md"
                    name="sedes"
                  >
                    <option value="default">Elige una opcion</option>
                    <option value="a1">Sede 1</option>
                    <option value="a2">Sede 2</option>
                    <option value="a3">Sede 3</option>
                  </select>
                </div>
                <div className="pt-4 flex gap-4">
                  <div className="flex flex-row gap-2 border border-gray-100 w-14 justify-center py-1 px-10">
                    <button className="text-gray-400 font-semibold">-</button>
                    <span className="px-2 text-gray-400 font-semibold">1</span>
                    <button className="text-gray-400 font-semibold">+</button>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-16 flex flex-col  px-36">
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
              <ul className="list-disc flex flex-col gap-2">
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
              <button className=" bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md">
                Solcitar Cita
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
