import React, { createContext, useContext } from "react";

interface IAppLayoutContextState {}

export const AppLayoutContext = createContext<IAppLayoutContextState>({});

export const useAppLayoutContext = () => useContext(AppLayoutContext);
