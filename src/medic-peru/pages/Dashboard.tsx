import { Anuncios } from "../components/dashboard/main/Anuncios"
import { Calendar } from "../components/dashboard/main/Calendar"
import { Filter } from "../components/dashboard/main/Filter"
import { Historial } from "../components/dashboard/main/Historial"

export const Dashboard = () => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col items-center justify-center">
        <Anuncios />
        <Filter />
        <Historial />
      </div>
      <div className="divider lg:divider-horizontal pt-9"></div>
      <div>
        <Calendar />
      </div>
    </div>
  )
}


