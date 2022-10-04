import React, { createContext, useContext } from "react";

interface IDefaultLayoutContextState {}

export const DefaultLayoutContext = createContext<IDefaultLayoutContextState>(
  {}
);

export const useDefaultLayoutContext = () => useContext(DefaultLayoutContext);
