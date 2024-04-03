import { Outlet } from "react-router-dom";
import { Panel } from "../auth";

const WithAuth = () => {
  return (
    <div>
      <Panel />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default WithAuth;
