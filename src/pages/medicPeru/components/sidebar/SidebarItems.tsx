import {
  BookUser,
  BotMessageSquare,
  BriefcaseMedical,
  LayoutDashboard,
  MessageSquareMore,
  Settings,
} from "lucide-react";
import { SidebarItem } from "./Sidebar";
import { NavLink, useLocation } from "react-router-dom";

//!-------------------------------------------------------------------------------------------------------

interface SidebarItemProps {
  isDoctor: boolean;
}

// ItemsPaciente

export default function SidebarItems({ isDoctor }: SidebarItemProps) {
  const location = useLocation();

  //!-------------------------------------------------------------------------------------------------------

  return (
    <main className="App">
      {/* ALGUNAS RUTAS ESTAR AQUI PROVISIONALMENTE */}
      <NavLink to={"/medic-peru"}>
        <SidebarItem
          icon={<LayoutDashboard size={30} />}
          text="Dashboard"
          active={location.pathname === "/medic-peru"}
        />
      </NavLink>
      {isDoctor && (
        <NavLink to={"/medic-peru/filter-pacientes"}>
          <SidebarItem
            icon={<BookUser size={30} />}
            text="Pacientes"
            active={location.pathname === "/medic-peru/filter-pacientes"}
          />
        </NavLink>
      )}
      {!isDoctor && (
        <NavLink to={"/medic-peru/filter-doctor"}>
          <SidebarItem
            icon={<BriefcaseMedical size={30} />}
            text="Doctores"
            active={location.pathname === "/medic-peru/filter-doctor"}
          />
        </NavLink>
      )}
      <NavLink to={"/medic-peru/chat"}>
        <SidebarItem
          icon={<MessageSquareMore size={30} />}
          text="Chats"
          active={location.pathname === "/medic-peru/chat"}
        />
      </NavLink>

      <NavLink to={"/medic-peru/chat-ia"}>
        <SidebarItem
          icon={<BotMessageSquare size={30} />}
          text="ChatIA"
          active={location.pathname === "/medic-peru/chat-ia"}
        />
      </NavLink>
      <hr className="my-3 border border-gray-400 " />
      <SidebarItem icon={<Settings size={30} />} text="Configuracion" />
    </main>
  );
}
