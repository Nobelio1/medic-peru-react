import { Outlet } from "react-router-dom";
import SidebarItems from "../medicPeru/components/sidebar/SidebarItems";
import Sidebar from "../medicPeru/components/sidebar/Sidebar";
import { Menu } from "lucide-react";
import { Logo } from "../../assets";

const WithSidebar = () => {
  // return (
  //   <div className="flex w-full h-screen roboto-thin bg-sky-100">
  //     <div>
  //       <Sidebar children={<SidebarItems isDoctor={false} />} />
  //     </div>
  //     <div className="container mx-auto">
  //       <Outlet />
  //     </div>
  //   </div>
  // );

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <header className="block h-16 bg-white mb-4 px-4">
          <nav className="h-full flex items-center">
            <label htmlFor="my-drawer" className=" drawer-button pr-3">
              <Menu />
            </label>
            <img src={Logo} alt="logo-icon" className="w-10" />
            <h3 className="pl-1 font-bold text-xl montserrat-bold">
              MedicPeru
            </h3>
          </nav>
        </header>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar children={<SidebarItems isDoctor={false} />} />
      </div>
    </div>
  );
};

export default WithSidebar;
