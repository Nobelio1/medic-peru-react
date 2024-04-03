import { Outlet } from "react-router-dom";
import { Panel } from "../auth";

const WithAuth = () => {
  return (
    <div className=" mx-auto montserrat-regular">
      <div className="flex flex-col h-screen md:flex-row">
        <div className="w-full lg:w-3/4 md:w-1/2 h-full sm:block hidden">
          <Panel />
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2 shadow-md h-full bg-gray-100 p-3 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default WithAuth;
