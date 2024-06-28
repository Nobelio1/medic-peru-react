import {
  BriefcaseMedical,
  CalendarCheck,
  ClipboardPlus,
  LayoutDashboard,
  Settings,
  Stethoscope,
} from "lucide-react";
import { SidebarItem } from "./Sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../../../../store/useAppStore";

//!-------------------------------------------------------------------------------------------------------

// ItemsPaciente

export default function SidebarItems() {
  const location = useLocation();

  const usuario = useAppStore((state) => state.usuario);

  //!-------------------------------------------------------------------------------------------------------

  return (
    <main className="App">
      <NavLink to={"/medic-peru"}>
        <SidebarItem
          icon={<LayoutDashboard size={30} />}
          text="Dashboard"
          active={location.pathname === "/medic-peru"}
        />
      </NavLink>
      {usuario.rol === "1" && (
        <>
          <NavLink to={"/medic-peru/cita-medica"}>
            <SidebarItem
              icon={<ClipboardPlus size={30} />}
              text="Citas"
              active={location.pathname === "/medic-peru/cita-medica"}
            />
          </NavLink>
          <NavLink to={"/medic-peru/disponibilidad"}>
            <SidebarItem
              icon={<CalendarCheck size={30} />}
              text="Disponibilidad"
              active={location.pathname === "/medic-peru/disponibilidad"}
            />
          </NavLink>
        </>
      )}

      {usuario.rol !== "1" && (
        <div>
          <NavLink to={"/medic-peru/filter-doctor"}>
            <SidebarItem
              icon={<BriefcaseMedical size={30} />}
              text="Doctores"
              active={location.pathname === "/medic-peru/filter-doctor"}
            />
          </NavLink>

          <NavLink to={"/medic-peru/specialties"}>
            <SidebarItem
              icon={<Stethoscope size={30} />}
              text="Especialidades"
              active={location.pathname === "/medic-peru/specialties"}
            />
          </NavLink>
        </div>
      )}
      {/* <NavLink to={"/medic-peru/chat"}>
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
      </NavLink> */}
      <hr className="my-3 border border-gray-400 " />
      <SidebarItem icon={<Settings size={30} />} text="Configuracion" />
    </main>
  );
}
