import { ECurrency } from "@/Interfaces/Currency";
import React, { useContext } from "react";

export interface CryptoWithdrawalConfirmData {
  // TODO: declare type
}

export interface CryptoWithdrawalFormType {
  chain: ECurrency;
  address: string;
  currency: ECurrency;
  amount: number;
  fee?: number;
}
interface IState {
  form?: CryptoWithdrawalFormType;
  setForm?: React.Dispatch<
    React.SetStateAction<CryptoWithdrawalFormType | undefined>
  >;
  confirmation?: CryptoWithdrawalConfirmData;
  setConfirmation?: React.Dispatch<
    React.SetStateAction<CryptoWithdrawalConfirmData | undefined>
  >;
}
const CryptoWithdrawalContext = React.createContext<IState>({});

export const useCryptoWithdrawalContext = () =>
  useContext(CryptoWithdrawalContext);

export default CryptoWithdrawalContext;
