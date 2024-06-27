import { StateCreator } from 'zustand';
import { CitasIn, CitasSalida } from '../interfaces/citas.interface';
import { generarCita } from '../api/medicPeru/CitasServices';
import { detalleServicio } from '../api/medicPeru/MedicPeruEspecialidades';
import { DetalleServicioEsp } from '../interfaces/especialidades.interface';

export interface CitaActiva {
  id_servico: number;
  id_especialidad: number;
}

export interface CitasSliceProps {
  cita: CitasIn,
  orderId: string,
  citaActiva: CitaActiva,
  precio: number,
  setCita: (cita: CitasIn) => void
  setOrder: (id: string) => void
  setPrecio: (precio: number) => void
  setCitaActiva: (citaActiva: CitaActiva) => void
  generarCita: (cita: CitasIn) => Promise<CitasSalida>
  getDetalleServicio: (id: number) => Promise<DetalleServicioEsp[]>
}

export const createCitasSlice: StateCreator<CitasSliceProps>  =  (set) => ({
  cita: {} as CitasIn,
  orderId: '',
  citaActiva: {} as CitaActiva,
  precio: 0,
  setCita: (cita: CitasIn) => set({ cita }),
  setOrder: (id: string) => set({ orderId: id}),
  setPrecio: (precio: number) => set({ precio: precio}),
  setCitaActiva: (citaActiva: CitaActiva) => set({ citaActiva }),
  generarCita: async (cita: CitasIn) => {
    const res = await generarCita({ cita })
    return res;
  },
  getDetalleServicio: async (id: number) => {
    const res = await detalleServicio(id)
    return res;
  }
})
