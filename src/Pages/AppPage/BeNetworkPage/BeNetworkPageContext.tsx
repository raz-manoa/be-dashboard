import { ITransactionFee } from "@/Components/Display/CardAmount/CardAmount";
import { ECurrency } from "@/Interfaces/Currency";
import React, { useContext } from "react";

export interface BeNetworkFormType {
  amount: number;
  currency: ECurrency;
  withPhone?: boolean;
  phone?: string;
  withBeid?: boolean;
  beid?: string;
  message?: string;
  transactionFee?: ITransactionFee;
  recipient?: {
    id: string;
    identity: string;
  };
}
export interface BeNetworkConfirmation {}
interface IState {
  form?: BeNetworkFormType;
  confirmation?: BeNetworkConfirmation;
  setConfirmation?: React.Dispatch<
    React.SetStateAction<BeNetworkConfirmation | undefined>
  >;
  setForm?: React.Dispatch<React.SetStateAction<BeNetworkFormType | undefined>>;
}
const BeNetworkPageContext = React.createContext<IState>({});

export const useBeNetworkPageContext = () => useContext(BeNetworkPageContext);

export default BeNetworkPageContext;
