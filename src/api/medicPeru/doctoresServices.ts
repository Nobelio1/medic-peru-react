import { DoctoresOut } from "../../interfaces/doctores.interface";
import { environment } from "../environment";

export const listarDoctores = async () => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/data/listarDoctores`,
      {
        method: "GET",
      }
    );

    const response: DoctoresOut = await request.json();

    if (response.code !== "000") {
      throw new Error("Error al hallar el servicio!!");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al servicio");
  }
}

export const listarDoctoresPorEsp = async (id: number) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/data/listarDoctoresPorEsp/${id}`,
      {
        method: "GET",
      }
    );

    const response: DoctoresOut = await request.json();

    if (response.code !== "000") {
      throw new Error("Error al hallar el servicio!!");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al servicio");
  }
}
