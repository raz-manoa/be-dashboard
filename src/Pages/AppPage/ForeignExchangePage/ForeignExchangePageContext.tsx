import { ICardAmountForm } from "@/Components/Display/CardAmount/CardAmount";
import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

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
