import { Navigate, useParams } from "react-router-dom";
import { HeroDoctor } from "./components/profile-doctor/HeroDoctor";
import { MapLocation } from "./components/profile-doctor/MapLocation";
import { SidebarDate } from "./components/profile-doctor/SidebarDate";

export const ProfileDoctorPage = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to={"/medic-peru/filter-doctor"} />;
  }

  return (
    <>
      <div className="w-full h-screen justify-center flex overflow-hidden montserrat-regular px-4">
        <div className="w-3/4 h-full items-center flex flex-col py-10 ">
          <HeroDoctor dni={id} />
          <MapLocation />
        </div>
        <div className="w-1/4 h-full flex justify-center py-10 ">
          <SidebarDate />
        </div>
      </div>
    </>
  );
};
