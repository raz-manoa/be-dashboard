import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";

export default function CryptoExchangePageReview() {
  useSetAppLayoutTitle("Crypto Exchange");
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
      title="Crypto Exchange - Review"
      btnPrimary="Annuler"
      btnSecondary="Confirmer"
      data={data}
      onClickFirstBtn={() => {
        navigate({
          pathname: "/app/crypto-exchange/",
        });
      }}
      onClickSecondBtn={() => {
        navigate({
          pathname: "/app/crypto-exchange/confirm",
        });
      }}
    />
  );
}
