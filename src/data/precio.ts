export interface Precio {
  id_servicio: number;
  id_especialidad: number;
  id_sede: number;
  id_cx?: number;
  precio:number;
}

export enum Sedes {
  Sede1 = 1, // Monte Sinai
  Sede2 = 2, // Santa Lucia
  Sede3 = 3 // San Borja
}

export const precio: Precio[] = [
  {
    id_servicio: 2,
    id_especialidad: 1,
    id_sede: Sedes.Sede1,
    precio: 2200
  },
  {
    id_servicio: 2,
    id_especialidad: 1,
    id_sede: Sedes.Sede2,
    precio: 2400
  },
] 
