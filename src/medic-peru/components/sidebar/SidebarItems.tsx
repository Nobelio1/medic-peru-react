import { BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle } from "lucide-react";
import { SidebarItem } from "./Sidebar";
import { Link } from "react-router-dom";

//!-------------------------------------------------------------------------------------------------------

export default function SidebarItems() {

    //!-------------------------------------------------------------------------------------------------------

    return (
        <main className="App">
            <Link to={"/dashboard"}>
                <SidebarItem
                    icon={<LayoutDashboard size={30} />}
                    text="Dashboard"
                    alert
                />
            </Link>

            <Link to={"/profile"}>
                <SidebarItem icon={<BarChart3 size={30} />} text="Pacientes" active />
            </Link>

            <Link to={"/chat"}>
                <SidebarItem icon={<UserCircle size={30} />} text="Chats" />
            </Link>

            <Link to={"/chat-ia"}>
                <SidebarItem icon={<Boxes size={30} />} text="Chat IA" />
            </Link>
            {/* <SidebarItem icon={<Package size={30} />} text="Ordenes" alert />
            <SidebarItem icon={<Receipt size={30} />} text="Pagos" /> */}
            <hr className="my-3 border border-gray-400 " />
            <SidebarItem icon={<Settings size={30} />} text="Configuracion" />
            <SidebarItem icon={<LifeBuoy size={30} />} text="Ayuda" />
        </main>
    );
}