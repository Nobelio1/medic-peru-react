import { Facebook, Google, Apple, Mail, PadLock } from "../../../assets/index";
import { Link, useNavigate } from "react-router-dom";
import { LoginOut } from "../../../interfaces/auth.inteface";
import { ErrorMessage, Field, Form, Formik } from "formik";

//!---------------------------------------------------------------------------------!//
interface LoginIn {
  username: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();

  //*---------------------------------------------------------------------------------*//

  const onLogin = async (value: LoginIn) => {
    try {
      const res = await fetch(
        "http://localhost:8080/authentication/loginUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }
      );

      let data: LoginOut = await res.json();

      if (data.code === "401 UNAUTHORIZED") {
        console.log("NO SE INICIO CORRECTAMENTE");
        return;
      }

      if (data.code === "000") {
        console.log("se inicio correctamente");
        navigate("/medic-peru");
      }
    } catch (error) {
      console.log(error);
      console.log("No se pudo iniciar sesion");
    }
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
          <span>Continuar con Google</span>
        </button>
        <button className="btn bg-black text-white">
          <img src={Apple} alt="logo-fb" className="w-6" />
          <span>Continuar con Apple</span>
        </button>
      </div>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validate={(values: LoginIn) => {
          let errores: LoginIn = {
            username: "",
            password: "",
          };

          if (!values.username) {
            errores.username = "Por favor ingresa un username";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.username
            )
          ) {
            errores.username = "El correo ingresado no es valido";
          }

          if (!values.password) {
            errores.password = "Por favor ingresa un contraseña";
          } else if (values.password.length < 7) {
            errores.password = "La cantidad de caracteres es menor que 7";
          }

          if (errores.username === "" && errores.password === "") {
            return;
          }
          return errores;
        }}
        onSubmit={(values: LoginIn) => {
          console.log("todo correcto");
          onLogin(values);
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
