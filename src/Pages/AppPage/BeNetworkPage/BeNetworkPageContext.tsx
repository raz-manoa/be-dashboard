import { ECurrency } from "@/Interfaces/Currency";
import React, { useContext } from "react";

export interface BeNetworkFormType {
  leavingAcount: {
    value: number;
    currency: ECurrency;
  };
  withPhone?: boolean;
  phone?: string;
  withBeid?: boolean;
  beid?: string;
  message?: string;
}
interface IState {
  form?: BeNetworkFormType;
  setForm?: React.Dispatch<React.SetStateAction<BeNetworkFormType | undefined>>;
}
const BeNetworkPageContext = React.createContext<IState>({});

export const useBeNetworkPageContext = () => useContext(BeNetworkPageContext);

export default BeNetworkPageContext;
