import { Routes, Route, Navigate } from "react-router-dom";
import { HistoryDetailPage } from "../pages/medicPeru/HistoryDetailPage";
import { MedicalHistoryPage } from "../pages/medicPeru/MedicalHistoryPage";
import { ListHistoryPage } from "../pages/medicPeru/ListHistoryPage";

export const MedicalHistoryRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MedicalHistoryPage />}>
          <Route path="/" element={<ListHistoryPage />} />
          <Route path="/detail/:detail" element={<HistoryDetailPage />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
