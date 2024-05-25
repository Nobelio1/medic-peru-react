import { Navigate, useParams } from "react-router-dom";
import { HeroDoctor } from "./components/profile-doctor/HeroDoctor";
import { MapLocation } from "./components/profile-doctor/MapLocation";

export const ProfileDoctorPage = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to={"/medic-peru/filter-doctor"} />;
  }

  return (
    <>
      <div className="w-full px-4 mb-4">
        <div className="bg-white rounded-md py-2 px-4">
          <HeroDoctor dni={id} />
        </div>
        <div className="bg-white rounded-md mt-4 py-2 px-4">
          <MapLocation />
        </div>
        <div className="mt-4">
          <button className="btn bg-blue-700 w-full hover:bg-blue-900 text-white text-xl">
            Agendar cita
          </button>
        </div>
      </div>
    </>
  );
};
