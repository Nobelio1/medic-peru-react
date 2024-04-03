import { Route, Routes } from "react-router-dom";
import { RegisterDoctor, RegisterPacient } from "../pages/auth";
import {
  LandingPage,
  AuthPage,
  Dashboard,
  ChatPage,
  ChatIAPage,
  ProfilePage,
} from "../pages/medicPeru";
import WithAuth from "../pages/layout/WithAuth";
import WithSidebar from "../pages/layout/WithSidebar";
import { MedicalHistoryPage } from "../pages/medicPeru/MedicalHistoryPage";
import { RegisterCodePage } from "../pages/auth/regisiter/RegisterCodePage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<WithAuth />}>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/register-doctor" element={<RegisterDoctor />} />
          <Route path="/register-paciente" element={<RegisterPacient />} />
          <Route path="/register-code" element={<RegisterCodePage />} />
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
