import { Outlet } from "react-router-dom";
import SidebarItems from "../medicPeru/components/sidebar/SidebarItems";
import Sidebar from "../medicPeru/components/sidebar/Sidebar";

const WithSidebar = () => {
  return (
    <div className="flex">
      <Sidebar children={<SidebarItems />} />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default WithSidebar;
