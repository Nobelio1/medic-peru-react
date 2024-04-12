import { HeroDoctor } from "./components/profile-doctor/HeroDoctor";
import { MapLocation } from "./components/profile-doctor/MapLocation";
import { SidebarDate } from "./components/profile-doctor/SidebarDate";

export const ProfileDoctorPage = () => {
  const dniDoctor = localStorage.getItem("doctor_dni");

  return (
    <>
      <div className="w-full h-screen justify-center flex overflow-hidden montserrat-regular pr-8">
        <div className="w-3/4 h-full items-center flex flex-col py-10 ">
          <HeroDoctor dni={dniDoctor!} />
          <MapLocation />
        </div>
        <div className="w-1/4 h-full flex justify-center py-10 ">
          {/* SE QUEDA FIXED PARA MOSTRAR DATA */}
          <SidebarDate />
        </div>
      </div>
    </>
  );
};
