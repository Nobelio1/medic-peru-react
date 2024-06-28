import {
  BriefcaseMedical,
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

  const handleLinkClick = () => {
    const drawerCheckbox = document.getElementById("my-drawer") as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };
  

  return (
    <main className="App">
      <NavLink to={"/medic-peru"} onClick={handleLinkClick}>
        <SidebarItem
          icon={<LayoutDashboard size={30} />}
          text="Dashboard"
          active={location.pathname === "/medic-peru"}
        />
      </NavLink>
      {usuario.rol === "1" && (
        <NavLink to={"/medic-peru/cita-medica"} onClick={handleLinkClick}>
          <SidebarItem
            icon={<ClipboardPlus size={30} />}
            text="Citas"
            active={location.pathname === "/medic-peru/cita-medica"}
          />
        </NavLink>
      )}

      {usuario.rol !== "1" && (
        <div>
          <NavLink to={"/medic-peru/filter-doctor"} onClick={handleLinkClick}>
            <SidebarItem
              icon={<BriefcaseMedical size={30} />}
              text="Doctores"
              active={location.pathname === "/medic-peru/filter-doctor"}
            />
          </NavLink>

          <NavLink to={"/medic-peru/specialties"} onClick={handleLinkClick}>
            <SidebarItem
              icon={<Stethoscope size={30} />}
              text="Especialidades"
              active={location.pathname === "/medic-peru/specialties"}
            />
          </NavLink>
        </div>
      )}
      <hr className="my-3 border border-gray-400 " />
      <SidebarItem icon={<Settings size={30} />} text="Configuracion" />
    </main>
  );
};
