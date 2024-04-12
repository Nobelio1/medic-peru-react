import { HeaderHistory } from "../components/medical-history/HeaderHistory";
import { HospitalCard } from "../components/medical-history/HospitalCard";
import { SidebarPatient } from "../components/medical-history/SidebarPatient";

export const MedicalHistoryPage = () => {
  return (
    <>
      <div className="m-5 flex">
        <div className="w-3/4">
          <HeaderHistory />
          <HospitalCard />
          <HospitalCard />
          <HospitalCard />
        </div>
        <div className="w-1/4 ml-14 rounded-md border-2 border-gray-300">
          <SidebarPatient />
        </div>
      </div>
    </>
  );
};
