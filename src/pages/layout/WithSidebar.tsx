import { Outlet } from "react-router-dom";
import SidebarItems from "../medicPeru/components/sidebar/SidebarItems";
import Sidebar from "../medicPeru/components/sidebar/Sidebar";

const WithSidebar = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="bg-green-100">
        <Sidebar children={<SidebarItems />} />
      </div>
      <div className="container mx-auto bg-orange-100 ">
        <Outlet />
      </div>
    </div>
  );
};

export default WithSidebar;
