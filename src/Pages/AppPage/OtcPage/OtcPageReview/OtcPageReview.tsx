import CardConfirm, {
  CardModalItemProps,
} from "@/Components/Display/CardConfirm/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function OtcPageReview() {
  useSetAppLayoutTitle("OTC");
  const navigate = useNavigate();
  const data: CardModalItemProps[] = [
    {
      label: "From",
      value: "100.00 SOL",
      color: "red",
    },
    {
      label: "To",
      value: "97.00 BTC",
      color: "red",
    },
    {
      label: "Transaction fee",
      value: "0.00 USD",
      color: "black",
    },
    {
      label: "Recipient Deatils",
      value: "Company Name",
      color: "black",
    },
  ];
  return (
    <CardConfirm
      className="common__card"
      title="Foreign Exchange - Review"
      btnPrimary="back"
      btnSecondary="Confirm"
      data={data}
      onClickFirstBtn={() => {
        navigate({
          pathname: "/app/otc",
        });
      }}
      onClickSecondBtn={() => {
        navigate({
          pathname: "/app/otc/confirm",
        });
      }}
    />
  );
}
