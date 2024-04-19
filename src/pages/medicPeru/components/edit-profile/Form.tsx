import { FormEvent } from "react";

export const Form = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("enviando edicion...");
  };

  const onCancelEdit = () => {
    console.log("cancelando edicion...");
  };

  //todo: IMPLMENTAR FORMIK

  return (
    <div className="w-full mt-6 px-24 ">
      <h2 className="text-lg font-semibold mb-6">Informacion personal</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid grid-rows-7 grid-cols-6 gap-4">
          {/* row1 */}
          <div className="flex flex-col  col-span-2">
            <label htmlFor="nombre" className="text-regular pl-1 text-sm ">
              Nombres
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex flex-col  col-span-3">
            <label htmlFor="apellidos" className="text-regular pl-1 text-sm ">
              Apellidos
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="dni" className="text-regular pl-1 text-sm ">
              DNI
            </label>
            <input
              type="text"
              id="dni"
              name="dni"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          {/* row2 */}
          <div className="flex flex-col  ">
            <label htmlFor="usuario" className="text-regular pl-1 text-sm ">
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="celular" className="text-regular pl-1 text-sm ">
              Celular
            </label>
            <input
              type="text"
              id="celular"
              name="celular"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex flex-col  col-span-4">
            <label htmlFor="correo" className="text-regular pl-1 text-sm ">
              Correo
            </label>
            <input
              type="text"
              id="correo"
              name="correo"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          {/* row3 */}
          <div className="flex flex-col  col-span-2">
            <label
              htmlFor="departamento"
              className="text-regular pl-1 text-sm "
            >
              Departamento
            </label>
            <input
              type="text"
              id="departamento"
              name="departamento"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex flex-col  col-span-2">
            <label htmlFor="provincia" className="text-regular pl-1 text-sm ">
              Provincia
            </label>
            <input
              type="text"
              id="provincia"
              name="provincia"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex flex-col  col-span-2">
            <label htmlFor="distrito" className="text-regular pl-1 text-sm ">
              Distrito
            </label>
            <input
              type="text"
              id="distrito"
              name="distrito"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          {/* row4 */}
          <div className="flex flex-col  col-span-6">
            <label htmlFor="direccion" className="text-regular pl-1 text-sm ">
              Direccion
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          {/* row5 */}
          <div className="flex flex-col  col-span-2">
            <label htmlFor="sexo" className="text-regular pl-1 text-sm ">
              Sexo
            </label>
            <input
              type="text"
              id="sexo"
              name="sexo"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="fecNac" className="text-regular pl-1 text-sm ">
              Fecha de Nacimiento
            </label>
            <input
              type="text"
              id="fecNac"
              name="fecNac"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex flex-col  col-span-2">
            <label htmlFor="edad" className="text-regular pl-1 text-sm ">
              Edad
            </label>
            <input
              type="text"
              id="edad"
              name="edad"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          {/* row6 */}
          <div className="flex flex-col  col-span-3">
            <label htmlFor="password" className="text-regular pl-1 text-sm ">
              Contraseña
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-3">
            <label htmlFor="repassword" className="text-regular pl-1 text-sm ">
              Confirmar Contraseña
            </label>
            <input
              type="text"
              id="repassword"
              name="repassword"
              className="py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          {/* row7 */}
          <div className="flex justify-end items-end gap-3 col-span-6">
            <button
              onClick={onCancelEdit}
              className="flex justify-center items-center gap-2 btn border-teal-500 hover:border-teal-600 text-lg text-teal-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex justify-center items-center gap-2 btn bg-teal-500 hover:bg-teal-600 text-lg text-white"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
