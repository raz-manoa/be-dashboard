import { ICardAmountForm } from "@/Components/Display/CardAmount/CardAmount";
import React, { useContext } from "react";
import { ECurrency } from "@/Interfaces/Currency";

export interface SavingFormType {
  type: "deposit" | "withdraw";
  currency: ECurrency;
  value: number;
  response?: object;
}
interface IState {
  form?: SavingFormType;
  setForm?: React.Dispatch<React.SetStateAction<SavingFormType | undefined>>;
}
const SavingPageContext = React.createContext<IState>({});

export const useSavingPageContext = () => useContext(SavingPageContext);

export default SavingPageContext;
