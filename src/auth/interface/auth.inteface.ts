import { Result } from "../../shared/interfaces/shared.inteface";

export interface Token {
  accessToken: string;
  tokenType: string;
}

export interface LoginIn {
  username: string;
  password: string;
}

export interface LoginOut extends Result {
  data: Token | null;
}

export interface RegisterIn {
  [key: string]: string | any; //!OJO  - MODIFICAR
  username: string;
  password: string;
  email: string;
  rol?: string;
  dni: string;
}

export interface RegisterValidation {
  [key: string]: [(value: string) => boolean, string];
  // username: [(value: string) => boolean, string];
  // password: [(value: string) => boolean, string];
  // email: [(value: string) => boolean, string];
  // dni: [(value: string) => boolean, string];
}

export interface RegisterOut {
  id: string;
  username: string;
  password: null;
  roles: null;
  email: string;
  message: string;
  timestamp: string;
}
