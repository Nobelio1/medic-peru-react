import { Result } from "./medicPeru.interface";

export interface CitasIn {
  descripcion: string;
  email_paciente: string;
  fecha: Date;
  hora_inicio: string;
  hora_fin: string;
  lugar: string;
  titulo: string;
}

export interface CitasOut extends Result {
  data: string;
}

export interface Disponibilidad {
  email: string;
  hora_inicio: string;
  hora_fin: string;
}

export interface ObtenerDisponibilidad {
  email: string;
  fecha: string;
}

export interface ObtenerDisponibilidadOut extends Result {
  data: string[];
}
