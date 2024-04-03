import { Logo } from "../../../../assets";

export const HospitalCard = () => {
  return (
    <>
      <div className="stats shadow w-full mb-4">
        <div className="flex justify-center">
          <img src={Logo} width={150} />
        </div>

        <div className="stat text-left">
          <div className="stat-title text-black">Hospital Cayetano Heredia</div>
          <div className="stat-title">24/febrero/24</div>
          <div className="stat-title">16:00 PM</div>
          <div className="stat-title">ID: 43224CH</div>
        </div>

        <div className="stat text-left ">
          <div className="stat-title text-black text-xl">Motivos:</div>
          <div className="stat-title">
            Afección en el oído izquierdo <br /> tras meterse a un lago con
            posibles <br /> bacterias infecciosas
          </div>
        </div>
      </div>
    </>
  );
};
