import { allSpecialties } from "../../data/specialties";
import { CardSpecialties } from "./components/all-specialties/CardSpecialties";

export const AllSpecialtiesPage = () => {
  return (
    <div className="w-full py-6 px-3  bg-slate-300">
      <button className="btn mb-2 max-w-screen-lg bg-white mt-4">VOLVER</button>
      <main className="  bg-white     rounded-md px-10 ">
        <section className=" mb-3 py-1">
          <h1 className="text-2xl text-center font-semibold mt-5 mb-4">
            Conozca a Nuestros Especialistas
          </h1>
          <p className="text-center">
            Los mejores cirujanos especialistas con equipo está formado por
            profesionales expertos en el sector sanitario, lo que garantiza la
            excelencia en el servicio, la atención personalizada y la seguridad
            médica.
          </p>
        </section>
        <section className="pb-4">
          <h2 className="text-2xl font-medium ">Especialidades</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 px-10 mt-6 height-sm overflow-y-scroll">
            {allSpecialties.map((spec) => (
              <CardSpecialties key={spec.id} specialties={spec} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
