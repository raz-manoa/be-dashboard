import React, { useContext } from "react";

export type Maybe<T> = T | null | undefined;

export interface TransactionsFormType {
  type: Maybe<string>;
  dateFrom: Maybe<string>;
  dateTo: Maybe<string>;
  name: Maybe<string>;
}

interface IState {
  form?: TransactionsFormType;
  setForm?: React.Dispatch<React.SetStateAction<TransactionsFormType | undefined>>;
}
const TransactionsPageContext = React.createContext<IState>({});

export const useTransactionsPageContext = () => useContext(TransactionsPageContext);

export default TransactionsPageContext;
