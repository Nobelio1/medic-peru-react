import { Anuncios } from "../components/dashboard/main/Anuncios"
import { Calendar } from "../components/dashboard/main/Calendar"
import { CalendarHistorial } from "../components/dashboard/main/CalendarHistorial"
import { Filter } from "../components/dashboard/main/Filter"
import { Historial } from "../components/dashboard/main/Historial"

export const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-center justify-center w-2/4 space-y-10">
        <Anuncios />
        <Filter />
        <Historial />
      </div>

      <div className="flex flex-col items-center w-1/4">
        <Calendar />
        <CalendarHistorial />
      </div>
    </div>
  )
}


