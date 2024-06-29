import { Link } from "react-router-dom";
import { Paciente, User } from "../../../assets/index";
import { useAppStore } from "../../../store/useAppStore";

export const Register = () => {

  const setRol = useAppStore(state => state.setRol)


  const onRegister = (rol: string) => {
    setRol(rol)
  }

  return (
    <div className="flex flex-col w-full h-full items-center justify-center animate__animated animate__fast animate__fadeInRight">
      <form>
        <div className="flex flex-col w-80 mt-14">
          <span className="montserrat-bold text-3xl text-center">
            Eliga su categoría
          </span>

          <div className="flex flex-col my-8 gap-4">
            <Link to={"/auth/register-paciente"}>
              <button className="btn rounded-full border-solid border-2 border-black w-full" onClick={() => onRegister('0')}>
                <img src={Paciente} alt="paciente" className="w-6" />
                <span>Paciente</span>
              </button>
            </Link>

            <Link to={"/auth/register-doctor"} className="">
              <button className="btn rounded-full border-solid border-2 border-black w-full" onClick={() => onRegister('1')}>
                <img src={User} alt="doctor" className="w-6" />
                <span>Doctor</span>
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
