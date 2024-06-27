import { Result } from "./medicPeru.interface";

export interface CitasIn {
  accessToken:    string;
  attendeeEmails: string[];
  description:    string;
  endTime:        string;
  location:       string;
  startTime:      string;
  summary:        string;
}

export interface CitasSalida {
  attendees:   Attendee[];
  created:     Created;
  creator:     Creator;
  description: string;
  end:         End;
  etag:        string;
  htmlLink:    string;
  iCalUID:     string;
  id:          string;
  kind:        string;
  location:    string;
  organizer:   Creator;
  reminders:   Reminders;
  sequence:    number;
  start:       End;
  status:      string;
  summary:     string;
  updated:     Created;
  eventType:   string;
}

export interface Attendee {
  email:          string;
  responseStatus: string;
}

export interface Created {
  value:         number;
  dateOnly:      boolean;
  timeZoneShift: number;
}

export interface Creator {
  email: string;
  self:  boolean;
}

export interface End {
  dateTime: Created;
  timeZone: string;
}

export interface Reminders {
  useDefault: boolean;
}


export interface CitasOut extends Result {
  data: CitasSalida;
}

export interface Disponibilidad {
  email: string;
  hora_inicio: string;
  hora_fin: string;
}

export interface ObtenerDisponibilidad {
  email: string;
  fecha: string;
}

export interface ObtenerDisponibilidadOut extends Result {
  data: string[];
}
