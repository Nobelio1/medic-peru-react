import { MoreVertical } from "lucide-react";

export const ButtonLogout = () => {
  return (
    <>
      <div className="dropdown dropdown-top dropdown-end">
        <div tabIndex={0} role="button" className="m-1">
          <MoreVertical size={20} className="text-black" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Cambiar de cuenta</a>
          </li>
          <li>
            <a>Cerrar Sesion</a>
          </li>
        </ul>
      </div>
    </>
  );
};
