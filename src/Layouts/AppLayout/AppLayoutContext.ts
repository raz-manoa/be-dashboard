import React, { createContext, ReactNode, useContext, useEffect } from "react";

interface IAppLayoutContextState {
  headerTitle: ReactNode;
  setHeaderTitle: React.Dispatch<React.SetStateAction<ReactNode>>;
}

export const AppLayoutContext = createContext<IAppLayoutContextState>({
  headerTitle: "",
  setHeaderTitle: () => {},
});

export const useAppLayoutContext = () => useContext(AppLayoutContext);

export const useSetAppLayoutTitle = (title: ReactNode) => {
  const { setHeaderTitle } = useAppLayoutContext();

  useEffect(() => {
    setHeaderTitle(title);
    return () => {
      setHeaderTitle(null);
    };
  }, []);
};
