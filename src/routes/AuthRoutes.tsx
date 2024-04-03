import { Routes, Route, Navigate } from "react-router-dom";
import {
  Login,
  Register,
  RegisterDoctor,
  RegisterPacient,
} from "../pages/auth";
import { RegisterCodePage } from "../pages/auth/regisiter/RegisterCodePage";
import WithAuth from "../pages/layout/WithAuth";

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<WithAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-paciente" element={<RegisterPacient />} />
          <Route path="/register-doctor" element={<RegisterDoctor />} />
          <Route path="/register-code" element={<RegisterCodePage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
    </>
  );
};
