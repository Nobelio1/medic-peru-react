import { ReactNode } from "react";
import { Logo } from "../../../../assets";
import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

//!-------------------------------------------------------------------------------------------------------

interface SidebarProps {
  children: ReactNode;
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

//!-------------------------------------------------------------------------------------------------------

export default function Sidebar({ children }: SidebarProps) {
  //!-------------------------------------------------------------------------------------------------------

  return (
    <aside className="h-screen mr-5">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex items-center justify-center mt-3 gap-2 ">
          <Link to="/medic-peru" className="flex items-center gap-1">
            <img src={Logo} alt="logo-icon" className="w-12" />
            <h3 className="font-bold text-2xl montserrat-bold">MedicPeru</h3>
          </Link>
        </div>

        <ul className="flex-1 px-3 mt-3 z-10">{children}</ul>

        <div className="flex p-3 ml-2 z-20 items-center">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div className="flex justify-between items-center overflow-hidden transition-all w-40 ml-3">
            <div className="leading-4">
              <h4 className="font-semibold text-black">Username1</h4>
              <span className="text-sm text-gray-600">#41412P</span>
            </div>
          </div>
          <NavLink to={"/auth/login"} className={"ml-4"}>
            <LogOut size={25} color="red" />
          </NavLink>
        </div>
      </nav>
    </aside>
  );
}

//!-------------------------------------------------------------------------------------------------------

export function SidebarItem({ icon, text, active }: SidebarItemProps) {
  //!-------------------------------------------------------------------------------------------------------

  return (
    <li
      className={`
          relative flex items-center py-4 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }
      `}
    >
      {icon}
      <span className="overflow-hidden text-lg transition-all w-52 ml-3">
        {text}
      </span>
    </li>
  );
}
