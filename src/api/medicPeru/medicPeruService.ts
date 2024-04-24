import { InfoDoctor, Ubigeo } from "../../interfaces/medicPeru.interface";
import { environment } from "../environment";

const token = localStorage.getItem("token");

export const getDoctor = async ({ dni }: { dni: string }) => {
  try {
    console.log(dni);
    const request = await fetch(
      `${environment.API_MASTER}/doctor/buscarPorDni/${dni}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const response: InfoDoctor = await request.json();
    console.log(response);

    if (response.code !== "000") {
      throw new Error(response.message);
    }

    return response.data;
  } catch (error) {
    throw new Error("EXPLOSION");
  }
};

export const getDepartamentos = async () => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/ubigeo/departamentos`,
      {
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );

    const response: Ubigeo[] = await request.json();

    return response;
  } catch (error) {
    throw new Error("EXPLOSION");
  }
};

export const getProvincias = async ({ idDep }: { idDep: string }) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/ubigeo/departamentos/${idDep}/provincias`,
      {
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );

    const response: Ubigeo[] = await request.json();

    return response;
  } catch (error) {
    throw new Error("EXPLOSION");
  }
};

export const getDistritos = async ({
  idDep,
  idPro,
}: {
  idDep: string;
  idPro: string;
}) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/ubigeo/departamentos/${idDep}/provincias/${idPro}/distritos`,
      {
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );

    const response: Ubigeo[] = await request.json();

    return response;
  } catch (error) {
    throw new Error("EXPLOSION");
  }
};
