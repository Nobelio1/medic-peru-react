import { StateCreator } from "zustand";
import { LoginRes, LoginIn } from "../interfaces/auth.inteface";
import { loginUser } from "../api/auth/authService";
import { logoutFirebase } from "../firebase/providerGoogle";

export interface User {
  displayName: string,
  email: string,
  uid?: string,
  rol?: string
  token?: string
}

export interface AuthSliceProps {
  usuario: User
  rolRegistro: string
  checking: boolean
  logged: boolean
  setUser: (usuario: User) => void
  logout: () => Promise<boolean>
  onLogin: (user: LoginIn) => Promise<LoginRes>
  setRol: (rol: string) => void
}

export const createAuthSlice: StateCreator<AuthSliceProps> = (set, get) => ({
  usuario: {} as User,
  rolRegistro: '',
  checking: false,
  logged: false,
  setRol: (rol: string) => set({ rolRegistro: rol }),
  onLogin: async (user: LoginIn) => {
    set({
      checking: true,
    });
    const res: LoginRes[] = await loginUser({ user })
    set({
      checking: false,
    });
    // get().setUser(user.username)
    return res[0];
  },
  setUser: (usuario: User) => set({ usuario, logged: true }),
  logout: async () => {
    const logout = await logoutFirebase();
    set({
      usuario: {} as User,
      logged: logout,
    });
    return get().logged;
  },
});
