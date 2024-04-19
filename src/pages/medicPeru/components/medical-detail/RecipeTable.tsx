export const RecipeTable = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Recetario</h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-lg text-center border-separate border-spacing-y-4">
          <thead className="bg-gray-200  ">
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
          <tbody className="bg-gray-100 py-3">
            <tr>
              <td className="py-2 rounded-s-lg">Paracetamol</td>
              <td className="py-2">7 días</td>
              <td className="py-2 rounded-e-lg">2 veces / 8hrs</td>
            </tr>
            <tr>
              <td className="py-2 rounded-s-lg">Paracetamol</td>
              <td className="py-2">7 días</td>
              <td className="py-2 rounded-e-lg">2 veces / 8hrs</td>
            </tr>
            <tr>
              <td className="py-2 rounded-s-lg">Paracetamol</td>
              <td className="py-2">7 días</td>
              <td className="py-2 rounded-e-lg">2 veces / 8hrs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
