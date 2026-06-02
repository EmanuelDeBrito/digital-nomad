import { useStorageContext } from "@/src/infra/storage/storage-provider";
import { router, SplashScreen } from "expo-router";
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "./user";

// Função que previni a Splash Screen de sair da tela automaticamente
SplashScreen.preventAutoHideAsync();

type AuthState = {
  authUser: User | null;
  isReady: boolean;
  saveAuthUser: (user: User) => Promise<void>;
  removeAuthUser: () => Promise<void>;
};

export const AuthContext = React.createContext<AuthState>({
  authUser: null,
  isReady: false,
  saveAuthUser: async () => {},
  removeAuthUser: async () => {},
});

const AUTH_KEY = "AUTH_KEY";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { storage } = useStorageContext();

  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  const saveAuthUser = async (user: User) => {
    await storage.setItem(AUTH_KEY, user);
    setAuthUser(user);
    router.replace("/(protected)/(tabs)");
  };

  const removeAuthUser = async () => {
    await storage.removeItem(AUTH_KEY);
    setAuthUser(null);
  };

  const loadAuthUser = async () => {
    try {
      await new Promise((resolve) => {
        setInterval(() => {
          resolve("");
        }, 2000);
      });
      const user = await storage.getItem<User>(AUTH_KEY);

      if (user) {
        setAuthUser(user);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    if (isReady) {
      SplashScreen.hide();
    }
  }, [isReady]);

  useEffect(() => {
    loadAuthUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authUser, isReady, saveAuthUser, removeAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Auth Context should be used within a Auth Provider");
  }

  return context;
};
