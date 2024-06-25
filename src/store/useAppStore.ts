import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { AuthSliceProps, createAuthSlice } from './authSlice'
import { CitasSliceProps, createCitasSlice } from './citasSlice'

export const useAppStore = create<AuthSliceProps & CitasSliceProps >()(devtools((...a) => ({
  ...createAuthSlice(...a),
  ...createCitasSlice(...a)
})))
