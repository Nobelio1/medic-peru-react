import { Result } from "./medicPeru.interface";

export interface RegisterUserIn {
  ape_Materno: string;
  ape_Paterno: string;
  email: string;
  nombres: string;
  password: string;
  rol: number;
}

export interface RegisterUserOut extends Result {
  data: string;
}

export interface LoginIn {
  username: string;
  password: string;
}
export interface LoginOut extends Result {
  data: string;
}
