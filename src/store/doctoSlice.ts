import { listarDoctores } from "../api/medicPeru/doctoresServices";
import { Doctores } from "../interfaces/doctores.interface";
import { StateCreator } from 'zustand';

export interface DoctorProps {
  doctores: Doctores[];
  loading: boolean;
  setDoctores: () => Promise<void>
  isloding: () => void
}


export const createDoctorSlice: StateCreator<DoctorProps> = (set,get) => ({
  doctores: [],
  loading: false,
  setDoctores: async () => {
    get().isloding();
    const res = await listarDoctores();
    get().isloding();
    set({ 
      doctores: res 
    });
  },
  isloding: () => set({ loading: !get().loading })
})
