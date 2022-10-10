import React, { createContext, ReactNode, useContext } from "react";

interface IAppLayoutContextState {
  headerTitle: ReactNode;
  setHeaderTitle: React.Dispatch<React.SetStateAction<ReactNode>>;
}

export const AppLayoutContext = createContext<IAppLayoutContextState>({
  headerTitle: "",
  setHeaderTitle: () => {},
});

export const useAppLayoutContext = () => useContext(AppLayoutContext);
