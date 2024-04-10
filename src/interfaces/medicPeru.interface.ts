export interface Result {
  code: string;
  message: string;
}

export interface InfoDoctor extends Result {
  data: DataDoctor[];
}

export interface DataDoctor {
  id: string;
  email: string;
  nombres: string;
  edad: string;
  sexo: string;
  especialidad: string;
  numColegiatura: string;
  dni: string;
  celular: string;
  lugarDeTrabajo: string;
  direccion: string;
  ciudad: string | null;
  provincia: string;
  distrito: string;
  fecNac: string;
  apellidos: string;
}
