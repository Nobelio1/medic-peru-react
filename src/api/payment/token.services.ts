import { KEYS } from "./../../../config";
import {
  CreationToken,
  ResponseToken,
} from "../../interfaces/customers.interface";
import { environment } from "../environment";

const username = KEYS.PUBLIC_KEY;
const password = "";
const basicAuth = btoa(`${username}:${password}`);

export const createToken = async ({ token }: { token: CreationToken }) => {
  try {
    const request = await fetch(
      `${environment.API_OPENPAY}/${KEYS.MERCHANT_ID}/tokens`,
      {
        method: "POST",
        body: JSON.stringify(token),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicAuth}`,
        },
      }
    );

    let response: ResponseToken = await request.json();

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
