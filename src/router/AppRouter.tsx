import { Route, Routes } from "react-router-dom";
import { RegisterDoctor, RegisterPacient } from "../auth";
import {
  LandingPage,
  AuthPage,
  Dashboard,
  ChatPage,
  ChatIAPage,
  ProfilePage,
} from "../medic-peru";
import WithAuth from "../auth/layout/WithAuth";
import WithSidebar from "../medic-peru/layout/WithSidebar";
import { MedicalHistoryPage } from "../medic-peru/pages/MedicalHistoryPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<WithAuth />}>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/register-doctor" element={<RegisterDoctor />} />
          <Route path="/register-paciente" element={<RegisterPacient />} />
        </Route>

        <Route element={<WithSidebar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat-ia" element={<ChatIAPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/medical-history" element={<MedicalHistoryPage />} />
        </Route>
      </Routes>
    </>
  );
};
