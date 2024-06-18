import { KEYS } from "../../../config";
import {
  PaymentResponse,
  PaymentToken,
} from "../../interfaces/customers.interface";
import { environment } from "../environment";

const username = KEYS.SECRET_KEY;
const password = "";
const basicAuth = btoa(`${username}:${password}`);

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
