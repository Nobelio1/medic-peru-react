export interface RegisterUser {
  username: string;
  password: string;
  email: string;
  dni: string;
  nombres: string;
  apellido: string;
  celular: string;
  direccion: string;
  departamento: string;
  provincia: string;
  distrito: string;
  sexo: string;
  edad: string;
  fecNac: any;
  //registro interno
  apellidos?: string;
  rol?: string;
}

export interface RegisterDoctor extends RegisterUser {
  lugarDeTrabajo: string;
  numColegiatura: string;
  especialidad: string;
}

export interface Token {
  accessToken: string;
  tokenType: string;
}

export interface LoginIn {
  username: string;
  password: string;
}
