import { useEffect, useState } from "react";
import { CardService } from "./components/detalle-compra/CardService";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import { EspecialidadesId } from "../../interfaces/especialidades.interface";
import { especialidadPorId } from "../../api/medicPeru/MedicPeruEspecialidades";
import { listarDoctoresPorServicio } from "../../api/medicPeru/doctoresServices";
import { Doctores } from "../../interfaces/doctores.interface";
import { Precio, precio } from '../../data/precio';
import { CitasIn } from "../../interfaces/citas.interface";
import { getDisponibilidad } from "../../api/medicPeru/disponibildadService";

export interface DetalleServicio {
  desc: string;
  price: string;
}

interface ServicioItemsProps {
  nombre: string
  precio: number
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
  const [horasDisponibles, setHorasDisponibles] = useState<string[]>([]);
  const [sede, setSede] = useState<boolean>(true);
  const [citas, setCitas] = useState<CitasIn>({
    descripcion: "",
    duracion: 0,
    emailDoctor: "",
    emailPaciente: "",
    fechaHora: "",
    idTransaccion: 0,
    id_servicio: 0,
  });


  const [precioPagar, setPrecioPagar] = useState(0)
  const [ivg, setIvg] = useState(0)
  const [precioBase, setPrecioBase] = useState(0);


  const [soloCita, setSoloCita] = useState(false)
  const [serviciosAdicionales, setServiciosAdicionales] = useState(false)
  

  const setPrecio = useAppStore((state) => state.setPrecio);
  const usuario = useAppStore((state) => state.usuario);
  const setCita = useAppStore((state) => state.setCita);

  const navigate = useNavigate();
  const citaActiva = useAppStore((state) => state.citaActiva);
  const { id_servico, id_especialidad } = citaActiva;

  const getServicio = async () => {
    const servicios: EspecialidadesId[] = await especialidadPorId(
      id_especialidad
    );
    const servicioAct = servicios.find(
      (ser) => ser.id_servicios === Number(id_servico)
    );

    if (servicioAct?.imagen_url && servicioAct?.nombre) {
      setServicioAct(servicioAct!);
    }
  };

  const doctoresDisponibles = async () => {
    const doctoresDis: Doctores[] = await listarDoctoresPorServicio(id_especialidad);
    if (doctoresDis.length === 0) {
      setDoctores([]);
    } else {
      setDoctores(doctoresDis);
    }
  };

  const precioDisponibles = () => {
    const precios = precio.filter((p) => p.id_servicio === id_servico);
    if (precios.length === 1) {
      setPrecioBase(precios[0].precio) //precio original
      setIvg(precios[0].precio*0.18) //ivg
      const igv2 = ivg
      setPrecioPagar(precios[0].precio + igv2) //precio a pagar
    }

    if (!!!precios[0].id_sede) {
      setSede(false);
    }
    setListaPrecios(precios);
  };

  const precioActual = (e: any) => {
    const precioAct = listaPrecios.find((p) => p.id_sede === +e.target.value);
    setPrecioBase(precioAct?.precio!)
    setIvg(precioAct?.precio!*0.18);
    setPrecioPagar(precioAct?.precio! + precioAct?.precio!*0.18)
  };

  const goToPayment = () => {
    navigate("/medic-peru/specialties/servicie/payment");
  };

