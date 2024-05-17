import { useParams } from "react-router-dom";
import {
  download,
  listArchivos,
} from "../../../../api/medicPeru/medicPeruService";
import { useEffect, useState } from "react";
import { Documentos } from "../../../../interfaces/medicPeru.interface";

export const DocumentosList = () => {
  const [documentos, setDocumentos] = useState<Documentos[]>();

  const { detail } = useParams();

  if (!detail) throw new Error("No se encontro id archivo");

  const getDocumentos = async (id: string) => {
    const documentos = await listArchivos({ id });
    setDocumentos(documentos);
  };

  const downloads = async (id: number, name: string) => {
    await download({ id: id, nombre: name });
  };

  useEffect(() => {
    getDocumentos(detail);
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Documentos</h2>
      <div className="">
        <ul className="pl-3">
          {documentos?.map((documento) => (
            <li key={documento.id} className="list-disc pb-2">
              <a
                onClick={() =>
                  downloads(documento.idArchivo, documento.filename)
                }
                className="w-2 cursor-pointer"
              >
                {documento.filename}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
