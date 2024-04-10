import { InfoDoctor } from "../../interfaces/medicPeru.interface";
import { environment } from "../environment";

export const getDoctor = async ({ dni }: { dni: string }) => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaWVnbzgiLCJleHAiOjE3MTI2MTQxMTh9.bsEZ1Ko1fy2nZQwt3HIu55_Oy_3xo527-3oSR0wZZszEJ468VGpFOA4Kd-_v-ZFOlOAnFxA6n1CSxiG3rmdgGg'
  try {
    console.log(dni)
    const request = await fetch(
      `${environment.API_MASTER}/doctor/buscarPorDni/${dni}`,
      {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    const response: InfoDoctor = await request.json();
    console.log(response)

    if (response.code !== "000") {
      throw new Error(response.message);
    }

    return response.data;
  } catch (error) {
    throw new Error("EXPLOSION");
  }
};
