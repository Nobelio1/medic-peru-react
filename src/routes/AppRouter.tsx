import { Navigate, Route, Routes } from "react-router-dom";
import { MedicPeruRoutes } from "./MedicPeruRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { HomeMobilePage } from "../pages/medicPeru/HomeMobilePage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMobilePage />} />
        <Route path="/medic-peru/*" element={<MedicPeruRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
