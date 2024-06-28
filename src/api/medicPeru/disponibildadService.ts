import { Result } from '../../interfaces/medicPeru.interface';
import { DisponibilidadDoctor } from '../../pages/medicPeru/DefinirDisponibilidad';
import { environment } from "../environment";

interface DisponibilidadOut extends Result {
  data: string[]
}


export const setDisponibilidad = async (disponibilidad: DisponibilidadDoctor) => {
  try {
    const req = await fetch(
      `${environment.API_MASTER}/api/disponibilidad/definirDisponibilidad`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(disponibilidad),
      }
    );

    const res: Result = await req.json(); //interface general

    if (res.code !== "000") {
      throw new Error(res.message);
    }

    return res.message;
  } catch (error) {
    console.error(error);
    throw new Error("Error al servicio de generar citas");
  }
}

export const getDisponibilidad = async (email: string, fecha: string) => {
  try {
    const req = await fetch(
      `${environment.API_MASTER}/api/disponibilidad/horarios-disponibles/${email}/${fecha}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res: DisponibilidadOut = await req.json(); 

    if (res.code !== "000") {
      throw new Error(res.message);
    }

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al servicio de generar citas");
  }
}
