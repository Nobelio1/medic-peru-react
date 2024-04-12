import { Outlet } from "react-router-dom";
import SidebarItems from "../medicPeru/components/sidebar/SidebarItems";
import Sidebar from "../medicPeru/components/sidebar/Sidebar";

const WithSidebar = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar children={<SidebarItems />} />
      </div>
      <div className="container mx-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default WithSidebar;
