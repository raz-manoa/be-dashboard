import { ICardAmountForm } from "@/Components/Display/CardAmount/CardAmount";
import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CryptoExchangeConfirmData } from "./CryptoExchangePageSuccess/CryptoExchangePageSuccess";

export interface CryptoExchangeFormType extends ICardAmountForm {}
interface IState {
  form?: CryptoExchangeFormType;
  setForm?: React.Dispatch<
    React.SetStateAction<CryptoExchangeFormType | undefined>
  >;
  confirmation?: CryptoExchangeConfirmData;
  setConfirmation?: React.Dispatch<
    React.SetStateAction<CryptoExchangeConfirmData | undefined>
  >;
}
const CryptoExchangePageContext = React.createContext<IState>({});

export const useCryptoExchangePageContext = () =>
  useContext(CryptoExchangePageContext);

export default CryptoExchangePageContext;
