import { useNavigate } from "react-router-dom";
import { User, Mail, DNI, PadLock } from "../../../assets/index";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { RegisterUser } from "../../../interfaces/auth.inteface";
import { authRegisterValidator } from "../../../utils/auth/authValidator";
import { MyDatePicker } from "../../../utils/DatePicker";

const initialValues: RegisterUser = {
  username: "",
  password: "",
  email: "",
  dni: "",
  nombres: "",
  apellido: "",
  celular: "",
  direccion: "",
  departamento: "",
  provincia: "",
  distrito: "",
  sexo: "",
  edad: "",
  fecNac: new Date(),
};

export const RegisterPacient = () => {
  const navigate = useNavigate();

  return (
    <div className="flex  h-full overflow-y-auto flex-col w-full items-center animate__animated animate__fast animate__fadeInRight">
      <main>
        <Formik
          initialValues={initialValues}
          validate={(onFormValues: RegisterUser) => {
            const errores = authRegisterValidator({
              registerPaciente: onFormValues,
            });
            return errores;
          }}
          onSubmit={(onFormValues: RegisterUser, { resetForm }) => {
            // resetForm();
            console.log(onFormValues);
          }}
        >
          {({ errors }) => (
            <Form>
              <div className="flex flex-col w-80 mt-14">
                <h1 className="montserrat-bold text-2xl">
                  Registrate, Paciente!
                </h1>

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
                    <span className="font-medium">Apellidos: </span>
                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={User} alt="Logo" className="w-6 mr-2" />
                      <Field
                        type="text"
                        placeholder="Ingrese sus Apellidos"
                        name="apellido"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="apellido"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.apellido}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Dni: </span>

                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={DNI} alt="Logo" className="w-5 mr-2" />
                      <Field
                        type="number"
                        placeholder="Dni"
                        name="dni"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="dni"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.dni}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Usuario: </span>

                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
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
                        <div className=" font-bold text-sm text-red-600">
                          {errors.username}
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

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Celular: </span>
                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={Mail} alt="Logo" className="w-5 mr-2" />
                      <Field
                        type="number"
                        placeholder="Celular"
                        name="celular"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="celular"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.celular}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Departamento: </span>

                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={Mail} alt="Logo" className="w-5 mr-2" />
                      <Field
                        as="select"
                        name="departamento"
                        className="flex-1 focus:outline-none"
                      >
                        <option value="1">Lima</option>
                      </Field>
                    </label>
                    <ErrorMessage
                      name="departamento"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.departamento}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Provincia: </span>

                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={Mail} alt="Logo" className="w-5 mr-2" />
                      <Field
                        as="select"
                        name="provincia"
                        className="flex-1 focus:outline-none"
                      >
                        <option value="1">Lima</option>
                      </Field>
                    </label>
                    <ErrorMessage
                      name="provincia"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.provincia}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Distrito: </span>

                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={Mail} alt="Logo" className="w-5 mr-2" />
                      <Field
                        as="select"
                        name="distrito"
                        className="flex-1 focus:outline-none"
                      >
                        <option value="1">San Martin de Porres</option>
                      </Field>
                    </label>
                    <ErrorMessage
                      name="distrito"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.distrito}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Direccion: </span>

                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={User} alt="Logo" className="w-6 mr-2" />
                      <Field
                        type="text"
                        placeholder="Ingrese su direccion"
                        name="direccion"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="direccion"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.direccion}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Sexo: </span>

                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={Mail} alt="Logo" className="w-5 mr-2" />
                      <Field
                        as="select"
                        name="sexo"
                        className="flex-1 focus:outline-none"
                      >
                        <option value="1">Hombre</option>
                        <option value="2">Mujer</option>
                        <option value="3">No especifico</option>
                      </Field>
                    </label>
                    <ErrorMessage
                      name="sexo"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.sexo}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Fecha de Nacimiento: </span>

                    <MyDatePicker name="fecNac" />
                  </div>

                  <div className="flex flex-col my-2">
                    <span className="font-medium">Edad: </span>

                    <label className="flex items-center bg-white mb-1 py-3 pl-2 rounded-md border-solid border-2 border-gray-300 w-full">
                      <img src={Mail} alt="Logo" className="w-5 mr-2" />
                      <Field
                        type="number"
                        placeholder="Edad"
                        name="edad"
                        className="flex-1 focus:outline-none"
                      />
                    </label>
                    <ErrorMessage
                      name="edad"
                      component={() => (
                        <div className=" font-bold text-sm text-red-600">
                          {errors.edad}
                        </div>
                      )}
                    />
                  </div>

                  {/* todo: implementar validacion */}

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
