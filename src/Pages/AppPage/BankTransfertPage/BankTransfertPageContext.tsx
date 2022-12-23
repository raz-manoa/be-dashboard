import { ICardAmountForm } from "@/Components/Display/CardAmount/CardAmount";
import React, { useContext } from "react";
import { IBeneficiaryForm } from "./BankTransfertPageAddBeneficiary/BankTransfertPageAddBeneficiary";

export interface BankTransfertFormType extends ICardAmountForm {
  // TODO: static type
  beneficiary?: IBeneficiaryForm;
}
interface IState {
  form?: BankTransfertFormType;
  setForm?: React.Dispatch<
    React.SetStateAction<BankTransfertFormType | undefined>
  >;
}
const BankTransfertPageContext = React.createContext<IState>({});

export const useBankTransfertPageContext = () =>
  useContext(BankTransfertPageContext);

export default BankTransfertPageContext;
