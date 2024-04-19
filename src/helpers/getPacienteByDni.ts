import { dataPacientes } from "../data/pacientes";

export const getPacienteByDni = ({ dni }: { dni: string }) => {
  dni = dni.trim();

  if (dni.length === 0) return dataPacientes;

  return dataPacientes.filter((paciente) => paciente.dni.includes(dni));
};
