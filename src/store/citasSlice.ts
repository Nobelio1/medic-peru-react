import { StateCreator } from 'zustand';
import { CitasIn } from '../interfaces/citas.interface';
import { generarCita } from '../api/medicPeru/CitasServices';

export interface CitasSliceProps {
  cita: CitasIn,
  setCita: (cita: CitasIn) => void
  generarCita: (cita: CitasIn) => Promise<string>
}

export const createCitasSlice: StateCreator<CitasSliceProps>  =  (set) => ({
  cita: {} as CitasIn,
  setCita: (cita: CitasIn) => set({ cita }),
  generarCita: async (cita: CitasIn) => {
    const res = await generarCita({ cita })
    return res;
  }
})
