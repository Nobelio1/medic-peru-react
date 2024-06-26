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
        <div className="grid grid-cols-2 gap-3">
          {loading ? (
            <div className="flex justify-center col-span-2 mt-6">
              <span className="loading loading-spinner text-info loading-lg"></span>
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
