import { KEYS } from "../../../config";
import {
  PaymentResponse,
  PaymentToken,
} from "../../interfaces/customers.interface";
import { Result } from "../../interfaces/medicPeru.interface";
import { environment } from "../environment";

const username = KEYS.SECRET_KEY;
const password = "";
const basicAuth = btoa(`${username}:${password}`);

interface IdTrans extends Result {
  data: number
}

export const paymentByToken = async ({
  payment,
}: {
  payment: PaymentToken;
}) => {
  console.log("Dentro de paymentByToken", payment);
  try {
    const request = await fetch(
      `${environment.API_OPENPAY}/${KEYS.MERCHANT_ID}/charges`,
      {
        method: "POST",
        body: JSON.stringify(payment),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicAuth}`,
        },
      }
    );

    let response: PaymentResponse = await request.json();

    if (response.http_code) {
      console.log(response.description);
      return;
    }

    return response.id;
  } catch (error) {
    console.log(error);
    throw new Error("Algo salio mal");
  }
};

export const sendPayment = async ( payment: PaymentToken) => {
  try {
    const request = await fetch(`${environment.API_MASTER}/payment/createCharge`, {
      method: "POST",
      body: JSON.stringify(payment),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let response: PaymentResponse = await request.json();
    console.log(response)

    return response.id;
  } catch (error) {
    console.log(error);
    throw new Error("Algo salio mal");
  }
};

export const obtenerIdTrans = async (id: string) => {
  try {
    const req = await fetch(
      `${environment.API_MASTER}/payment/generarIdTransaccion/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res:IdTrans  = await req.json();

    if (res.code !== "000") {
      throw new Error(res.message);
    }

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al servicio de generar citas");
  }
};
