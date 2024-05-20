import { Maintenance } from "../../assets";

export const ChatPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-40">
      <img src={Maintenance} alt="logo-de-mantenimiento" className="w-80 " />
      <p className="roboto-thin text-center mt-4 font-medium text-xl">
        ¡Seguimos trabajando para brindarle la mejor experiencia!
      </p>
    </div>
  );
};
