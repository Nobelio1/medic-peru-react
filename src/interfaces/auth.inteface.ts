export interface RegisterUser {
  rol?: string;
  nombres: string;
  apellido: string;
  email: string;
  password: string;
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
