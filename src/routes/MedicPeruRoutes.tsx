import { Navigate, Route, Routes } from "react-router-dom";
import WithSidebar from "../pages/layout/WithSidebar";
import {
  Dashboard,
  ChatPage,
  ChatIAPage,
  ProfilePage,
} from "../pages/medicPeru";
import { MedicalHistoryPage } from "../pages/medicPeru/MedicalHistoryPage";
import { ProfileDoctorPage } from "../pages/medicPeru/ProfileDoctorPage";

export const MedicPeruRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<WithSidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat-ia" element={<ChatIAPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/medical-history" element={<MedicalHistoryPage />} />
          <Route path="/profile-doctor" element={<ProfileDoctorPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