  const selectFecha = async (e: any) => {
    const fecha = new Date(e.target.value).toISOString().split("T")[0];
    const horasDisponibles = await getDisponibilidad(
      "nobelio2304gino@gmail.com",
      fecha
    );
    setHorasDisponibles(horasDisponibles);

    const startTime = new Date(e.target.value);
    const endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + 1);
  };

  const selectDoctor = (e: any) => {
    setCitas({
      ...citas,
      descripcion: "Consulta general con el Dr. " + e.target.value,
    });
  };

  const setHoraDisponible = (fecha: string) => {
    setCitas({
      ...citas,
      fechaHora: fecha,
    });
  };

  const citaGen = async () => {
    const nuevaCita: CitasIn = {
      ...citas,
      duracion: 90,
      emailDoctor: "nobelio2304gino@gmail.com",
      emailPaciente: usuario.email,
      id_servicio: id_servico
    };

    setCita(nuevaCita);
    setPrecio(precioPagar);
    goToPayment();
  };

  const soloConsultaMedica = () => {
    const nuevoValor = !soloCita;
    const ivgAuxBase = precioBase*0.18;
    const preccioAuxBase = precioBase + ivgAuxBase;
    setSoloCita(nuevoValor);

    if(nuevoValor){
      setIvg(50*0.18)
      setPrecioPagar(50 + 50*0.18)
    }else{
      setIvg(ivgAuxBase)
      setPrecioPagar(preccioAuxBase)
    }
  }

  const todosServiciosAdicionales = () => {
    const nuevoValor = !serviciosAdicionales;
    const ivgAuxBase = precioBase*0.18;
    const preccioAuxBase = precioBase + ivgAuxBase;
    setServiciosAdicionales(nuevoValor);

    if(nuevoValor){
      setIvg((precioBase + 2350)*0.18)
      setPrecioPagar((precioBase + 2350)*0.18 + precioBase + 2350)
    }else{
      setIvg(ivgAuxBase)
      setPrecioPagar(preccioAuxBase)
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

          {sede && (
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
          )}

          {horasDisponibles.length !== 0 ? (
            <div className="my-2">
              <p className="pb-2">Selecionne su horario:</p>
              <div className="flex gap-3">
                {horasDisponibles.map((hora, index) => (
                  <button
                    key={index}
                    className="btn bg-blue-500 hover:bg-blue-800 text-white"
                    onClick={() => setHoraDisponible(hora)}
                  >
                    {hora.split("T")[1].slice(0, 5)}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="my-2">
              <p className="pb-2 text-center font-medium mt-6">
                No hay horarios disponibles
              </p>
            </div>
          )}


          <div className="mt-52 flex flex-col w-full bg-sky-200 py-2 px-4 rounded-md">
            <div className="mb-2">
              <input type="checkbox" id="solo_consulta" className="mr-2" disabled={serviciosAdicionales} onChange={soloConsultaMedica} />
              <label htmlFor="solo_consulta" className="font-medium" >¿Solo comprar la consulta médica?</label>
            </div>
            <ServicioItems nombre="Exámenes pre-quirúrgicos" precio={50} />
          </div>

          <div className="mt-4 flex flex-col w-full bg-sky-200 py-2 px-4 rounded-md">
            <div className="mb-2">
              <input type="checkbox" id="servicio_adicionales" className="mr-2" disabled={soloCita} onChange={todosServiciosAdicionales} />
              <label htmlFor="servicio_adicionales" className="font-medium" >¿Incluir servicios adicionales?</label>
            </div>
            <ServicioItems nombre="Exámenes pre-quirúrgicos" precio={200} />
            <ServicioItems nombre="Riesgo cardiológico" precio={100} />
            <ServicioItems nombre="Radiografía de tórax" precio={50} />
            <ServicioItems nombre="Riesgo neumológico" precio={2000} />
          </div>

          <div className=" mt-4 flex flex-col w-full bg-sky-200 py-2 px-4 rounded-md">
            <div className="flex justify-between mb-2">
              <p className="font-normal"> Igv:</p>
              <p className="font-normal text-mf">
                S/ {ivg}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Total:</p>
              <p className="font-bold text-xl">
                S/ {precioPagar}
              </p>
            </div>
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

const ServicioItems = ({nombre, precio} : ServicioItemsProps) => {
  return (
    <div className="flex justify-between mb-2 ">
      <p className="font-normal text-sm"> {nombre}:</p>
      <p className="font-normal text-sm">S/ {precio}</p>
    </div>
  );
};
