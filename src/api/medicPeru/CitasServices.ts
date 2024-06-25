import {
  CitasIn,
  CitasOut,
  Disponibilidad,
  ObtenerDisponibilidad,
  ObtenerDisponibilidadOut,
} from "../../interfaces/citas.interface";
import { environment } from "../environment";

interface CitasProps {
  cita: CitasIn;
}

interface DisponibilidadProps {
  dis: Disponibilidad;
}

interface ObtenerDisponibilidadProps {
  cita: ObtenerDisponibilidad;
}

export const generarCita = async ({ cita }: CitasProps) => {
  try {
    const req = await fetch(
      `${environment.API_MASTER}/data/listarEspecialidades`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cita),
      }
    );

    const res: CitasOut = await req.json();

    if (res.code !== "000") {
      throw new Error(res.message);
    }

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al servicio de generar citas");
  }
};

export const insertarDisponibilidad = async ({ dis }: DisponibilidadProps) => {
  try {
    const req = await fetch(
      `${environment.API_MASTER}/data/listarEspecialidades/${dis.email}/${dis.hora_inicio}/${dis.hora_fin}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res: CitasOut = await req.json(); //interface general

    if (res.code !== "000") {
      throw new Error(res.message);
    }

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al servicio de generar citas");
  }
};

export const obtenerDisponibilidad = async ({
  cita,
}: ObtenerDisponibilidadProps) => {
  try {
    const req = await fetch(
      `${environment.API_MASTER}/data/listarEspecialidades/${cita.email}/${cita.fecha}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res: ObtenerDisponibilidadOut = await req.json();

    if (res.code !== "000") {
      throw new Error(res.message);
    }

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al servicio de generar citas");
  }
};
