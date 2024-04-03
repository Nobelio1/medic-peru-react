import { Logo } from "../assets/index";

export const Panel = () => {
  return (
    <div className="flex flex-row md:flex-col lg:flex-row w-full h-full justify-center items-center font-bold text-center">
      <img src={Logo} alt="logo-coco" className="w-48" />
      <h1 className="text-5xl">MedicPeru</h1>
    </div>
  );
};
