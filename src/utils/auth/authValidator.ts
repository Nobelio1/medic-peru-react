import { LoginIn, RegisterUserIn } from "../../interfaces/auth.inteface";

interface authValidatorProp {
  registerPaciente: RegisterUserIn;
}

interface authValidatorLoginProp {
  loginUser: LoginIn;
}

export const authRegisterValidator = ({
  registerPaciente,
}: authValidatorProp) => {
  //todo: Buscar como cambiar el tipo any - crear un interface de opcionales
  const errores: any = {};

  if (!registerPaciente.nombres) {
    errores.nombres = "Por favor ingrese sus nombres";
  } else if (!/^[a-zA-Z\s]+$/.test(registerPaciente.nombres)) {
    errores.nombres = "Los nombres solo pueden contener letras y espacios";
  }

  if (!registerPaciente.ape_Materno) {
    errores.apellido = "Por favor ingrese sus apellidos";
  } else if (!/^[a-zA-Z\s]+$/.test(registerPaciente.ape_Materno)) {
    errores.apellido = "Los apellidos solo pueden contener letras y espacios";
  }

  if (!registerPaciente.ape_Paterno) {
    errores.apellido = "Por favor ingrese sus apellidos";
  } else if (!/^[a-zA-Z\s]+$/.test(registerPaciente.ape_Paterno)) {
    errores.apellido = "Los apellidos solo pueden contener letras y espacios";
  }

  if (!registerPaciente.email) {
    errores.email = "Por favor ingrese su email";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
      registerPaciente.email
    )
  ) {
    errores.email = "El email ingresado no es valido";
  }

  if (!registerPaciente.password) {
    errores.password = "Por favor ingresa un contraseña";
  } else if (registerPaciente.password.length < 7) {
    errores.password = "La cantidad de caracteres es menor que 7";
  }

  return errores;
};

export const authLoginValidator = ({ loginUser }: authValidatorLoginProp) => {
  const errores: any = {};

  if (!loginUser.password) {
    errores.password = "Por favor ingresa un contraseña";
  } else if (loginUser.password.length < 7) {
    errores.password = "La cantidad de caracteres es menor que 7";
  }

  return errores;
};
