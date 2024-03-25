import { Logo } from '../../assets/img/index'

const Main = () => {
  return (
    <main>
      <section className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="md:w-1/2 md:ml-0 ml-7">
            <div className="md:ml-16">
              <div
                className="bg-green-300 xl:w-52 md:w-32 w-16 md:h-3 h-2 xl:mb-10 md:mb-7 mb-5"
              ></div>

              <div
                className="xl:text-5xl md:text-3xl text-xl montserrat-bold xl:w-auto"
              >
                <h1>Un gran lugar para recibir atencion</h1>
              </div>

              <div
                className="xl:my-10 my-5 text-gray-700 montserrat-regular xl:text-xl md:text-base text-sm md:w-auto"
              >
                <h2 className="xl:whitespace-normal md:whitespace-normal">
                  MedicPeru te acerca a los mejores doctores a traves
                  <br />
                  de nuestro servicio de ChatIA
                </h2>
              </div>

              <div className="flex items-center montserrat-bold text-red-400">
                <p className="bg-white hover:bg-slate-100 md:text-xl mr-4">Saber Mas</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="md:mr-5 xl:w-1/3">
            <img src={Logo} alt="logo-imagen" />
          </div>
        </div>
      </section>

      <section className="md:mt-10 mt-16 md:mb-14 container md:mx-auto">
        <div className="flex justify-between items-center">
          <div className="md:ml-5 xl:w-1/3">
            <img src={Logo} alt="logo-imagen" />
          </div>

          <div className="md:w-1/2 md:mr-0 mr-7">
            <div className="md:mr-16">
              <div
                className="bg-green-300 xl:w-52 md:w-32 w-16 md:h-3 h-2 xl:mb-10 md:mb-7 mb-5 ml-auto"
              ></div>

              <div
                className="xl:text-5xl md:text-3xl text-xl montserrat-bold xl:w-auto flex flex-col text-end"
              >
                <h1>Un gran lugar para recibir atencion</h1>
              </div>

              <div
                className="xl:my-10 my-5 text-gray-700 montserrat-regular xl:text-lg md:text-base text-sm flex flex-col text-end"
              >
                <h2 className="xl:whitespace-normal md:whitespace-normal">
                  MedicPeru te acerca a los mejores doctores a traves <br />
                  de nuestro servicio de ChatIA
                </h2>
              </div>

              <div
                className="flex justify-end items-center montserrat-bold text-red-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
                <p className="bg-white hover:bg-slate-100 ml-4 md:text-xl">Saber Mas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-200 xl:py-32 md:py-14 xl:pt-28 md:pt-20 mt-16">
        <div className="xl:mx-40 md:ml-10 mx-7 py-16 md:py-0 pb-0">
          <h2 className="md:text-5xl text-4xl montserrat-bold">Nuestros Servicios</h2>
          <div className="mt-7 montserrat-regular md:text-xl">
            <p>Lorem Ipsumis simply dummy text of the printing and</p>
            <p className="mt-1">
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-10">

          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div>
                <img
                  src={Logo}
                  alt="logo-imagen"
                  className="h-auto mx-auto"
                />
              </div>

              <div className="mx-2">
                <div className="text-red-400 text-center montserrat-bold">
                  <h2>Lorem Ipsum</h2>
                </div>

                <div>
                  <h3 className="montserrat-bold text-lg mt-6">Lorem Ipsum</h3>
                  <p className="text-gray-500 mt-5 montserrat-medium text-base">
                    Lorem Ipsumis simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </p>

                  <div className="flex text-gray-700 mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    <p className="montserrat-bold ml-3">15 sales</p>
                  </div>

                  <div className="flex mt-6">
                    <p className="text-gray-700 montserrat-bold">$16.48</p>
                    <p className="text-green-600 montserrat-bold ml-3">$6.48</p>
                  </div>

                  <div className="mt-6 mb-8">
                    <button
                      className="btn w-48 bg-white hover:bg-slate-100 border-red-400 hover:border-red-400 border-2 text-red-400"
                    >
                      Saber Mas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div>
                <img
                  src={Logo}
                  alt="logo-imagen"
                  className="h-auto mx-auto"
                />
              </div>

              <div className="mx-2">
                <div className="text-red-400 text-center montserrat-bold">
                  <h2>Lorem Ipsum</h2>
                </div>

                <div>
                  <h3 className="montserrat-bold text-lg mt-6">Lorem Ipsum</h3>
                  <p className="text-gray-500 mt-5 montserrat-medium text-base">
                    Lorem Ipsumis simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </p>

                  <div className="flex text-gray-700 mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    <p className="montserrat-bold ml-3">15 sales</p>
                  </div>

                  <div className="flex mt-6">
                    <p className="text-gray-700 montserrat-bold">$16.48</p>
                    <p className="text-green-600 montserrat-bold ml-3">$6.48</p>
                  </div>

                  <div className="mt-6 mb-8">
                    <button
                      className="btn w-48 bg-white hover:bg-slate-100 border-red-400 hover:border-red-400 border-2 text-red-400"
                    >
                      Saber Mas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 max-w-sm md:mb-0 mb-8">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div>
                <img
                  src={Logo}
                  alt="logo-imagen"
                  className="h-auto mx-auto"
                />
              </div>

              <div className="mx-2">
                <div className="text-red-400 text-center montserrat-bold">
                  <h2>Lorem Ipsum</h2>
                </div>

                <div>
                  <h3 className="montserrat-bold text-lg mt-6">Lorem Ipsum</h3>
                  <p className="text-gray-500 mt-5 montserrat-medium text-base">
                    Lorem Ipsumis simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </p>

                  <div className="flex text-gray-700 mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    <p className="montserrat-bold ml-3">15 sales</p>
                  </div>

                  <div className="flex mt-6">
                    <p className="text-gray-700 montserrat-bold">$16.48</p>
                    <p className="text-green-600 montserrat-bold ml-3">$6.48</p>
                  </div>

                  <div className="mt-6 mb-8">
                    <button
                      className="btn w-48 bg-white hover:bg-slate-100 border-red-400 hover:border-red-400 border-2 text-red-400"
                    >
                      Saber Mas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main