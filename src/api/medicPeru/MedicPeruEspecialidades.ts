import {
  DetalleServicioEspOut,
  EspecialidadesIdOut,
  EspecialidadesOut,
} from "../../interfaces/especialidades.interface";
import { environment } from "../environment";

export const listarEspecialidades = async () => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/data/listarEspecialidades`,
      {
        method: "GET",
      }
    );

    const response: EspecialidadesOut = await request.json();

    if (response.code !== "000") {
      throw new Error("Error al hallar el servicio!!");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al servicio");
  }
};

export const especialidadPorId = async (id:number) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/data/listarServicioPorEsp/${id}`,
      {
        method: "GET",
      }
    );

    const response: EspecialidadesIdOut = await request.json();

    if (response.code !== "000") {
      throw new Error("Error al no encontrar el id!!");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al id");
  }
};


export const detalleServicio = async (id:number) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/data/obtenerDetalleSrvc/${id}`,
      {
        method: "GET",
      }
    );

    const response: DetalleServicioEspOut = await request.json();

    if (response.code !== "000") {
      throw new Error("Error al traer la data del servicio");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar con el servicio de detalleServicio");
  }
};
