import { StateCreator } from "zustand";
import { LoginIn } from "../interfaces/auth.inteface";
import { loginUser } from "../api/auth/authService";

export interface AuthSliceProps {
  usuario: string
  logged: boolean
  setUser: (usuario: string) => void
  logout: () => void
  onLogin: (user: LoginIn) => Promise<string>
}

export const createAuthSlice: StateCreator<AuthSliceProps> = (set,get) => ({
  usuario: '',
  logged: false,
  onLogin: async (user: LoginIn) => {
    const res = await loginUser({ user })
    
    get().setUser(user.username)
    return res
  },
  setUser: (usuario: string) => set({ usuario, logged: true }),
  logout: () => set({ usuario: '', logged: false }),
})
