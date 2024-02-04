// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { auth } from '../../firebaseConfig';
interface AuthContextType {
  user: any;
  //   login: (email: string, password: string) => Promise<any>;
  //   logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);

  //   useEffect(() => {
  //     const unsubscribe = auth().onAuthStateChanged((authUser) => {
  //       setUser(authUser);
  //     });

  //     return () => unsubscribe();
  //   }, []);

  //   const login = async (email: string, password: string) => {
  //     return auth().signInWithEmailAndPassword(email, password);
  //   };

  //   const logout = async () => {
  //     return auth().signOut();
  //   };

  const values: AuthContextType = {
    user,
    // login,
    // logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
