import { Navigate, Route, Routes } from "react-router-dom";
import WithSidebar from "../pages/layout/WithSidebar";
import { Dashboard, ChatPage, ChatIAPage } from "../pages/medicPeru";
import { ProfileDoctorPage } from "../pages/medicPeru/ProfileDoctorPage";
import { FilterDoctorPage } from "../pages/medicPeru/FilterDoctorPage";
import { FilterPacientePage } from "../pages/medicPeru/FilterPacientePage";
import { EditProfilePage } from "../pages/medicPeru/EditProfilePage";
import { MedicalHistoryRoutes } from "./MedicalHistoryRoutes";
import { CitasPages } from "../pages/medicPeru/CitasPages";
import { CitaDetallePage } from "../pages/medicPeru/CitaDetallePage";
import { EspecilidadesRoutes } from "./EspecilidadesRoutes";

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
          <Route path="/specialties/*" element={<EspecilidadesRoutes />} />
          <Route path="/profile-doctor/:id" element={<ProfileDoctorPage />} />
          <Route path="/filter-doctor" element={<FilterDoctorPage />} />
          <Route path="/cita-medica" element={<CitasPages />} />
          <Route path="/cita-detalle/:id" element={<CitaDetallePage />} />
          <Route path="/edit-paciente" element={<EditProfilePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
