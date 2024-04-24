import { LoginIn, RegisterUser, Token } from "../../interfaces/auth.inteface";
import { environment } from "../environment";

interface RegisterUserProps {
  user: RegisterUser;
}

interface Response {
  code: string;
  message: string;
}

interface LoginUserProps {
  user: LoginIn;
}

interface LoginResponse extends Response {
  data: Token;
}

export const registerUser = async ({ user }: RegisterUserProps) => {
  //todo: agregar a un validador
  user.rol = "Paciente";
  user.nombres = user.nombres.replace(/\b\w/g, (item) => item.toUpperCase());
  user.apellido = user.apellido.replace(/\b\w/g, (item) => item.toUpperCase());
  user.apellidos = user.apellido.trim().split(" ")[0];

  try {
    const request = await fetch(`${environment.API_MASTER}/user/createUser`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response: Response = await request.json();

    if (response.code === "1") {
      return response.message;
    }

    localStorage.setItem("email", user.email);

    const valid = await sendCode({ email: user.email });

    if (valid !== "000") {
      return "Error al enviar el codigo";
    }

    return valid;
  } catch (error) {
    console.log(error);
    throw "Algo salio mal";
  }
};

export const sendCode = async ({ email }: { email: string }) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/public/sendValidationCode?email=${email}`,
      {
        method: "POST",
        body: "",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let response: Response = await request.json();

    if (response.code !== "000") {
      return response.message;
    }

    return response.code;
  } catch (error) {
    console.log(error);
    throw "Algo salio mal";
  }
};

export const loginUser = async ({ user }: LoginUserProps) => {
  try {
    const request = await fetch(
      "http://localhost:8080/authentication/loginUser",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let response: LoginResponse = await request.json();

    if (response.code !== "000") {
      return response.message;
    }

    localStorage.setItem("token", response.data.accessToken);

    return response.code;
  } catch (error) {
    console.log(error);
    throw "Algo salio mal";
  }
};
