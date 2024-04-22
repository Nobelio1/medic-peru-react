import { Recetario } from "../../../../data/historialClinica";

interface RecipeTableProps {
  recetario: Recetario[];
}

export const RecipeTable = ({ recetario }: RecipeTableProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Recetario</h2>
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
            {recetario.map((receta) => (
              <tr>
                <td className="py-2 rounded-s-lg">{receta.nombre}</td>
                <td className="py-2">{receta.tiempoCon}</td>
                <td className="py-2 rounded-e-lg">{receta.CantPorDia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
