import { Link, useParams } from "react-router-dom";
import { allSpecialties } from "../../data/specialties";
import { getServicesSpcByUd } from "../../helpers/getServicesSpecById";
import { CardServicesSpec } from "./components/all-specialties/CardServicesSpec";
import { SlArrowLeft } from "react-icons/sl";

export const ListOfServicesPage = () => {
  const { id } = useParams();
  if (!id) throw new Error("No se encontro el id en los parametros");

  const titleSpec = allSpecialties.find((spec) => spec.id === id);
  const services = getServicesSpcByUd({ id });

  return (
    <div className="h-full w-full py-2 px-3 ">
      <Link
        className="btn btn-ghost text-2xl my-2"
        to={"/medic-peru/specialties"}
      >
        <SlArrowLeft />
        Volver
      </Link>
      <div className=" bg-white  rounded-md py-2 px-4">
        <main className="px-2 py-2">
          <h1 className="mb-10 text-2xl font-medium">
            Nuestro servicios para
            <span className="text-blue-700 text-3xl font-bold uppercase">
              {titleSpec?.onTitle}
            </span>
          </h1>
          <div className="">
            <section className="px-4 grid grid-cols-1 gap-4 justify-items-center align-items-center">
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
