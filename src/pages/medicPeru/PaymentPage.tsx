import { SlArrowLeft } from "react-icons/sl";
import { Logo, Tarjetas } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import {
  CreationToken,
  DatosServicio,
  PaymentToken,
} from "../../interfaces/customers.interface";
import { createToken } from "../../api/payment/token.services";
import { obtenerIdTrans, sendPayment } from "../../api/payment/payment.services";
import { useAppStore } from "../../store/useAppStore";
import { v4 as uuidv4 } from 'uuid';
import { generarCita } from "../../api/medicPeru/CitasServices";

const initialValues: DatosServicio = {
  card_number: "",
  holder_name: "",
  expiration_year: "",
  expiration_month: "",
  cvv2: "",
  amount: 0,
  description: "",
  order_id: "",
  name: "",
  last_name: "",
  phone_number: "",
  email: "",
  city: "",
  country_code: "",
  postal_code: "",
  line1: "",
  state: "",
};

export const PaymentPage = () => {
  const precio = useAppStore((state) => state.precio);
  const setCita = useAppStore((state) => state.setCita);
  const cita = useAppStore((state) => state.cita);

  const price = localStorage.getItem("price");
  const nagivate = useNavigate();
  const retrocer = () => {
    nagivate(-1);
  };

  const processPayment = async (values: DatosServicio) => {
    const token: CreationToken = {
      card_number: values.card_number,
      holder_name: values.holder_name,
      expiration_year: values.expiration_year,
      expiration_month: values.expiration_month,
      cvv2: values.cvv2,
      address: {
        city: values.city,
        country_code: values.country_code,
        postal_code: values.postal_code,
        line1: values.line1,
        state: values.state,
      },
    };

    const id_token: string | undefined = await createToken({ token: token });
    const myUuid = uuidv4();

    const payment: PaymentToken = {
      amount: precio,
      description: values.description,
      order_id: myUuid,
      source_id: id_token,
      method: "card",
      currency: "PEN",
      device_session_id: "kR1MiQhz2otdIuUlQkbEyitIqVMiI16f",
      customer: {
        name: values.name,
        last_name: values.last_name,
        phone_number: values.phone_number,
        email: values.email,
      },
    };

    const response: string = await sendPayment( payment );
    const idTrans: number = await obtenerIdTrans(response);

    setCita({ ...cita, idTransaccion: idTrans });

    console.log(cita)
    const citaCreada = await generarCita({ cita });

    if(citaCreada === "000"){
      nagivate("/medic-peru/specialties/servicie/success");
    }
  };

  return (
    <div className="w-full px-4 mb-4">
      <div className="bg-white rounded-md h-[768px] py-2 px-4">
        <button className="btn btn-ghost text-lg" onClick={retrocer}>
          <SlArrowLeft />
          Volver
        </button>

        <h1 className="mt-4 text-2xl text-center uppercase font-bold text-blue-800">
          Proceso de pago
        </h1>

        <Formik
          initialValues={initialValues}
          // validate={(values: LoginIn) => {
          //   const errores = authLoginValidator({
          //     loginUser: values,
          //   });
          //   return errores;
          // }}
          onSubmit={(values) => {
            values.amount = Number(price);
            values.description = "";
            values.country_code = "PE";
            values.holder_name = `${values.name} ${values.last_name}`;
            values.state = `${values.city}`;
            processPayment(values);
          }}
        >
          <Form className="mt-12 px-2">
            <div className="grid mt-1">
              <Field
                className="border border-blue-300 rounded-md px-2 py-1"
                type="text"
                placeholder="Numero de tarjeta"
                name="card_number"
              />
            </div>
            <div className="grid grid-cols-6 mt-1 gap-1">
              <Field
                className="border border-blue-300 rounded-md px-2 py-1 col-span-3"
                type="text"
                placeholder="Celular"
                name="phone_number"
              />
              <Field
                className="border border-blue-300 rounded-md px-2 py-1 col-span-1"
                type="text"
                placeholder="MM"
                name="expiration_month"
              />
              <Field
                className="border border-blue-300 rounded-md px-2 py-1 col-span-1"
                type="text"
                placeholder="AA"
                name="expiration_year"
              />
              <Field
                className="border border-blue-300 rounded-md px-2 py-1 col-span-1"
                type="text"
                placeholder="CVV"
                name="cvv2"
              />
            </div>
            <div className="grid grid-cols-2 mt-1 gap-1">
              <Field
                className="border border-blue-300 rounded-md px-2 py-1"
                type="text"
                placeholder="Nombres"
                name="name"
              />
              <Field
                className="border border-blue-300 rounded-md px-2 py-1"
                type="text"
                placeholder="Apellidos"
                name="last_name"
              />
            </div>
            <div className="grid mt-1">
              <Field
                className="border border-blue-300 rounded-md px-2 py-1"
                type="text"
                placeholder="Correo electronico"
                name="email"
              />
            </div>
            <div className="grid mt-3">
              <Field
                className="border border-blue-300 rounded-md px-2 py-1"
                type="text"
                placeholder="Direccion"
                name="line1"
              />
            </div>
            <div className="grid-cols-2 grid gap-1 mt-1">
              <Field
                className="border border-blue-300 rounded-md px-2 py-1"
                type="text"
                placeholder="Cuidad / Distrito"
                name="city"
              />
              <Field
                className="border border-blue-300 rounded-md px-2 py-1"
                type="text"
                placeholder="Codigo Postal"
                name="postal_code"
              />
            </div>
            <div className="text-center mt-16">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-bold text-xl"
              >
                Pagar S/ {precio}
              </button>
              <p className="mt-4 text-xss">
                Lee nuestros{" "}
                <a
                  href="https://clinicaespecialista24horas.blogspot.com/2024/06/terminos-y-condiciones-de-politica-y.html"
                  target="_blank"
                  className="text-indigo-500"
                >
                  Terminos y condionces
                </a>
              </p>
            </div>
          </Form>
        </Formik>
        <div className="flex justify-between mt-14 px-5">
          <img src={Logo} alt="img-medic-peru" className="w-10 object-cover" />
          <img src={Tarjetas} alt="img-tarjeta" className="w-32" />
        </div>
      </div>
    </div>
  );
};
