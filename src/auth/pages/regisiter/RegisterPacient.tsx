import { Logo, User, Mail, DNI, PadLock, Verify } from '../../../../assets/index';
import { Link } from 'react-router-dom';

export const RegisterPacient = () => {

    // const setDoctorScreen = useSetRecoilState(registerDoctorScreenAtom)

    return (
        <div className="flex flex-col h-screen md:flex-row mx-auto">
            <div className="w-full lg:w-3/4 md:w-1/2 h-full sm:block hidden">
                <div
                    className="flex flex-row md:flex-col lg:flex-row w-full h-full justify-center items-center font-bold text-center montserrat-bold"
                >
                    <img src={Logo} alt="logo-coco" className="w-48" />
                    <h1 className="text-5xl">MedicPeru</h1>
                </div>
            </div>
            <div className="w-full lg:w-1/4 md:w-1/2 shadow-md h-full bg-gray-100 p-3">
                <div className="flex flex-col w-full items-center">
                    <form>
                        <div className="flex flex-col w-80 mt-14">
                            <span className="montserrat-bold text-3xl">Hola!</span>
                            <span className="montserrat-medium">Registrate para comenzar</span>
                            <div className="flex flex-col my-8">
                                <label
                                    className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full"
                                >
                                    <img
                                        src={User}
                                        alt="Logo"
                                        className="w-6 mr-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Nombre Completo"
                                        className="flex-1 focus:outline-none"
                                    />
                                </label>
                                <label
                                    className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full"
                                >
                                    <img
                                        src={Mail}
                                        alt="Logo"
                                        className="w-5 mr-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Correo Electroncio"
                                        className="flex-1 focus:outline-none"
                                    />
                                </label>
                                <label
                                    className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full"
                                >
                                    <img
                                        src={DNI}
                                        alt="Logo"
                                        className="w-5 mr-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Dni"
                                        className="flex-1 focus:outline-none"
                                    />
                                </label>
                                <label
                                    className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full"
                                >
                                    <img
                                        src={PadLock}
                                        alt="Logo"
                                        className="w-5 mr-2"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        className="flex-1 focus:outline-none"
                                    />
                                </label>
                                <label
                                    className="flex items-center bg-white my-2 p-5 rounded-full border-solid border-2 border-gray-300 w-full"
                                >
                                    <img
                                        src={Verify}
                                        alt="Logo"
                                        className="w-5 mr-2"
                                    />
                                    <input
                                        type="password"
                                        placeholder=" Verificar Contraseña"
                                        className="flex-1 focus:outline-none"
                                    />
                                </label>
                            </div>
                            <Link to={'/dashboard'}>
                                <button
                                    className="btn my-2 p-3 rounded-full bg-blue-500 hover:bg-blue-700 w-full h-16"
                                >
                                    <span className="montserrat-bold text-xl text-white">Registarse</span>
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
