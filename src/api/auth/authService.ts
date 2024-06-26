import {
  LoginRes,
  LoginIn,
  LoginOut,
  RegisterUserIn,
  RegisterUserOut,
} from "../../interfaces/auth.inteface";
import { environment } from "../environment";

interface RegisterUserProps {
  user: RegisterUserIn;
}

interface LoginUserProps {
  user: LoginIn;
}

export const registerUser = async ({ user }: RegisterUserProps) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/sesion/crearUsuario`,
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response: RegisterUserOut = await request.json();

    if (response.code !== "000") {
      return response.message;
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw "Algo salio mal";
  }
};

export const loginUser = async ({ user }: LoginUserProps) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/sesion/iniciar/${user.username}/${user.password}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let response: LoginOut = await request.json();

    if (response.code !== "000") {
      const res: LoginRes[] = []
      return res
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw "Algo salio mal";
  }
};
