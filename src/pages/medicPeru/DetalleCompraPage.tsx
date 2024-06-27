import { useEffect, useState } from "react";
import { CardService } from "./components/detalle-compra/CardService";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import { EspecialidadesId } from "../../interfaces/especialidades.interface";
import { especialidadPorId } from "../../api/medicPeru/MedicPeruEspecialidades";
import { listarDoctoresPorEsp } from "../../api/medicPeru/doctoresServices";
import { Doctores } from "../../interfaces/doctores.interface";
import { Precio, precio } from '../../data/precio';
import { CitasIn } from "../../interfaces/citas.interface";

export interface DetalleServicio {
  desc: string;
  price: string;
}

const sedes = [
  {
    id: 1,
    name: "Clínica Monte Sinai",
  },
  {
    id: 2,
    name: "Clínica Santa Lucía",
  },
  {
    id: 3,
    name: "Clínica San Borja Salud",
  },
];

export const DetalleCompraPage = () => {
  const [servicioAct, setServicioAct] = useState<EspecialidadesId>(
    {} as EspecialidadesId
  );
  const [doctores, setDoctores] = useState<Doctores[]>([]);
  const [listaPrecios, setListaPrecios] = useState<Precio[]>([]);
  const [precioSld, setPrecioSld] = useState(0);
  const [sede, setSede] = useState<boolean>(true);
  const [citas, setCitas] = useState<CitasIn>({
    location: '',
    startTime: '',
    endTime: '',
    description: '',
    summary: '',
    attendeeEmails: [],
    accessToken: ''
  });

  const generarCita = useAppStore((state) => state.generarCita);
  const setOrder = useAppStore((state) => state.setOrder);
  const setPrecio = useAppStore((state) => state.setPrecio);


  const navigate = useNavigate();
  const citaActiva = useAppStore((state) => state.citaActiva);
  const { id_servico, id_especialidad } = citaActiva;

  const getServicio = async () => {
    const servicios: EspecialidadesId[] = await especialidadPorId(id_especialidad);
    const servicioAct = servicios.find((ser) => ser.id_servicios === Number(id_servico));

    if(servicioAct?.imagen_url  && servicioAct?.nombre){
      setServicioAct(servicioAct!);

    }
  };

  const doctoresDisponibles = async () => {
    const doctoresDis: Doctores[] = await listarDoctoresPorEsp(id_especialidad);
    if (doctoresDis.length === 0) {
      setDoctores([]);
    } else {
      setDoctores(doctoresDis);
    }
  };

  const precioDisponibles = () => {
    const precios = precio.filter((p) => p.id_servicio === id_servico);


    if(!!!precios[0].id_sede){
      setSede(false);
    }
    setListaPrecios(precios);
  };

  const precioActual = (e: any) => {
    const sede = sedes.find((s) => s.id === +e.target.value);
    setCitas({
      ...citas,
      location: sede?.name!,
    })  
    const precioAct = listaPrecios.find((p) => p.id_sede === +e.target.value);
      setPrecioSld(precioAct?.precio!);
    
  };

  const precioSede = () => {
    console.log(listaPrecios[0].precio)
    if(!sede){
      setPrecioSld(listaPrecios[0].precio);
    }
  }

  const goToPayment = () => {
    navigate("/medic-peru/specialties/servicie/payment");
  };

  const selectFecha = (e:any) => {
    const startTime = new Date(e.target.value);
    const endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + 1);

    // Formatear las fechas al estilo YYYY-MM-DDTHH:MM
    const formatDateTime = (date:any) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}:00`;
    };

    setCitas({
      ...citas,
      startTime: formatDateTime(startTime),
      endTime: formatDateTime(endTime),
    });
  }
  
  const selectDoctor = (e:any) => {
   setCitas({
     ...citas,
     description: 'Consulta general con el Dr. ' + e.target.value
    })
  }

  const citaGen = async () => {
    try {
      const refreshToken = localStorage.getItem('token');

      const nuevaCita = {
          ...citas,
          accessToken: refreshToken!,
          summary: servicioAct.nombre,
          attendeeEmails: ['paciente@example.com']
      };

      setCitas(nuevaCita);
      const res = await generarCita(nuevaCita);
      setOrder(res.id);
      setPrecio(precioSld);
      goToPayment();
  } catch (error) {
      console.error('Error al generar la cita:', error);
  }
  }

  useEffect(() => {
    getServicio();
    doctoresDisponibles();
    precioDisponibles();
  }, []);

  return (
    <>
      <div className="w-full px-4 mb-4">
        <div className="bg-white rounded-md py-2 px-4">
          <h1 className="text-center pt-2 text-xl font-bold uppercase">
            Detalle de la Cita
          </h1>
          <CardService user={servicioAct} />

          <div className="my-2">
            <label htmlFor="fecha">Elige la fecha:</label>
            <input
              type="datetime-local"
              id="fecha"
              className="border mt-1 border-gray-300 rounded-md block w-full py-0.5 px-2"
              onChange={selectFecha}
            />
          </div>

          {doctores.length !== 0 && (
            <div className="my-2">
              <label htmlFor="doctor">Elige el doctor:</label>
              <select
                name="doctor"
                id="doctor"
                className="mt-1 select select-bordered select-sm w-full"
                onClick={selectDoctor}
              >
                {doctores.map((doctor) => (
                  <option
                    key={doctor.nombre_doctor}
                    value={doctor.nombre_doctor}
                  >
                    {doctor.nombre_doctor}
                  </option>
                ))}
              </select>
            </div>
          )}
 
          {
            sede && (
              <div className="my-2">
                <label htmlFor="centro-medico">Elige el centro medico:</label>
                <select
                  name="centro-medico"
                  id="centro-medico"
                  className="mt-1 select select-bordered select-sm w-full"
                  onChange={(e) => precioActual(e)}
                >
                  {sedes.map((sede) => (
                    <option key={sede.id} value={sede.id}>
                      {sede.name}
                    </option>
                  ))}
                </select>
              </div>
            )
          }

          {/* <div className="my-2">
            <p className="pb-2">Selecionne su horario:</p>
            <div className="flex justify-around">
              <button className="btn bg-blue-500 hover:bg-blue-800 text-white">
                11:00 am
              </button>
              <button className="btn bg-blue-500 hover:bg-blue-800 text-white">
                2:00 pm
              </button>
              <button className="btn bg-blue-500 hover:bg-blue-800 text-white">
                4:00 pm
              </button>
            </div>
          </div> */}

          <div className="mt-52 flex items-center w-full bg-sky-200 justify-between py-2 px-4 rounded-md">
            <p className="font-bold">Total:</p>
            <p className="font-bold text-xl">S/ {sede ? precioSld: listaPrecios[0].precio}</p>
          </div>
          <div className="mt-2">
            <button
              className="btn w-full bg-blue-500 hover:bg-blue-800 text-white"
              onClick={citaGen}
            >
              Ir a pagar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
