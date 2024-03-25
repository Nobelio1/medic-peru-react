import { Logo } from "../../../../../assets"

export const Historial = () => {
    return (
        <div>
            <div className="flex justify-between">
                <h3 className="montserrat-bold">Historial de Citas</h3>
                <p className="montserrat-medium"> Ver todo</p>
            </div>

            <div className="mt-7 space-y-3">
                <div className="flex space-x-8 items-center p-3 pr-5 color-box-historial rounded-full border border-gray-950">
                    <img src={Logo} alt="Logo" className="w-20 h-20 rounded-full bg-slate-600" />
                    <div>
                        <h3 className="montserrat-bold">Dr. Julio Salas</h3>
                        <p className="montserrat-medium text-color-historial">Pediatra</p>
                    </div>
                    <h2 className="montserrat-bold">Lima</h2>
                    <h2 className="montserrat-bold">09/Marzo/2024</h2>
                    <h2 className="montserrat-bold">10:00 AM</h2>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="28"
                            height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                        </svg>
                        <p className="montserrat-medium text-sm text-color-historial ml-1">Descargar Cita</p>
                    </div>
                </div>

                <div className="flex space-x-8 items-center p-3 pr-5 color-box-historial rounded-full border border-gray-950">
                    <img src={Logo} alt="Logo" className="w-20 h-20 rounded-full bg-slate-600" />
                    <div>
                        <h3 className="montserrat-bold">Dr. Julio Salas</h3>
                        <p className="montserrat-medium text-color-historial">Pediatra</p>
                    </div>
                    <h2 className="montserrat-bold">Lima</h2>
                    <h2 className="montserrat-bold">09/Marzo/2024</h2>
                    <h2 className="montserrat-bold">10:00 AM</h2>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="28"
                            height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                        </svg>
                        <p className="montserrat-medium text-sm text-color-historial ml-1">Descargar Cita</p>
                    </div>
                </div>
                <div className="flex space-x-8 items-center p-3 pr-5 color-box-historial rounded-full border border-gray-950">
                    <img src={Logo} alt="Logo" className="w-20 h-20 rounded-full bg-slate-600" />
                    <div>
                        <h3 className="montserrat-bold">Dr. Julio Salas</h3>
                        <p className="montserrat-medium text-color-historial">Pediatra</p>
                    </div>
                    <h2 className="montserrat-bold">Lima</h2>
                    <h2 className="montserrat-bold">09/Marzo/2024</h2>
                    <h2 className="montserrat-bold">10:00 AM</h2>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="28"
                            height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                        </svg>
                        <p className="montserrat-medium text-sm text-color-historial ml-1">Descargar Cita</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
