import { ReactNode } from "react";

interface InfoPacienteCardProps {
  backgroundColor: string;
  icon: ReactNode;
  title: string;
  titleColor: string;
  subtitle: string;
  subtitleColor: string;
}

export const InfoPacienteCard = ({
  backgroundColor,
  icon,
  title,
  titleColor,
  subtitle,
  subtitleColor,
}: InfoPacienteCardProps) => {
  return (
    <div
      className={`flex flex-row gap-3 item-center mb-2 ${backgroundColor} p-2 rounded-md`}
    >
      <div className="flex justify-center items-center">{icon}</div>
      <div className=" w-full ">
        <span className={`text-lg ${titleColor} font-bold`}>{title}</span>
        <p className={` ${subtitleColor} text-md mb-1`}>{subtitle}</p>
      </div>
    </div>
  );
};
