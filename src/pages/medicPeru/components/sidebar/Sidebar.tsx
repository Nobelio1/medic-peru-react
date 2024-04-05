import { ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState, ReactNode } from "react";
import { ButtonLogout } from "../../../../components/ButtonLogout";

//!-------------------------------------------------------------------------------------------------------

interface SidebarProps {
  children: ReactNode;
}

interface SidebarContextType {
  expanded: boolean;
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

//!-------------------------------------------------------------------------------------------------------

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

//!-------------------------------------------------------------------------------------------------------

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  //!-------------------------------------------------------------------------------------------------------

  return (
    <aside className="h-screen mr-5">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center mt-3">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <ChevronFirst className="text-black" />
            ) : (
              <ChevronLast className="mr-1.5 text-black" />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 mt-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="flex p-3 ml-2">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-black">Username1</h4>
              <span className="text-sm text-gray-600">username1@gmail.com</span>
            </div>
            {/* REVISAR Z-INDEX */}
            <div className="z-40">
              <ButtonLogout />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

//!-------------------------------------------------------------------------------------------------------

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);

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
      <span
        className={`overflow-hidden text-lg transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-lg text-center
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
