import { formatCardAmount } from "@/Components/Display/CardAmount/CardAmount";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useCryptoExchangePageContext } from "../CryptoExchangePageContext";

export default function CryptoExchangePageReview() {
  useSetAppLayoutTitle("Crypto Exchange");
  const navigate = useNavigate();
  const { form } = useCryptoExchangePageContext();

  if (!form) {
    return <Navigate to="" />;
  }

  const data: CardModalItemProps[] = [
    {
      label: "From",
      value: formatCardAmount("from", form),
      color: "red",
    },
    {
      label: "To",
      value: formatCardAmount("to", form),
      color: "red",
    },
    {
      label: "Transaction fee",
      value: formatCardAmount("transactionFee", form),
      color: "black",
    },
    {
      label: "Recipient Details",
      value: "Company Name",
      color: "black",
    },
  ];

  const onSubmit = () => {
    console.log("submit form", form);
    // TODO: submit exchange
    navigate({
      pathname: "/app/crypto-exchange/confirm",
    });
  };

  return (
    <CardConfirm
      className="common__card"
      title="Crypto Exchange - Review"
      btnPrimary="Back"
      btnSecondary="Confirmer"
      itemStyle={{ padding: "25px 15px 24px" }}
      data={data}
      onClickFirstBtn={() => {
        navigate({
          pathname: "/app/crypto-exchange/",
        });
      }}
      onClickSecondBtn={onSubmit}
    />
  );
}
