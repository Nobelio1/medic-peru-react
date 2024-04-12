import { Outlet } from "react-router-dom";
import SidebarItems from "../components/sidebar/SidebarItems";
import Sidebar from "../components/sidebar/Sidebar";

const WithSidebar = () => {
    return (
        <div className="flex">
            <Sidebar children={<SidebarItems />}/>
            <div className="container mx-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default WithSidebar