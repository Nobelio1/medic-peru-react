import { useParams } from "react-router-dom";
import { allSpecialties } from "../../data/specialties";
import { getServicesSpcByUd } from "../../helpers/getServicesSpecById";
import { CardServicesSpec } from "./components/all-specialties/CardServicesSpec";

export const ListOfServicesPage = () => {
  const { id } = useParams();
  if (!id) throw new Error("No se encontro el id en los parametros");

  const titleSpec = allSpecialties.find((spec) => spec.id === id);
  const services = getServicesSpcByUd({ id });

  return (
    <div className="h-full w-full py-2 px-3 bg-slate-300">
      <button className="btn btn-outline  max-w-screen-lg bg-white mt-4">VOLVER</button>
      <div className=" bg-white  rounded-md p-4">
        <main className="px-4 py-2">
          <h1 className="mb-10 text-2xl font-medium">
            Nuestro servicios para{" "}
            <span className="text-blue-700 text-3xl font-bold uppercase">
              {titleSpec?.onTitle}
            </span>
          </h1>
          <div className="">
            <section className="px-5 grid grid-cols-1 gap-3 justify-items-center align-items-center">
              {services.map((service) => (
                <CardServicesSpec
                  key={service.desc}
                  service={service}
                  type={id}
                />
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};
