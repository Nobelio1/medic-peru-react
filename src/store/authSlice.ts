import { StateCreator } from "zustand";
import { LoginRes, LoginIn } from "../interfaces/auth.inteface";
import { loginUser } from "../api/auth/authService";
import { logoutFirebase } from "../firebase/providerGoogle";

export interface User {
  displayName: string,
  email: string,
  uid?: string,
  rol?: string
}

export interface AuthSliceProps {
  usuario: User
  checking: boolean
  logged: boolean
  setUser: (usuario: User) => void
  logout: () => Promise<boolean>
  onLogin: (user: LoginIn) => Promise<LoginRes>  
}

export const createAuthSlice: StateCreator<AuthSliceProps> = (set,get) => ({
  usuario: {} as User,
  checking: false,
  logged: false,
  onLogin: async (user: LoginIn) => {
    const res: LoginRes[] = await loginUser({ user })
    return res[0]
  },
  setUser: (usuario: User) => set({ usuario, logged: true }),
  logout: async () =>{
    const logout = await logoutFirebase()
    set({ 
      usuario: {} as User, 
      logged: logout 
    })
    return get().logged
  } 
})
