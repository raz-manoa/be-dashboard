import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";
import { useNavigate } from "react-router-dom";

const data: CardModalItemProps[] = [
  {
    label: "Sending",
    value: "0.00111111 ETH",
    color: "red",
  },
  {
    label: "Transaction fee",
    value: "0.00050000 ETH",
    color: "black",
  },
  {
    label: "Destination Amount",
    value: "0.00100000 ETH",
    color: "black",
  },
  {
    label: "Destination address",
    value: "0x9D7e522C00574c£000503801D27ddc2fbb2552E2",
    color: "black",
  },
  {
    label: "When",
    value: "May 17, 2022",
    color: "black",
    weight: 400,
  },
];

export default function CryptoWithdrawalReview() {
  useSetAppLayoutTitle("Crypto Withdrawal");
  const navigate = useNavigate();

  return (
    <CardConfirm
      title="Crypto Withdrawal - Review"
      data={data}
      className="common__card"
      btnPrimary="back"
      itemStyle={{ padding: "25px 15px 24px" }}
      btnSecondary="confirm"
      onClickFirstBtn={() => {
        navigate({
          pathname: "/app/crypto-withdraw",
        });
      }}
      onClickSecondBtn={() => {
        navigate({
          pathname: "/app/crypto-withdraw/confirm",
        });
      }}
    />
  );
}
