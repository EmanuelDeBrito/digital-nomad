import { Repositories } from "@/src/domain/repositories";
import React from "react";

export const RepositoryContext = React.createContext<Repositories>(
  {} as Repositories,
);

export const RepositoryProvider = RepositoryContext.Provider;

export const useRepositoryContext = () => {
  const context = React.useContext(RepositoryContext);

  if (!context) {
    throw new Error(
      "Repository Context should be used within a RepositoryProvider",
    );
  }

  return context;
};
