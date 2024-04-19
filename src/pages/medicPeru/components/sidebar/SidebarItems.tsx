import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Package,
  Settings,
  UserCircle,
} from "lucide-react";
import { SidebarItem } from "./Sidebar";
import { NavLink, useLocation } from "react-router-dom";

//!-------------------------------------------------------------------------------------------------------

export default function SidebarItems() {
  const location = useLocation();

  //!-------------------------------------------------------------------------------------------------------

  return (
    <main className="App">
      {/* ALGUNAS RUTAS ESTAR AQUI PROVISIONALMENTE */}
      <NavLink to={"/medic-peru"}>
        <SidebarItem
          icon={<LayoutDashboard size={30} />}
          text="Dashboard"
          active={location.pathname === "/dashboard"}
        />
      </NavLink>
      <NavLink to={"/medic-peru/filter-pacientes"}>
        <SidebarItem
          icon={<BarChart3 size={30} />}
          text="Pacientes"
          active={location.pathname === "/medic-peru/filter-pacientes"}
        />
      </NavLink>
      <NavLink to={"/medic-peru/filter-doctor"}>
        <SidebarItem
          icon={<BarChart3 size={30} />}
          text="Doctores"
          active={location.pathname === "/filter-pacientes"}
        />
      </NavLink>
      <NavLink to={"/medic-peru/chat"}>
        <SidebarItem
          icon={<UserCircle size={30} />}
          text="Chats"
          active={location.pathname === "/chat"}
        />
      </NavLink>
      <NavLink to={"/medic-peru/profile-doctor"}>
        <SidebarItem
          icon={<UserCircle size={30} />}
          text="Perfil Doctor"
          active={location.pathname === "/chat"}
        />
      </NavLink>
      <NavLink to={"/medic-peru/chat-ia"}>
        <SidebarItem
          icon={<Boxes size={30} />}
          text="ChatIA"
          active={location.pathname === "/chat-ia"}
        />
      </NavLink>
      <NavLink to={"/medic-peru/medical-history"}>
        <SidebarItem
          icon={<Package size={30} />}
          text="Historia Medica"
          active={location.pathname === "/medical-history"}
        />
      </NavLink>
      {/* <SidebarItem icon={<Receipt size={30} />} text="Pagos" /> */}
      <hr className="my-3 border border-gray-400 " />
      <SidebarItem icon={<Settings size={30} />} text="Configuracion" />
      <SidebarItem icon={<LifeBuoy size={30} />} text="Ayuda" />
      <NavLink to={"/"}>
        <SidebarItem icon={<LogOut size={30} />} text="Cerrar Sesión" />
      </NavLink>
    </main>
  );
}
