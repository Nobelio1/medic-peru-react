// import { useState } from "react";
import { useParams } from "react-router-dom";
import { upload } from "../../../../api/medicPeru/medicPeruService";
import { Recetario } from "../../../../data/historialClinica";

interface RecipeTableProps {
  recetario: Recetario[];
}

export const RecipeTable = ({ recetario }: RecipeTableProps) => {
  const { detail } = useParams();

  if (!detail) throw new Error("No se encontro id archivo");

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files)
      throw new Error("Hubo un error en la subida de archivos");

    const uploadRes = await upload({ file: e.target.files[0], id: +detail });
    console.log(uploadRes);
  };

  return (
    <section>
      <div className="flex justify-between items-center pb-2">
        <h2 className="text-2xl font-bold mb-4">Recetario</h2>
        <input
          type="file"
          className="file-input file-input-bordered file-input-info w-full max-w-xs"
          onChange={handleSubmit}
        />
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-lg text-center border-separate border-spacing-y-4">
          <thead className="bg-blue-300  ">
            <tr>
              <th scope="col" className="py-2 rounded-s-lg">
                Nombre
              </th>
              <th scope="col" className="py-2 ">
                Tiempo de consumo
              </th>
              <th scope="col" className="py-2 rounded-e-lg">
                Cantidad por día
              </th>
            </tr>
          </thead>
          <tbody className="bg-blue-100 py-3">
            {/* revisar el id para receta */}
            {recetario.map((receta) => (
              <tr key={receta.tiempoCon}>
                <td className="py-2 rounded-s-lg">{receta.medicamento}</td>
                <td className="py-2">{receta.tiempoCon}</td>
                <td className="py-2 rounded-e-lg">{receta.cantPorDia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
