import {Scheduler} from "@aldabil/react-scheduler"
import { useAppStore } from "../store/useAppStore"
import { useEffect } from "react";
import {  getEventosDoctor } from "../api/medicPeru/CitasServices";

export interface Eventos {
  event_id: number | string;
  title: string;
  start: Date;
  end: Date;
  disabled?: boolean;
  color?: string;
  editable?: boolean;
  deletable?: boolean;
  draggable?: boolean;
  allDay?: boolean;
}

export const CalendarioEventos = () => {
  const usuario = useAppStore((state) => state.usuario);
  let events: Eventos[] = []


  const eventos = async () =>{
    const listaEventos = await getEventosDoctor(usuario.email) 
    listaEventos.map((evento) => {
      events.push({
        event_id: evento.idCita,
        title: evento.descripcion,
        start: new Date(evento.fechaHora),
        end:  new Date(new Date(evento.fechaHora).getTime() + evento.duracion * 60000),
        editable: false,
        deletable: false
      })
    })
  }

  

  useEffect(() => {
    eventos()
  }, [])
  
  return (
    <>
      <Scheduler
        view="week"
        events={events}
        timeZone="America/Lima"
        day={{
          startHour: 9, 
          endHour: 21, 
          step: 60,
        }}
        week={{
          weekDays: [0, 1, 2, 3, 4, 5], 
          weekStartOn: 6, 
          startHour: 9, 
          endHour: 21, 
          step: 60,
        }}
      />  
    </>
  )
}
