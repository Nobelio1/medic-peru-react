import { BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle } from "lucide-react";
import { SidebarItem } from "./Sidebar";
import { NavLink, useLocation } from "react-router-dom";

//!-------------------------------------------------------------------------------------------------------

export default function SidebarItems() {

    const location = useLocation();

    //!-------------------------------------------------------------------------------------------------------

    return (
        <main className="App">
            <NavLink to={"/dashboard"}>
                <SidebarItem
                    icon={<LayoutDashboard size={30} />}
                    text="Dashboard"
                    alert
                    active={location.pathname === "/dashboard"}
                />
            </NavLink>

            <NavLink to={"/profile"}>
                <SidebarItem icon={<BarChart3 size={30} />} text="Pacientes" active={location.pathname === "/profile"} />
            </NavLink>

            <NavLink to={"/chat"}>
                <SidebarItem icon={<UserCircle size={30} />} text="Chats" active={location.pathname === "/chat"} />
            </NavLink>

            <NavLink to={"/chat-ia"}>
                <SidebarItem icon={<Boxes size={30} />} text="ChatIA" active={location.pathname === "/chat-ia"} />
            </NavLink>

            <NavLink to={"/medical-history"}>
                <SidebarItem icon={<Package size={30} />} text="Historia Medica" alert active={location.pathname === "/medical-history"}/>
            </NavLink>
            {/* <SidebarItem icon={<Receipt size={30} />} text="Pagos" /> */}
            <hr className="my-3 border border-gray-400 " />
            <SidebarItem icon={<Settings size={30} />} text="Configuracion" />
            <SidebarItem icon={<LifeBuoy size={30} />} text="Ayuda" />
        </main>
    );
}