import { Result } from "./medicPeru.interface";

export interface Especialidades {
  id_especialidad: number;
  nombre: string;
  imagen_url: string;
}

export interface EspecialidadesOut extends Result {
  data: Especialidades[];
}

export interface EspecialidadesId {
  id_especialidad: number;
  id_servicios: number;
  nombre: string;
  imagen_url: string;
}

export interface EspecialidadesIdOut extends Result {
  data: EspecialidadesId[];
}
