import { Routes, Route, Navigate } from "react-router-dom";
import { AllSpecialtiesPage } from "../pages/medicPeru/AllSpecialtiesPage";
import { DetailServicePage } from "../pages/medicPeru/DetailServicePage";
import { ListOfServicesPage } from "../pages/medicPeru/ListOfServicesPage";

export const EspecilidadesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllSpecialtiesPage />} />
        <Route path="/list/:id" element={<ListOfServicesPage />} />
        <Route path="/servicie/:type/:id" element={<DetailServicePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
