import { useNavigate } from "react-router-dom";
import { Logo, User, Mail, DNI, PadLock } from "../../../assets/index";
import { environment } from "../../../api/environment";

import { ErrorMessage, Field, Formik } from "formik";

const API_MASTER: string = environment.API_MASTER;

interface Values {
  nombres: string;
  dni: string;
  username: string;
  password: string;
  celular: string;
  email: string;
  rol: string;
  especialidad?: string;
}

interface CodeOut {
  code: string;
  message: string;
}

interface RegisterOut {
  code: string;
  message: string;
}

export const RegisterPacient = () => {
  const navigate = useNavigate();

  const sendCode = async (value: string) => {
    try {
      const res = await fetch(
        `${API_MASTER}/public/sendValidationCode?email=${value}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: "",
        }
      );

      let data: CodeOut = await res.json();

      if (data.code !== "000") {
        console.log("sucedio un error");
        return;
      }

      if (data.code === "000") {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRegister = async (value: Values) => {
    value.rol = "Paciente";
    try {
      const res = await fetch(`${API_MASTER}/user/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data: RegisterOut = await res.json();

      if (data.code !== "000") {
        console.log(data.message);
        return;
      }

      console.log(data.message);

      localStorage.setItem("email", value.email);

      await sendCode(value.email);

      navigate("/auth/register-code");
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
          <Formik
            initialValues={{
              username: "",
              email: "",
              dni: "",
              password: "",
              celular: "",
              nombres: "",
              rol: "",
            }}
            validate={(onFormValues: Values) => {
              let errores: Values = {
                username: "",
                email: "",
                dni: "",
                password: "",
                celular: "",
                nombres: "",
                rol: "",
              };

              if (!onFormValues.username) {
                errores.username = "Por favor ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(onFormValues.username)) {
                errores.username =
                  "El nombre solo puede contener letras y espacios";
              }

              if (!onFormValues.email) {
                errores.email = "Por favor ingresa un email";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  onFormValues.email
                )
              ) {
                errores.email = "El correo ingresado no es valido";
              }

              if (!onFormValues.dni) {
                errores.dni = "Por favor ingresa un dni";
              } else if (onFormValues.dni.length < 7) {
                errores.dni = "EL dni ingresado no es valido";
              }

              if (!onFormValues.password) {
                errores.password = "Por favor ingresa un contraseña";
              } else if (onFormValues.password.length < 7) {
                errores.password = "La cantidad de caracteres es menor que 7";
              }

              if (
                errores.dni === "" &&
                errores.username === "" &&
                errores.email === "" &&
                errores.password === ""
              ) {
                return;
              }
              return errores;
            }}
            onSubmit={(onFormValues: Values, { resetForm }) => {
              resetForm();
              onRegister(onFormValues);
            }}
          >
            {({ errors, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col w-80 mt-14">
                  <span className="montserrat-bold text-3xl">Hola!</span>
                  <span className="montserrat-medium">
                    Registrate para comenzar
                  </span>
                  <div className="flex flex-col my-8">
                    <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                      <img src={User} alt="Logo" className="w-6 mr-2" />
                      <Field
                        type="text"
                        placeholder="Nombre Completo"
                        name="nombres"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="nombres"
                      component={() => <div>{errors.nombres}</div>}
                    />

                    <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                      <img src={DNI} alt="Logo" className="w-5 mr-2" />
                      <Field
                        type="text"
                        placeholder="Dni"
                        name="dni"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="dni"
                      component={() => <div>{errors.dni}</div>}
                    />

                    <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                      <img src={User} alt="Logo" className="w-6 mr-2" />
                      <Field
                        type="text"
                        placeholder="Nombre de Usuario"
                        name="username"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="username"
                      component={() => <div>{errors.username}</div>}
                    />

                    <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                      <img src={PadLock} alt="Logo" className="w-5 mr-2" />
                      <Field
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="password"
                      component={() => <div>{errors.password}</div>}
                    />

                    <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                      <img src={Mail} alt="Logo" className="w-5 mr-2" />
                      <Field
                        type="text"
                        placeholder="Correo Electroncio"
                        name="email"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="email"
                      component={() => <div>{errors.email}</div>}
                    />

                    <label className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
                      <img src={Mail} alt="Logo" className="w-5 mr-2" />
                      <Field
                        type="text"
                        placeholder="Celular"
                        name="celular"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="celular"
                      component={() => <div>{errors.celular}</div>}
                    />
                    {/* {isFormValid && (
                      <label className="mt-5">
                        <div className="my-1 p-3 rounded-full bg-red-600 w-full h-14 flex justify-center items-center">
                          <span className="font-bold text-lg text-white">
                            Datos ingresados no validos
                          </span>
                        </div>
                      </label>
                    )} */}
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
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
