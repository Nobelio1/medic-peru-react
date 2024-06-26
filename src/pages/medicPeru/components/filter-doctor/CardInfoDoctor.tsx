import { Doctores } from "../../../../interfaces/doctores.interface";

interface CardInfoDoctorProps {
  doctor: Doctores;
}

export const CardInfoDoctor = ({ doctor }: CardInfoDoctorProps) => {
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          src={doctor.imagen_url}
          alt="doctor"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">
          {doctor.nombre_doctor}
        </h2>
      </div>
    </div>
  );
};
