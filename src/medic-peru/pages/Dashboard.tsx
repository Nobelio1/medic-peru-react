import { Anuncios } from "../components/dashboard/main/Anuncios"
import { Calendar } from "../components/dashboard/main/Calendar"
import { Filter } from "../components/dashboard/main/Filter"
import { Historial } from "../components/dashboard/main/Historial"

export const Dashboard = () => {
  return (
    <div className="flex justify-around my-20">
      <div className="flex flex-col items-center justify-center space-y-10">
        <Anuncios />
        <Filter />
        <Historial />
      </div>

      <div>
        <Calendar />
      </div>
    </div>
  )
}


