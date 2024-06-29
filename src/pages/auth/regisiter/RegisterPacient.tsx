import { useNavigate } from "react-router-dom";
import { User, Mail, PadLock } from "../../../assets/index";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { authRegisterValidator } from "../../../utils/auth/authValidator";
import { registerUser } from "../../../api/auth/authService";
import { useState } from "react";
import { RegisterUserIn } from "../../../interfaces/auth.inteface";
import { useAppStore } from "../../../store/useAppStore";

//!----------------------------------------------------------------------------

const initialValues: RegisterUserIn = {
  ape_Materno: "",
  ape_Paterno: "",
  email: "",
  nombres: "",
  password: "",
  rol:0,
};

//!----------------------------------------------------------------------------

export const RegisterPacient = () => {
  //*-------------------------------------------------
  const navigate = useNavigate();
  const [isValidad, setIsValidad] = useState(false);
  const [message, setMessage] = useState("");
  const rolRegistro = useAppStore((state) => state.rolRegistro);

  //*-------------------------------------------------

  const onRegisterUser = async (user: RegisterUserIn) => {
    user.rol = +rolRegistro;
    const accessUser = await registerUser({ user: user });

    if (accessUser !== "1") {
      setIsValidad(true);
      setMessage(accessUser);
      return;
    }
    navigate("/medic-peru");
  };

  //!----------------------------------------------------------------------------

  return (
    <div className="flex  h-full overflow-y-auto flex-col w-full items-center animate__animated animate__fast animate__fadeInRight">
      <main>
        <Formik
          initialValues={initialValues}
          validate={(onFormValues: RegisterUserIn) => {
            const errores = authRegisterValidator({
              registerPaciente: onFormValues,
            });
            return errores;
          }}
          onSubmit={(onFormValues: RegisterUserIn, { resetForm }) => {
            resetForm();
            onRegisterUser(onFormValues);
            console.log(onFormValues);
          }}
        >
          {({ errors }) => (
            <Form>
              <div className="flex flex-col w-80 mt-14">
                <h1 className="font-bold text-3xl">Registrate, Paciente!</h1>
                <div className="flex flex-col my-8">
                  <div className="flex flex-col my-2">
                    <span className="font-medium">Nombres: </span>
                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={User} alt="Logo" className="w-6 mr-2" />
                      <Field
                        type="text"
                        placeholder="Ingrese sus Nombres"
                        name="nombres"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="nombres"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.nombres}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Apellidos Paternos: </span>
                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={User} alt="Logo" className="w-6 mr-2" />
                      <Field
                        type="text"
                        placeholder="Ingrese sus Apellidos"
                        name="ape_Paterno"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="ape_Paterno"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.ape_Paterno}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Apellidos Materno: </span>
                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={User} alt="Logo" className="w-6 mr-2" />
                      <Field
                        type="text"
                        placeholder="Ingrese sus Apellidos"
                        name="ape_Materno"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="ape_Materno"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.ape_Materno}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Correo Electronico: </span>

                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={Mail} alt="Logo" className="w-5 mr-2" />
                      <Field
                        type="email"
                        placeholder="Ingrese su correo electronico"
                        name="email"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.email}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Contraseña: </span>

                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
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
                        <div className=" font-bold text-sm text-red-600">
                          {errors.password}
                        </div>
                      )}
                    />
                  </div>

                  {isValidad && (
                    <div className="my-5 p-3 rounded-md bg-red-600 w-full h-10 flex justify-center items-center">
                      <span className="font-bold text-md text-white">
                        {message}
                      </span>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn my-2 p-3 rounded-full bg-blue-500 hover:bg-blue-700 w-full h-16"
                >
                  <span className="montserrat-bold text-xl text-white">
                    Siguiente
                  </span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};
