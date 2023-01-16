import { ICardAmountForm } from "@/Components/Display/CardAmount/CardAmount";
import React, { useContext, useState } from "react";

export interface OtcPageFormType extends ICardAmountForm {}
interface IState {
  form?: OtcPageFormType;
  setForm?: React.Dispatch<React.SetStateAction<OtcPageFormType | undefined>>;
}
const OtcPagePageContext = React.createContext<IState>({});

export const useOtcPagePageContext = () => useContext(OtcPagePageContext);

export default OtcPagePageContext;
