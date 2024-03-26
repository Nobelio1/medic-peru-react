import { HeaderHistory } from "../components/medical-history/HeaderHistory";
import { HospitalCard } from "../components/medical-history/HospitalCard";
import { SidebarPatient } from "../components/medical-history/SidebarPatient";

export const MedicalHistoryPage = () => {
  return (
    <>
      <div className="m-5 flex border-indigo-100 border-solid border">
        <div className="w-2/3">
          <HeaderHistory />
          <HospitalCard />
        </div>
        <div className="w-1/3">
          <SidebarPatient />
        </div>
      </div>
    </>
  );
};
