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

export interface DetalleServicioEsp {
  anestesia:          string;
  codigo_tipo:        string;
  duracion:           string;
  hospitalizacion:    string;
  nombre_cx:          string;
  recuperacion_total: string;
  sedes:              string;
  tipo:               string;
}

export interface DetalleServicioEspOut extends Result {
  data: DetalleServicioEsp[];
}
