import { Outlet } from "react-router-dom"
import Panel from "../auth/Panel"

const WithAuth = () => {
    return (
        <>
            <Panel />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default WithAuth