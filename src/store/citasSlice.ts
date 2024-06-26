import { StateCreator } from 'zustand';
import { CitasIn } from '../interfaces/citas.interface';
import { generarCita } from '../api/medicPeru/CitasServices';

export interface CitaActiva {
  id_servico: number;
  id_especialidad: number;
}

export interface CitasSliceProps {
  cita: CitasIn,
  citaActiva: CitaActiva,
  setCita: (cita: CitasIn) => void
  setCitaActiva: (citaActiva: CitaActiva) => void
  generarCita: (cita: CitasIn) => Promise<string>
}

export const createCitasSlice: StateCreator<CitasSliceProps>  =  (set) => ({
  cita: {} as CitasIn,
  citaActiva: {} as CitaActiva,
  setCita: (cita: CitasIn) => set({ cita }),
  setCitaActiva: (citaActiva: CitaActiva) => set({ citaActiva }),
  generarCita: async (cita: CitasIn) => {
    const res = await generarCita({ cita })
    return res;
  }
})
