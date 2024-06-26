import { Result } from "./medicPeru.interface";

export interface Doctores {
  id_especialidad: number;
  nombre_doctor:   string;
  imagen_url:      string;
}


export interface DoctoresOut extends Result{
  data: Doctores[];
}


