import { Navigate, Route, Routes } from "react-router-dom";
import WithSidebar from "../pages/layout/WithSidebar";
import { Dashboard, ChatPage, ChatIAPage } from "../pages/medicPeru";
import { MedicalHistoryPage } from "../pages/medicPeru/MedicalHistoryPage";
import { ProfileDoctorPage } from "../pages/medicPeru/ProfileDoctorPage";
import { FilterDoctorPage } from "../pages/medicPeru/FilterDoctorPage";
import { HistoryDetailPage } from "../pages/medicPeru/HistoryDetailPage";
import { FilterPacientePage } from "../pages/medicPeru/FilterPacientePage";
import { EditProfilePage } from "../pages/medicPeru/EditProfilePage";

export const MedicPeruRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<WithSidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat-ia" element={<ChatIAPage />} />
          <Route path="/filter-pacientes" element={<FilterPacientePage />} />
          <Route path="/medical-history" element={<MedicalHistoryPage />} />
          <Route
            path="/medical-history-detail"
            element={<HistoryDetailPage />}
          />
          <Route path="/profile-doctor" element={<ProfileDoctorPage />} />
          <Route path="/filter-doctor" element={<FilterDoctorPage />} />
          <Route path="/edit-paciente" element={<EditProfilePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
