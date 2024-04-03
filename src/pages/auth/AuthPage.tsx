import { useRecoilValue } from "recoil";
import { Login, Register } from "./index";
import authScreenAtom from "../../utils/atoms/authAtom";

//!---------------------------------------------------------------------------------!//

export const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);

  //!---------------------------------------------------------------------------------!//

  return <>{authScreenState === "login" ? <Login /> : <Register />}</>;
};

//!---------------------------------------------------------------------------------!//
