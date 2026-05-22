import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "./user";

type AuthState = {
  authUser: User | null;
  isReady: boolean;
  saveAuthUser: (user: User) => Promise<void>;
  removeAuthUser: () => Promise<void>;
};

const AuthContext = React.createContext<AuthState>({
  authUser: null,
  isReady: false,
  saveAuthUser: async () => {},
  removeAuthUser: async () => {},
});

const AUTH_KEY = "AUTH_KEY";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  const saveAuthUser = async (user: User) => {
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(user));
    setAuthUser(user);
    router.replace("/(protected)/(tabs)");
  };

  const removeAuthUser = async () => {
    await AsyncStorage.removeItem(AUTH_KEY);
    setAuthUser(null);
  };

  const loadAuthUser = async () => {
    try {
      const user = await AsyncStorage.getItem(AUTH_KEY);

      if (user) {
        setAuthUser(JSON.parse(user));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsReady(true);
    }
  };

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
