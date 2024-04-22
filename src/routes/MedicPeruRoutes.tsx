import { Navigate, Route, Routes } from "react-router-dom";
import WithSidebar from "../pages/layout/WithSidebar";
import { Dashboard, ChatPage, ChatIAPage } from "../pages/medicPeru";
import { ProfileDoctorPage } from "../pages/medicPeru/ProfileDoctorPage";
import { FilterDoctorPage } from "../pages/medicPeru/FilterDoctorPage";
import { FilterPacientePage } from "../pages/medicPeru/FilterPacientePage";
import { EditProfilePage } from "../pages/medicPeru/EditProfilePage";
import { MedicalHistoryRoutes } from "./MedicalHistoryRoutes";

export const MedicPeruRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<WithSidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat-ia" element={<ChatIAPage />} />
          <Route path="/filter-pacientes" element={<FilterPacientePage />} />
          <Route
            path="/medical-history/:id/*"
            element={<MedicalHistoryRoutes />}
          />
          <Route path="/profile-doctor/:id" element={<ProfileDoctorPage />} />
          <Route path="/filter-doctor" element={<FilterDoctorPage />} />
          <Route path="/edit-paciente" element={<EditProfilePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

// medical-history/:id/*
