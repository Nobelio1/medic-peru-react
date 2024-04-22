import { Outlet } from "react-router-dom";
import SidebarItems from "../medicPeru/components/sidebar/SidebarItems";
import Sidebar from "../medicPeru/components/sidebar/Sidebar";

const WithSidebar = () => {
  //PREDETERMINADO EN DOCTOR

  return (
    <div className="flex w-full h-screen">
      <div>
        <Sidebar children={<SidebarItems isDoctor={true} />} />
      </div>
      <div className="container mx-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default WithSidebar;
