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
    <div className="w-full h-screen py-6 px-3 overflow-hidden">
      <div className="overflow-hidden h-full bg-white border-2 border-blue-300 rounded-md p-4">
        <main className="px-6 py-2">
          <h1 className="mb-10 text-2xl font-medium">
            Nuestro servicios para{" "}
            <span className="text-blue-700 text-3xl font-bold uppercase">
              {titleSpec?.onTitle}
            </span>
          </h1>
          <div className="height-per3 overflow-y-scroll">
            <section className="px-16 grid grid-cols-3 gap-3 justify-items-center align-items-center">
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
