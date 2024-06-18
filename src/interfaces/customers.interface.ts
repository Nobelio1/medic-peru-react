//!!----------------------CREACION DE TOKEN DE TARJETA----------------------!!//

export interface CreationToken {
  card_number: string;
  holder_name: string;
  expiration_year: string;
  expiration_month: string;
  cvv2: string;
  address: Address2;
}

export interface Address2 {
  city: string;
  country_code: string;
  postal_code: string;
  line1: string;
  state: string;
}

export interface ResponseToken {
  description?: string;
  http_code?: string;
  id: string;
  card: Card;
}

export interface Card {
  card_number: string;
  holder_name: string;
  expiration_year: string;
  expiration_month: string;
  address: Address;
  creation_date: string;
  brand: string;
  type: string;
}

export interface Address {
  line1: string;
  line2: string;
  line3: string;
  state: string;
  city: string;
  postal_code: string;
  country_code: string;
}

//!!----------------------COBRO POR TOKEN----------------------!!//

export interface PaymentToken {
  source_id?: string;
  method: string;
  amount: number;
  currency: string;
  description: string;
  order_id: string;
  device_session_id: string;
  customer: Customer;
}

export interface Customer {
  name: string;
  last_name: string;
  phone_number: string;
  email: string;
}

//!!----------------------RESPUESTA PAGO----------------------!!//

export interface PaymentResponse {
  http_code?: string;
  id: string;
  authorization: string;
  operation_type: string;
  transaction_type: string;
  status: string;
  conciliated: boolean;
  creation_date: Date;
  operation_date: Date;
  description: string;
  error_message: string;
  order_id: string;
  card: Card;
  gateway_card_present: string;
  amount: number;
  customer: Customer2;
  fee: Fee;
  currency: string;
  method: string;
}

export interface Card {
  type: string;
  brand: string;
  address: Address;
  card_number: string;
  holder_name: string;
  expiration_year: string;
  expiration_month: string;
  allows_charges: boolean;
  allows_payouts: boolean;
  bank_name: string;
  bank_code: string;
}

export interface Address {
  line1: string;
  line2: string;
  line3: string;
  state: string;
  city: string;
  postal_code: string;
  country_code: string;
}

export interface Customer2 {
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  creation_date: Date;
  external_id: string;
  clabe: string;
}

export interface Fee {
  amount: number;
  tax: number;
  currency: string;
}

//!!----------------------DATOS DEL SERVICIOS----------------------!!//

export interface DatosServicio {
  card_number: string;
  holder_name: string;
  expiration_year: string;
  expiration_month: string;
  cvv2: string;
  amount: number;
  description: string;
  order_id: string;
  name: string;
  last_name: string;
  phone_number: string;
  email: string;
  city: string;
  country_code: string;
  postal_code: string;
  line1: string;
  state: string;
}
