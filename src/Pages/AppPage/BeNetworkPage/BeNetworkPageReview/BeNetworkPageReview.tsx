import Card from "@/Components/Display/Card/Card";
import CardConfirm, {
  CardConfirmItemProps,
} from "@/Components/Display/CardConfirm/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BeNetworkPageReview() {
  useSetAppLayoutTitle("Be Network");
  const data: CardConfirmItemProps[] = [
    { label: "Amount", value: "+454.00 CHF", color: "red" },
    { label: "Transaction Fee", value: "0.00 USD", color: "black" },
    {
      label: "Recipient",
      value: "YR Main",
      num: +380930874852,
      color: "black",
    },
    { label: "When", value: "May 17, 2022", color: "black" },
    {
      label: "Message",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      color: "black",
      optional: "Optional",
    },
  ];
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/app/be-network");
  };
  const handleConfirm = () => {
    navigate("/app/be-network/confirm");
  };
  return (
    <CardConfirm
      title="Review"
      data={data}
      className="common__card"
      btnPrimary="back"
      btnSecondary="Confirm"
      onClickFirstBtn={handleBack}
      onClickSecondBtn={handleConfirm}
    />
  );
}
