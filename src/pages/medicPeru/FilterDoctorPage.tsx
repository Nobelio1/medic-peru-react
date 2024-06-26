import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import { CardInfoDoctor } from "./components/filter-doctor/CardInfoDoctor";
import { useEffect } from "react";
import { useAppStore } from "../../store/useAppStore";

export const FilterDoctorPage = () => {
  const setDoctores = useAppStore((state) => state.setDoctores);
  const doctores = useAppStore((state) => state.doctores);
  const loading = useAppStore((state) => state.loading);

  useEffect(() => {
    setDoctores();
  }, []);

  return (
    <div className="w-full px-4 mb-4">
      <div className="bg-white rounded-md px-2 ">
        <Link className="btn btn-ghost text-lg" to={"/medic-peru/"}>
          <SlArrowLeft />
          Volver
        </Link>
      </div>

      <section className="mt-4 px-2">
        {/* Card */}
        <div className="grid md:grid-cols-2 gap-4">
          {loading ? (
            <div className="w-full text-center mt-20 pb-10">
              <h1 className="text-2xl font-bold">Cargando Doctores...</h1>
            </div>
          ) : (
            doctores.map((doctor) => (
              <CardInfoDoctor key={doctor.nombre_doctor} doctor={doctor} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};
