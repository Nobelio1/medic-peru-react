
import {Scheduler} from "@aldabil/react-scheduler"
import { EVENTS } from "./events/events"

export const CalendarioEventos = () => {
  return (
    <>
      <Scheduler
        view="week"
        events={EVENTS}
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
