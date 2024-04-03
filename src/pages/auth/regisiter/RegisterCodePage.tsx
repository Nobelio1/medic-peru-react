import { Formik, Form, Field, ErrorMessage } from "formik";
import { Logo } from "../../../assets";
import { TbLockCode } from "react-icons/tb";
import { environment } from "../../../api/environment";
import { useNavigate } from "react-router-dom";

interface Code {
  code: string;
  email?: string;
}

interface Result {
  code: string;
  message: string;
}

export const RegisterCodePage = () => {
  const email: string = localStorage.getItem("email")!;
  const navigate = useNavigate();

  const resendCode = async () => {
    try {
      const res = await fetch(
        `${environment.API_MASTER}/public/sendValidationCode?email=${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: "",
        }
      );

      let data: Result = await res.json();

      if (data.code !== "000") {
        console.log("sucedio un error");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendCode = async (value: Code) => {
    value.email = email;
    try {
      const res = await fetch(`${environment.API_MASTER}/public/validateCode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      let data: Result = await res.json();

      if (data.code !== "000") {
        console.log("sucedio un error");
        return;
      }

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mx-auto montserrat-regular">
      <div className="flex flex-col h-screen md:flex-row">
        <div className="w-full lg:w-3/4 md:w-1/2 h-full sm:block hidden">
          <div className="flex flex-row md:flex-col lg:flex-row w-full h-full justify-center items-center font-bold text-center">
            <img src={Logo} alt="logo-coco" className="w-48" />
            <h1 className="text-5xl">MedicPeru</h1>
          </div>
        </div>

        <div className="w-full lg:w-1/4 md:w-1/2 shadow-md h-full bg-gray-100 p-3">
          <div className="flex flex-col w-full h-5/6 items-center justify-center">
            <Formik
              initialValues={{
                code: "",
              }}
              onSubmit={(values: Code) => {
                sendCode(values);
              }}
            >
              {({ errors }) => (
                <Form>
                  <div className="flex flex-col w-80 mt-14">
                    <span className="font-bold text-3xl">
                      Ingresa el codigo
                    </span>
                    <span className="font-normal text-md mt-6">
                      Enviamos un codigo de verificacion a tu correo ingresado
                    </span>
                    <div className="flex flex-col my-8">
                      <label className="flex items-center bg-white my-2 p-5 rounded-full border-2 border-black w-full">
                        <div className="w-5 mr-5">
                          <TbLockCode size={25} />
                        </div>
                        <Field
                          type="text"
                          placeholder="Codigo de verificacion"
                          name="code"
                          className="flex-1 focus:outline-none"
                        />
                      </label>
                      <ErrorMessage
                        name="code"
                        component={() => <div>{errors.code}</div>}
                      />
                    </div>
                    <button
                      className="btn my-1 p-3 rounded-full bg-blue-500 hover:bg-blue-700 w-full h-16"
                      type="submit"
                    >
                      <span className="font-bold text-xl text-white">
                        Ingresar
                      </span>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="flex flex-col items-center mt-6">
              <span className="text-sm">
                ¿Todavia no te llega el codigo?
                <button
                  onClick={resendCode}
                  className="ml-2 font-semibold hover:text-gray-400"
                >
                  Reenviar codigo
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
