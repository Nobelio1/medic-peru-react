import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/medicPeru";
import { MedicPeruRoutes } from "./MedicPeruRoutes";
import { AuthRoutes } from "./AuthRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/medic-peru/*" element={<MedicPeruRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
