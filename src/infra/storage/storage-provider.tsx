import React, { PropsWithChildren, useContext } from "react";
import { StorageInterface } from "./storageInterface";

const StorageContext = React.createContext<{ storage: StorageInterface }>({
  storage: {} as StorageInterface,
});

export const StorageProvider = ({
  children,
  storage,
}: PropsWithChildren<{
  storage: StorageInterface;
}>) => {
  return (
    <StorageContext.Provider value={{ storage }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorageContext = () => {
  const context = useContext(StorageContext);

  if (!context) {
    throw new Error(
      "Storage Context should be used within a Storage Context Provider",
    );
  }

  return context;
};
