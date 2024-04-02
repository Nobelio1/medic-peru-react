import { useNavigate } from "react-router-dom";
import { Logo, User, Mail, DNI, PadLock } from "../../../../assets/index";
import { environment } from "../../../env/environment";
import { useForm } from "../../../hooks/useForm";
import {
  RegisterIn,
  RegisterOut,
  RegisterValidation,
} from "../../interface/auth.inteface";
import { FormEvent } from "react";

const API_MASTER: string = environment.API_MASTER;

const formData: RegisterIn = {
  email: "",
  password: "",
  username: "",
  dni: "",
};

//TODO---------------------> REFACTORIZAR VALIDACIONES
const formValidations: RegisterValidation = {
  email: [(value: string) => value.includes("@"), "El correo debe tener un @"],
  password: [
    (value: string) => value.length >= 6,
    "El password debe tener mas de 6 de letras",
  ],
  username: [(value: string) => value.length >= 1, "El nombre es obligatorio"],
  dni: [
    (value: string) => value.length === 8,
    "El dni ingresado es incorrecto",
  ],
};

export const RegisterPacient = () => {
  const navigate = useNavigate();
  //TODO---------------------> REFACTORIZAR VALIDACIONES
  const {
    username,
    password,
    email,
    dni,
    isFormValid,
    onInputChange,
    formState,
  } = useForm(formData, formValidations);

  // const [isFormValids, setIsFormValids] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log(isFormValid);
    if (!isFormValid) return;

    //TODO---------------------> CREAR FUNCION REUTILIZABLE
    try {
      const res = await fetch(`${API_MASTER}/user/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data: RegisterOut = await res.json();

      if (data.message) {
        // setIsFormValids(true);
        console.log(data.message);
        return;
      }

      if (data.id) {
        console.log(data.id);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-screen md:flex-row mx-auto">
      <div className="w-full lg:w-3/4 md:w-1/2 h-full sm:block hidden">
        <div className="flex flex-row md:flex-col lg:flex-row w-full h-full justify-center items-center font-bold text-center montserrat-bold">
          <img src={Logo} alt="logo-coco" className="w-48" />
          <h1 className="text-5xl">MedicPeru</h1>
        </div>
      </div>
      <div className="w-full lg:w-1/4 md:w-1/2 shadow-md h-full bg-gray-100 p-3">
        <div className="flex flex-col w-full items-center">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col w-80 mt-14">
              <span className="montserrat-bold text-3xl">Hola!</span>
              <span className="montserrat-medium">
                Registrate para comenzar
              </span>
              <div className="flex flex-col my-8">
                <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                  <img src={User} alt="Logo" className="w-6 mr-2" />
                  <input
                    type="text"
                    placeholder="Nombre de Usuario"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                    className="flex-1 focus:outline-none"
                  />
                </label>
                <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                  <img src={Mail} alt="Logo" className="w-5 mr-2" />
                  <input
                    type="text"
                    placeholder="Correo Electroncio"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    className="flex-1 focus:outline-none"
                  />
                </label>
                <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                  <img src={DNI} alt="Logo" className="w-5 mr-2" />
                  <input
                    type="text"
                    placeholder="Dni"
                    name="dni"
                    value={dni}
                    onChange={onInputChange}
                    className="flex-1 focus:outline-none"
                  />
                </label>
                <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                  <img src={PadLock} alt="Logo" className="w-5 mr-2" />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    className="flex-1 focus:outline-none"
                  />
                </label>
                {/* <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                  <img src={Verify} alt="Logo" className="w-5 mr-2" />
                  <input
                    type="password"
                    placeholder=" Verificar Contraseña"
                    className="flex-1 focus:outline-none"
                  />
                </label> */}
                {isFormValid ? (
                  <label className="mt-5">
                    <div className="my-1 p-3 rounded-full bg-red-600 w-full h-14 flex justify-center items-center">
                      <span className="font-bold text-lg text-white">
                        Datos ingresados no validos
                      </span>
                    </div>
                  </label>
                ) : (
                  ""
                )}
              </div>
              <button
                type="submit"
                className="btn my-2 p-3 rounded-full bg-blue-500 hover:bg-blue-700 w-full h-16"
              >
                <span className="montserrat-bold text-xl text-white">
                  Registarse
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
