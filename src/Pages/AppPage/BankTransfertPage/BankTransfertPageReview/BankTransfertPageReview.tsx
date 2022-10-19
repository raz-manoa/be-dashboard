import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import Text from "@/Components/General/Text/Text";
import {
  useAppLayoutContext,
  useSetAppLayoutTitle,
} from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";
import { useNavigate } from "react-router-dom";
const data: CardModalItemProps[] = [
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
    value: (
      <Text variant="black" size={14}>
        this is a msg
      </Text>
    ),
    color: "black",
    align: "row",
    weight: 400,
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
          pathname: "/app/bank-transfer/confirm",
        });
      }}
    />
  );
}
