import { Link } from 'react-router-dom'
import { Logo, Paciente, User } from './../../assets/img/index'

export const Register = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row montserrat-regular container mx-auto">
      <div className="w-full lg:w-3/4 md:w-1/2 h-full sm:block hidden">
        <div className="flex flex-row md:flex-col lg:flex-row w-full h-full justify-center items-center font-bold text-centermontserrat-bold">
          <img src={Logo} alt="logo-coco" className="w-48" />
          <h1 className="text-5xl">MedicPeru</h1>
        </div>
      </div>

      <div className="w-full lg:w-1/4 md:w-1/2 shadow-md h-full bg-gray-100 p-3">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <form>
            <div className="flex flex-col w-80 mt-14">
              <span className="montserrat-bold text-3xl">Bienvenido!</span>

              <div className="flex flex-col my-8 gap-4">
                <Link to={'/register-paciente'}>
                  <button className="btn rounded-full border-solid border-2 border-black w-full">
                    <img
                      src={Paciente}
                      alt="paciente"
                      className="w-6"
                    />
                    <span>Paciente</span>
                  </button>
                </Link>

                <Link to={'/register-doctor'} className=''>
                  <button
                    className="btn rounded-full border-solid border-2 border-black w-full">
                    <img
                      src={User}
                      alt="doctor"
                      className="w-6"
                    />
                    <span>Doctor</span>
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}