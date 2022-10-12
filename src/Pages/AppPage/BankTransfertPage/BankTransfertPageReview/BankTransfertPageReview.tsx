import CardConfirm, {
  CardConfirmItem,
} from "@/Components/Display/CardConfirm/CardConfirm";
import React from "react";
import { useNavigate } from "react-router-dom";
const data: CardConfirmItem[] = [
  {
    label: "Test",
    value: "100",
    color: "red",
  },
  {
    label: "Test",
    value: "120",
    color: "black",
  },
];
export default function BankTransfertPageReview() {
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
          pathname: "/app/savings",
        });
      }}
      onClickSecondBtn={() => {
        navigate({
          pathname: "/app/savings/confirm",
        });
      }}
    />
  );
}
