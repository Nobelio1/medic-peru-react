import { Routes, Route, Navigate } from "react-router-dom";
import { AllSpecialtiesPage } from "../pages/medicPeru/AllSpecialtiesPage";
import { DetailServicePage } from "../pages/medicPeru/DetailServicePage";
import { ListOfServicesPage } from "../pages/medicPeru/ListOfServicesPage";
import { DetalleCompraPage } from "../pages/medicPeru/DetalleCompraPage";
import { PaymentPage } from "../pages/medicPeru/PaymentPage";
import { SuccessPayPage } from "../pages/medicPeru/SuccessPayPage";

export const EspecilidadesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllSpecialtiesPage />} />
        <Route path="/list/:id" element={<ListOfServicesPage />} />
        <Route path="/servicie/:type/:id" element={<DetailServicePage />} />
        <Route path="/servicie/buy" element={<DetalleCompraPage />} />
        <Route path="/servicie/payment" element={<PaymentPage />} />
        <Route path="/servicie/success" element={<SuccessPayPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
