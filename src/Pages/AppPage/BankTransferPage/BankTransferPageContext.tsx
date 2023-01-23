import { ICardAmountForm } from "@/Components/Display/CardAmount/CardAmount";
import React, { useContext } from "react";
// import { IBeneficiaryForm } from "./BankTransferPageAddBeneficiary/BankTransferPageAddBeneficiary";
import { IRecipientForm } from "./BankTransferPageAddBeneficiary/BankTransferPageRecipient/BankTransferPageRecipient";

export interface BankTransferFormType extends ICardAmountForm {
  beneficiary?: IRecipientForm;
}
interface IState {
  form?: BankTransferFormType;
  setForm?: React.Dispatch<
    React.SetStateAction<BankTransferFormType | undefined>
  >;
}
const BankTransferPageContext = React.createContext<IState>({});

export const useBankTransferPageContext = () =>
  useContext(BankTransferPageContext);

export default BankTransferPageContext;
