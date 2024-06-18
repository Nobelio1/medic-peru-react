import {
  DetalleHistoriaResponse,
  Documento,
  HistoriaResponse,
  ListEnfermedades,
} from "../../data/historialClinica";
import {
  Especialidades,
  InfoDoctor,
  ListDocument,
  Ubigeo,
} from "../../interfaces/medicPeru.interface";
import { environment } from "../environment";

const token = localStorage.getItem("token");

export const getDoctor = async ({ dni }: { dni: string }) => {
  try {
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

export const getListarEspecialidad = async () => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/especialidad/listar`,
      {
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );

    const response: Especialidades[] = await request.json();

    return response;
  } catch (error) {
    throw new Error("EXPLOSION");
  }
};

export const upload = async ({ file, id }: { file: any; id: number }) => {
  const formData = new FormData();
  formData.append("file", file);

  localStorage.setItem("file", JSON.stringify(file));

  try {
    const response = await fetch(
      `${environment.API_MASTER}/archivo/upload/${id}`,
      {
        method: "POST",

        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Error al subir archivo");
    }

    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al servicio");
  }
};

export const listArchivos = async ({ id }: { id: string }) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/archivo/listarArchivosPor/${id}`,
      {
        method: "GET",
      }
    );

    const response: ListDocument = await request.json();

    if (response.code !== "000") {
      throw new Error("Error en el response");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al servicio");
  }
};

export const download = async ({ id }: { id: number; nombre: string }) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/archivo/archivos/${id}/descargar`,
      {
        method: "GET",
      }
    );

    const response: Documento = await request.json();

    if (response.code !== "000") {
      throw new Error("Error fatal!!");
    }

    const linkSource = `data:application/pdf;base64, ${response.data.archivoEncriptado}`;
    const link = document.createElement("a");
    const fileName = response.data.nombreArchivo || "papuDescarga";

    link.href = linkSource;
    link.download = fileName;
    link.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true, view: window })
    );

    setTimeout(function () {
      window.URL.revokeObjectURL(linkSource);
      link.remove();
    }, 100);
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al servicio");
  }
};

export const getHistoriasByDni = async ({ dni }: { dni: string }) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/historia/mostrarHistoria/${dni}`,
      {
        method: "GET",
      }
    );

    const response: HistoriaResponse = await request.json();

    if (response.code !== "000") {
      throw new Error("Error fatal!!");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al servicio");
  }
};

export const getDetalleById = async ({ id }: { id: string }) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/historia/mostrarHistoriaPorId/${id}`,
      {
        method: "GET",
      }
    );

    const response: DetalleHistoriaResponse = await request.json();

    if (response.code !== "000") {
      throw new Error("Error fatal!!");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al servicio");
  }
};

export const getEnfermedadesPrimarios = async () => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/cieEnfermedades/enfermedadesPrimarias`,
      {
        method: "GET",
      }
    );

    const response: ListEnfermedades = await request.json();

    if (response.code !== "000") {
      throw new Error("Error fatal!!");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al servicio");
  }
};

export const getEnfermedadesSecundarios = async ({ id }: { id: number }) => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/cieEnfermedades/enfermedadesPorEnfPrimaria/${id}`,
      {
        method: "GET",
      }
    );

    const response: ListEnfermedades = await request.json();

    if (response.code !== "000") {
      throw new Error("Error fatal!!");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar al servicio");
  }
};
