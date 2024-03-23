import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const WithSidebar = () => {
    return (
        <>
            <Sidebar />
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default WithSidebar