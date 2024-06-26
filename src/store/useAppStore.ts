import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { AuthSliceProps, createAuthSlice } from './authSlice'
import { CitasSliceProps, createCitasSlice } from './citasSlice'
import { createDoctorSlice, DoctorProps } from './doctoSlice'

export const useAppStore = create<AuthSliceProps & CitasSliceProps & DoctorProps >()(devtools((...a) => ({
  ...createAuthSlice(...a),
  ...createCitasSlice(...a),
  ...createDoctorSlice(...a)
})))
