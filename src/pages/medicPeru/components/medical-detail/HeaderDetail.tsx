import { useEffect, useMemo, useState } from "react";
import {
  getEnfermedadesPrimarios,
  getEnfermedadesSecundarios,
} from "../../../../api/medicPeru/medicPeruService";
import { Download } from "../../../../assets";
import {
  Enfermedades,
  HistorialClinica,
} from "../../../../data/historialClinica";

interface HeaderDetailProps {
  cita: HistorialClinica;
}

export const HeaderDetail = ({ cita }: HeaderDetailProps) => {
  const [listEnf, setListEnf] = useState<Enfermedades[]>([]);
  const [listEnfSec, setListEnfSec] = useState<Enfermedades[]>([]);

  const isListValid = useMemo(() => !listEnf, [listEnf]);
  const isListSecValid = useMemo(() => listEnfSec.length === 0, [listEnfSec]);

  const getListEnfermedades = async () => {
    const list = await getEnfermedadesPrimarios();
    setListEnf(list);
  };

  const getListEnfSecundarias = async ({ id }: { id: number }) => {
    const listSec = await getEnfermedadesSecundarios({ id });
    setListEnfSec(listSec);
  };

  useEffect(() => {
    getListEnfermedades();
    getListEnfSecundarias({ id: 20 });
  }, []);

  return (
    <section className="w-full ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">
          Cita Medica{" "}
          <span className="font-bold text-blue-800">#{cita.idHistoria}</span>
        </h1>
        <button className="btn bg-blue-500 text-lg text-white">
          Descargar ficha
          <img src={Download} alt="download-icon" className="w-6 h-6" />
        </button>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg">
          <span className="font-bold ">Centro Clinico:</span>{" "}
          {cita.nombreHospital}
        </h3>
        <div className="flex gap-4">
          <h3 className="text-lg">
            <span className="font-bold ">Fecha:</span> {cita.fecha}{" "}
          </h3>
          <h3 className="text-lg">
            <span className="font-bold ">Hora:</span> {cita.hora}
          </h3>
        </div>
        <h3 className="text-lg">
          <span className="font-bold ">Sala:</span> {cita.sala}
        </h3>
        <h3 className="text-lg">
          <span className="font-bold ">Motivo:</span> {cita.motivo}
        </h3>
        <h3 className="text-lg">
          <span className="font-bold pr-2">CIE - PRIMARIA:</span>
          {isListValid ? (
            <select disabled>
              <option value="">Cargando..</option>
            </select>
          ) : (
            <select
              name="enfermedad"
              id=""
              className="uppercase"
              onChange={(e) => getListEnfSecundarias({ id: +e.target.value })}
            >
              {listEnf.map((enf) => (
                <option
                  key={enf.idEnfPr}
                  value={enf.idEnfPr}
                  className="uppercase"
                >
                  {enf.nombre}
                </option>
              ))}
            </select>
          )}
        </h3>
        <h3 className="text-lg">
          <span className="font-bold pr-2">CIE - SECUNDARIA:</span>
          {isListSecValid ? (
            <select disabled className="uppercase">
              <option value="">Esperando</option>
            </select>
          ) : (
            <select name="enfermedad" id="" className="uppercase">
              {listEnfSec.map((enf) => (
                <option key={enf.idEnf} value={enf.idEnf} className="uppercase">
                  {enf.nombre}
                </option>
              ))}
            </select>
          )}
        </h3>
      </div>
    </section>
  );
};
