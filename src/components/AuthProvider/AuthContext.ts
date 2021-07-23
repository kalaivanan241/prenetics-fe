import { createContext } from "react";
import { boolean } from "yup/lib/locale";

interface AuthContextI {
  user: any;
  login?: (user: any) => Promise<boolean | undefined>;
  logout?: () => void;
  loading: boolean;
}

const defaultContext: AuthContextI = {
  user: null,
  login: undefined,
  logout: undefined,
  loading: false,
};

export const AuthContext = createContext<AuthContextI>(defaultContext);
