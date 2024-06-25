import { Facebook, Google, Apple, Mail, PadLock } from "../../../assets/index";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginIn } from "../../../interfaces/auth.inteface";
import { useState } from "react";
import { authLoginValidator } from "../../../utils/auth/authValidator";
import { useAppStore } from "../../../store/useAppStore";

//!---------------------------------------------------------------------------------!//

const initialValues: LoginIn = {
  username: "",
  password: "",
};

export const Login = () => {

  const onLogin = useAppStore((state) => state.onLogin)

  const navigate = useNavigate();
  const [isValidad, setIsValidad] = useState(false);
  const [message, setMessage] = useState("");

  const submitUser = async (value: LoginIn) => {
    const accessUser = await onLogin(value)
    if (accessUser !== "1") {
      setIsValidad(true);
      setMessage(accessUser);
      return;
    }
    navigate("/medic-peru");
  };

  //!---------------------------------------------------------------------------------!//

  return (
    <div className="flex flex-col w-full items-center animate__animated animate__fast animate__fadeInRight">
      <div className="flex flex-col gap-2 w-80 mt-20">
        <button className="btn bg-blue-600 text-white">
          <img src={Facebook} alt="logo-fb" className="w-6" />
          <span>Continuar con Facebook</span>
        </button>
        <button className="btn bg-white">
          <img src={Google} alt="logo-fb" className="w-6" />
          <span>Continuar con Google </span>
        </button>
        <button className="btn bg-black text-white">
          <img src={Apple} alt="logo-fb" className="w-6" />
          <span>Continuar con Apple</span>
        </button>
      </div>

      <Formik
        initialValues={initialValues}
        validate={(values: LoginIn) => {
          const errores = authLoginValidator({
            loginUser: values,
          });
          return errores;
        }}
        onSubmit={(values: LoginIn) => {
          submitUser(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="flex flex-col w-80 mt-14">
              <span className="font-bold text-3xl">¡Bienvenido!</span>
              <div className="flex flex-col my-8">
                <label className="flex items-center bg-white my-2 p-5 rounded-full border-2 border-black w-full">
                  <img src={Mail} alt="Logo" className="w-5 mr-2" />
                  <Field
                    type="text"
                    placeholder="Correo Electrónico"
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
                <label className="flex items-center bg-white my-2 p-5 rounded-full border-2 border-black w-full">
                  <img src={PadLock} alt="Logo" className="w-5 mr-2" />
                  <Field
                    type="password"
                    placeholder="Contraseña"
                    className="flex-1 focus:outline-none"
                    name="password"
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
              {isValidad && (
                <div className="my-5 p-3 rounded-md bg-red-600 w-full h-10 flex justify-center items-center">
                  <span className="font-bold text-md text-white">
                    {message}
                  </span>
                </div>
              )}
              <button
                className="btn my-2 p-3 rounded-full bg-blue-500 hover:bg-blue-700 w-full h-16"
                type="submit"
              >
                <span className="font-bold text-xl text-white">Ingresar</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex flex-col items-center mt-14">
        <a href="#" className="text-xl">
          ¿Olvidaste tu contraseña?
        </a>
        <span className="mt-10">¿No tienes una cuenta?</span>
        <Link className="font-bold hover:text-blue-500" to={"/auth/register"}>
          Regístrate
        </Link>
      </div>
    </div>
  );
};
