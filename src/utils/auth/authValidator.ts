import { LoginIn, RegisterUser } from "../../interfaces/auth.inteface";

interface authValidatorProp {
  registerPaciente: RegisterUser;
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

  if (!registerPaciente.apellido) {
    errores.apellido = "Por favor ingrese sus apellidos";
  } else if (!/^[a-zA-Z\s]+$/.test(registerPaciente.apellido)) {
    errores.apellido = "Los apellidos solo pueden contener letras y espacios";
  }

  if (!registerPaciente.dni) {
    errores.dni = "Por favor ingrese su dni";
  } else if (String(registerPaciente.dni).length !== 8) {
    errores.dni = "EL dni ingresado no es valido";
  }

  if (!registerPaciente.username) {
    errores.username = "Por favor ingrese su nombre de usuario";
  } else if (registerPaciente.username.length < 6) {
    errores.username = "El username es demasiado corto";
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

  if (!registerPaciente.celular) {
    errores.celular = "Por favor ingresa su numero de celular";
  } else if (String(registerPaciente.celular).length !== 9) {
    errores.celular = "Númuero de celular incorrecto";
  }

  if (!registerPaciente.departamento) {
    errores.departamento = "Por favor seleccione un departamento";
  }
  if (!registerPaciente.provincia) {
    errores.provincia = "Por favor seleccione un provincia";
  }
  if (!registerPaciente.distrito) {
    errores.distrito = "Por favor seleccione un distrito";
  }

  if (!registerPaciente.direccion) {
    errores.direccion = "Por favor ingresa un direccion";
  } else if (registerPaciente.direccion.length < 7) {
    errores.direccion = "Direccion invalida";
  }

  if (!registerPaciente.sexo) {
    errores.sexo = "Por favor seleccione opcion";
  }

  /*
  if (!registerPaciente.fecNac) {
    errores.fecNac = "Por favor seleccione opcion";
  }
  */

  if (!registerPaciente.edad) {
    errores.edad = "Por favor ingrese su edad";
  } else if (registerPaciente.edad.length > 4) {
    errores.edad = "Edad invalida";
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
