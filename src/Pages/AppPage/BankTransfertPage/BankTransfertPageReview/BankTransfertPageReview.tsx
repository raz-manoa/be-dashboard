import CardConfirm, {
  CardConfirmItemProps,
} from "@/Components/Display/CardConfirm/CardConfirm";
import {
  useAppLayoutContext,
  useSetAppLayoutTitle,
} from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";
import { useNavigate } from "react-router-dom";
const data: CardConfirmItemProps[] = [
  {
    label: "Amount from",
    value: "12.00 USD",
    color: "black",
  },
  {
    label: "Amount to",
    value: "12.00 USD",
    color: "black",
  },
  {
    label: "Transaction Fee",
    value: "0.50 USD",
    color: "black",
  },
  {
    label: "Recipient",
    value: "John Smith",
    color: "black",
  },
  {
    label: "Country",
    value: "USA",
    color: "black",
  },
  {
    label: "City",
    value: "Washington",
    color: "black",
  },
  {
    label: "Bank Name",
    value: "City Bank",
    color: "black",
  },
  {
    label: "Account Number",
    value: "000449876447656",
    color: "black",
  },
  {
    label: "BIC/SWIFT Code",
    value: "3003",
    color: "black",
  },
  {
    label: "IBAN",
    value: "876165318323290823132",
    color: "black",
  },
  {
    label: "Message",
    msg: "this is a msg",
    color: "black",
  },
];
export default function BankTransfertPageReview() {
  useSetAppLayoutTitle("Bank Transfert");
  const navigate = useNavigate();
  return (
    <CardConfirm
      data={data}
      title="Savings Withdrawal - Review"
      className="common__card"
      btnPrimary="back"
      btnSecondary="Confirm"
      onClickFirstBtn={() => {
        navigate({
          pathname: "/app/bank-transfer/add-beneficiary",
        });
      }}
      onClickSecondBtn={() => {
        navigate({
          pathname: "/app/bank-transfer/bank-confirm",
        });
      }}
    />
  );
}
