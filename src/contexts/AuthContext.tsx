import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface AuthContextProps {
  auth?: User;
  setAuth: Dispatch<SetStateAction<User | undefined>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<User | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
