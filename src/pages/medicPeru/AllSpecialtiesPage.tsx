import { allSpecialties } from "../../data/specialties";
import { CardSpecialties } from "./components/all-specialties/CardSpecialties";

export const AllSpecialtiesPage = () => {
  return (
    <div className="w-full h-screen py-6 px-3 overflow-hidden">
      <main className="overflow-hidden h-full bg-white border-2 border-blue-300 rounded-md px-10 ">
        <section className=" mb-8 py-1">
          <h1 className="text-2xl font-semibold mt-5 mb-4">
            Conozca a Nuestros Especialistas
          </h1>
          <p className="text-lg">
            Los mejores cirujanos especialistas con equipo está formado por
            profesionales expertos en el sector sanitario, lo que garantiza la
            excelencia en el servicio, la atención personalizada y la seguridad
            médica.
          </p>
        </section>
        <section className="pb-4">
          <h2 className="text-2xl font-medium ">Especialidades</h2>
          <div className="grid gap-3 grid-cols-3 px-10 mt-6 height-sm overflow-y-scroll">
            {allSpecialties.map((spec) => (
              <CardSpecialties key={spec.id} specialties={spec} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
