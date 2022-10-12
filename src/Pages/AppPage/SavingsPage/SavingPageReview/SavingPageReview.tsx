import CardModal, {
  CardModelItem,
} from "@/Components/Display/CardModal/CardModal";
import React from "react";
import { useNavigate } from "react-router-dom";
const data: CardModelItem[] = [
  {
    label: "Amout",
    value: "-100.00 USD",
    color: "red",
  },
  {
    label: "Recipient",
    value: "Company Name",
    color: "black",
  },
  {
    label: "BE ID",
    value: "30303",
    color: "black",
  },
  {
    label: "When",
    value: "May 17, 2022",
    color: "black",
  },
];

export default function SavingPageReview() {
  const navigate = useNavigate();
  return (
    <CardModal
      data={data}
      title="Savings Withdrawal - Review"
      className="common__card"
      btnPrimary="back"
      btnSecondary="Confirm"
      onClickFirstBtn={() => {
        console.log("first");

        navigate({
          pathname: "/app/savings",
        });
      }}
      onClickSecondBtn={() => {
        console.log("second");

        navigate({
          pathname: "/app/savings/confirm",
        });
      }}
    />
  );
}
