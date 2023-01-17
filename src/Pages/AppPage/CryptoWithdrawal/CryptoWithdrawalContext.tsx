import { ECurrency } from "@/Interfaces/Currency";
import React, { useContext } from "react";

export interface CryptoWithdrawalConfirmData {}

export interface CryptoWithdrawalFormType {
  chain: ECurrency;
  currency: ECurrency;
  amount: string;
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
