import { useNavigate } from "react-router-dom";
import { User, Mail, DNI, PadLock } from "../../../assets/index";
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

      //TODO: IMPLEMENTAR SPINNER DE CARGA

      navigate("/auth/register-code");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full items-center animate__animated animate__fast animate__fadeInRight">
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
              <span className="montserrat-bold text-3xl">Hola Paciente</span>
              <span className="montserrat-medium mt-6">
                Completa el formulario con tus datos personales para registrarte
              </span>

              <div className="flex flex-col my-8">
                <div className="flex flex-col my-2">
                  <label className="flex items-center bg-white mb-1 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
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
                    component={() => (
                      <div className="ml-6 font-bold text-sm text-red-600">
                        {errors.nombres}
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="flex items-center bg-white mb-1 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
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
                    component={() => (
                      <div className="ml-6 font-bold text-sm text-red-600">
                        {errors.dni}
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="flex items-center bg-white mb-1 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
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
                    component={() => (
                      <div className="ml-6 font-bold text-sm text-red-600">
                        {errors.username}
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="flex items-center bg-white mb-1 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
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
                    component={() => (
                      <div className="ml-6 font-bold text-sm text-red-600">
                        {errors.password}
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="flex items-center bg-white mb-1 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
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
                    component={() => (
                      <div className="ml-6 font-bold text-sm text-red-600">
                        {errors.email}
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="flex items-center bg-white mb-1 p-5 rounded-full border-solid border-2 border-gray-300 w-full">
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
                    component={() => (
                      <div className="ml-6 font-bold text-sm text-red-600">
                        {errors.celular}
                      </div>
                    )}
                  />
                </div>

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
  );
};
