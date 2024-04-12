import { Link } from 'react-router-dom'
import { Logo } from '../../../../assets/index'

const Header = () => {
    return (
        <>
            <header
                className="text-black p-5 flex justify-between items-center montserrat-medium container mx-auto"
            >
                <div className="flex items-center">
                    <img
                        src={Logo}
                        alt="logo-imagen"
                        className="xl:h-20 xl:w-auto md:h-20 h-14"
                    />
                    <span className="ml-2 font-semibold xl:text-2xl md:text-xl text-base"
                    >IAMedicPeru
                    </span>
                </div>

                <Link to={'/auth'}>
                    <button
                        className="btn xl:btn-lg md:btn-lg btn-md bg-red-400 hover:bg-red-500 flex text-white">
                        <span className="mr-3">Ingresar</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </button>
                </Link>
            </header >

            <section className="background-landing md:p-10 p-6 xl:px-24">
                <div className="flex justify-between items-center xl:mt-14 md:mt-0 mt-4">
                    <div className="xl:ml-40 w-1/2">
                        <div
                            className="xl:text-7xl md:text-4xl text-xl montserrat-bold leading-tight"
                        >
                            <h1>Un gran lugar para recibir atencion</h1>
                        </div>

                        <div
                            className="xl:my-10 md:my-8 my-4 text-gray-700 montserrat-regular xl:text-2xl md:text-xl text-sm"
                        >
                            <h2>
                                MedicPeru te acerca a los mejores doctores a traves de nuestro
                                servicio de ChatIA
                            </h2>
                        </div>

                        <div className="md:flex items-center montserrat-regular">
                            <button
                                className="btn xl:w-60 md:w-40 w-36 xl:h-20 xl:text-xl md:text-base text-sm bg-red-400 w-200 hover:bg-red-500 text-white xl:mr-6 md:mr-4"
                            >
                                Ingresar Ahora
                            </button>

                            <button
                                className="btn mt-2 md:mt-0 xl:w-60 xl:h-20 md:w-36 w-28 xl:text-xl md:text-base text-sm bg-white hover:bg-slate-100 border-red-400 hover:border-red-400 border-2 text-red-400"
                            >
                                Saber Mas
                            </button>
                        </div>
                    </div>

                    <div className="xl:w-auto w-1/2 xl:mr-36">
                        <img src={Logo} alt="logo-imagen" />
                    </div>
                </div>
            </section >

            <section className="xl:my-16 my-10 xl:mb-28 md:mb-16 mb-16 container mx-auto">
                <div className="flex text-center justify-evenly montserrat-bold">
                    <div>
                        <h2 className="xl:text-7xl md:text-6xl text-3xl text-red-400">15K</h2>
                        <p className="md:mt-4 xl:text-3xl md:text-2xl">Clientes Felices</p>
                    </div>

                    <div>
                        <h2 className="xl:text-7xl md:text-6xl text-3xl text-red-400">15K</h2>
                        <p className="md:mt-4 xl:text-3xl md:text-2xl">Clientes Felices</p>
                    </div>

                    <div>
                        <h2 className="xl:text-7xl md:text-6xl text-3xl text-red-400">15K</h2>
                        <p className="md:mt-4 xl:text-3xl md:text-2xl">Clientes Felices</p>
                    </div>

                    <div>
                        <h2 className="xl:text-7xl md:text-6xl text-3xl text-red-400">15K</h2>
                        <p className="md:mt-4 xl:text-3xl md:text-2xl">Clientes Felices</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header