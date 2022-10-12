import CardConfirm, {
  CardConfirmItem,
} from "@/Components/Display/CardConfirm/CardConfirm";
import { useAppLayoutContext } from "@/Layouts/AppLayout/AppLayoutContext";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ForeignExchangePageReview() {
  const { setHeaderTitle } = useAppLayoutContext();
  useEffect(() => {
    setHeaderTitle("Foreign Exchange (FX)");
  });
  const navigate = useNavigate();
  const data: CardConfirmItem[] = [
    {
      label: "From",
      value: "170.00 USD",
      color: "red",
    },
    {
      label: "To",
      value: "15.64 EUR",
      color: "black",
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
      title="Access"
      btnPrimary="Annuler"
      btnSecondary="Confirmer"
      data={data}
      onClickFirstBtn={() => {
        navigate({
          pathname: "/app/foreign-exchange",
        });
      }}
      onClickSecondBtn={() => {
        navigate({
          pathname: "/app/foreign-exchange/foreign-exchange-confirm",
        });
      }}
    />
  );
}
