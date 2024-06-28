import { Field, Form, Formik } from "formik";
import { setDisponibilidad } from "../../api/medicPeru/disponibildadService";
import { useAppStore } from "../../store/useAppStore";
import { useState } from "react";

export interface DisponibilidadDoctor {
  diaSemana: number;
  emailDoctor: string;
  horaFin: string;
  horaInicio: string;
}

const dias = [
  {
    id: 1,
    dia: "Lunes",
  },
  {
    id: 2,
    dia: "Martes",
  },
  {
    id: 3,
    dia: "Miercoles",
  },
  {
    id: 4,
    dia: "Jueves",
  },
  {
    id: 5,
    dia: "Viernes",
  },
  {
    id: 6,
    dia: "Sabado",
  },
  {
    id: 7,
    dia: "Domingo",
  },
];

const initialValues: DisponibilidadDoctor = {
  diaSemana: 0,
  emailDoctor: "",
  horaFin: "",
  horaInicio: "",
};

export const DefinirDisponibilidad = () => {
  const [mensaje, setMensaje] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [loading, setLoading] = useState(false);
  const usuario = useAppStore((state) => state.usuario);

  const sendDisponibilidad = async (disponibilidad: DisponibilidadDoctor) => {
    setLoading(true);
    const res: string = await setDisponibilidad(disponibilidad);
    setLoading(false);
    setMensaje(res);

    setMostrar(true);
    setTimeout(() => {
      setMostrar(false);
    }, 2000);
  };
  return (
    <div className="w-full px-4 mb-4">
      <div className="bg-white rounded-md px-4 pb-4 ">
        <h1 className="text-xl py-4 font-semibold">Define tus Horarios</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={(values: DisponibilidadDoctor) => {
            values.diaSemana = +values.diaSemana;
            values.emailDoctor = usuario.email;
            values.horaInicio = values.horaInicio+':00';
            values.horaFin = values.horaFin+':00';
            console.log(values);
            sendDisponibilidad(values);
          }}
        >
          <Form>
            <label htmlFor="dia_semana" className="block pb-1">
              Dia:{" "}
            </label>
            <Field
              as="select"
              className="select select-bordered w-full max-w-xs mb-4"
              id="dia_semana"
              name="diaSemana"
            >
              <option value="">Seleccione su dia</option>
              {dias.map((dia) => (
                <option key={dia.id} value={dia.id}>
                  {dia.dia}
                </option>
              ))}
            </Field>

            <label htmlFor="horaInicio" className="block pb-1">
              Inicio:{" "}
            </label>
            <Field
              type="time"
              placeholder="Type here"
              name="horaInicio"
              id="horaInicio"
              className="input input-bordered w-full max-w-xs mb-4"
            />

            <label htmlFor="horaFin" className="block pb-1">
              Fin:{" "}
            </label>
            <Field
              type="time"
              placeholder="Type here"
              name="horaFin"
              id="horaFin"
              className="input input-bordered w-full max-w-xs mb-4"
            />
            <button
              disabled={loading}
              type="submit"
              className="btn btn-info text-white disabled:opacity-60"
            >
              Registrar
            </button>
          </Form>
        </Formik>
        {mostrar && (
          <div className="bg-green-500 text-white py-2 mt-4 flex justify-center rounded-md shadow-sm">
            <span>{mensaje}</span>
          </div>
        )}
      </div>
    </div>
  );
};
