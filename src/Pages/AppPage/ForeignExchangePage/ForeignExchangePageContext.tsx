import { ICardAmountForm } from "@/Components/Display/CardAmount/CardAmount";
import React, { useContext } from "react";

export interface ForeignExchangeFormType extends ICardAmountForm {}
interface IState {
  form?: ForeignExchangeFormType;
  setForm?: React.Dispatch<
    React.SetStateAction<ForeignExchangeFormType | undefined>
  >;
}
const ForeignExchangePageContext = React.createContext<IState>({});

export const useForeignExchangePageContext = () =>
  useContext(ForeignExchangePageContext);

export default ForeignExchangePageContext;
