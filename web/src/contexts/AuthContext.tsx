import { createContext, ReactNode, useState } from 'react';
import { IUser } from '../@types/user';

interface AuthContextType {
  auth: boolean;
  user: IUser | undefined;
  updateAuth: (authenticated: boolean) => void;
  updateUser: (user: IUser) => void;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>();

  async function updateAuth(authenticated: boolean) {
    setAuth(authenticated);
  }

  async function updateUser(user: IUser) {
    setUser(user);
  }
  return (
    <AuthContext.Provider value={{ auth, updateAuth, user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
