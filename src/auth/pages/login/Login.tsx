import { Logo, Facebook, Google, Apple, Mail, PadLock } from '../../../../assets/index'
import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import authScreenAtom from '../../../shared/atoms/authAtom'
import { ChangeEvent, useState } from 'react'

//!---------------------------------------------------------------------------------!//

export const Login = () => {

  const setAuthScreen = useSetRecoilState(authScreenAtom);
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const { username, password } = inputs;
  // const showToast = useShowToast();

  //*---------------------------------------------------------------------------------*//

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  //*---------------------------------------------------------------------------------*//

  const handleLogin = async () => {

    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      });
      
      const data = await res.json();

      // if (data.error) {
      //     showToast('Error', data.error, 'error');
      //     return;
      // }

      localStorage.setItem('medic-peru', JSON.stringify(data));
      // setUser(data);
    } catch (error) {
      console.log('No se pudo iniciar sesion')
      // showToast('Error', (error as string), 'error')
    }
  }

  //!---------------------------------------------------------------------------------!//

  return (
    <div className=' mx-auto montserrat-regular'>
      <div className="flex flex-col h-screen md:flex-row">
        <div className="w-full lg:w-3/4 md:w-1/2 h-full sm:block hidden">
          <div
            className="flex flex-row md:flex-col lg:flex-row w-full h-full justify-center items-center font-bold text-center"
          >
            <img src={Logo} alt="logo-coco" className="w-48" />
            <h1 className="text-5xl">MedicPeru</h1>
          </div>
        </div>

        <div className="w-full lg:w-1/4 md:w-1/2 shadow-md h-full bg-gray-100 p-3">
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-col gap-2 w-80 mt-20">
              <button className="btn bg-blue-600 text-white">
                <img
                  src={Facebook}
                  alt="logo-fb"
                  className="w-6"
                />
                <span>Continuar con Facebook</span>
              </button>
              <button className="btn bg-white">
                <img
                  src={Google}
                  alt="logo-fb"
                  className="w-6"
                />
                <span>Continuar con Google</span>
              </button>
              <button className="btn bg-black text-white">
                <img
                  src={Apple}
                  alt="logo-fb"
                  className="w-6"
                />
                <span>Continuar con Apple</span>
              </button>
            </div>

            <form>
              <div className="flex flex-col w-80 mt-14">
                <span className="font-bold text-3xl">¡Bienvenido!</span>
                <div className="flex flex-col my-8">
                  <label
                    className="flex items-center bg-white my-2 p-5 rounded-full border-2 border-black w-full"
                  >
                    <img
                      src={Mail}
                      alt="Logo"
                      className="w-5 mr-2"
                    />
                    <input
                      type="text"
                      placeholder="Correo Electrónico"
                      className="flex-1 focus:outline-none"
                      value={username}
                      name="username"
                      onChange={handleChange}
                    />
                  </label>
                  <label
                    className="flex items-center bg-white my-2 p-5 rounded-full border-2 border-black w-full"
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
                      value={password}
                      name="password"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <button
                  className="btn my-2 p-3 rounded-full bg-blue-500 hover:bg-blue-700 w-full h-16"
                  onClick={handleLogin}
                >
                  <span className="font-bold text-xl text-white">Ingresar</span>
                </button>
              </div>
            </form>
            <div className="flex flex-col items-center mt-14">
              <a href="#" className="text-xl">¿Olvidaste tu contraseña?</a>
              <span className="mt-10">¿No tienes una cuenta?</span>
              <Link className="font-bold hover:text-blue-500" onClick={() => setAuthScreen('signup')} to={''}>Regístrate</Link>
            </div>
          </div>
        </div>
      </div >
    </div>

  )
}
