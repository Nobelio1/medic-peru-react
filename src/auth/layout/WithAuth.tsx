import { Outlet } from "react-router-dom"

const WithAuth = () => {
    return (
            // <div className="flex flex-col h-screen md:flex-row montserrat-regular"> DIOS MIO PRIMO ARREGLA ESTO POR DIOS
            <div>
                {/* <Panel /> */}
                <div>
                    <Outlet />
                </div>
            </div>
    )
}

export default WithAuth