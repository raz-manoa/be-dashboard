import { formatCardAmount } from "@/Components/Display/CardAmount/CardAmount";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useCryptoExchangePageContext } from "../CryptoExchangePageContext";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import Alert from "antd/es/alert";

export default function CryptoExchangePageReview() {
  useSetAppLayoutTitle("Crypto Exchange");
  const navigate = useNavigate();
  const { form, setConfirmation } = useCryptoExchangePageContext();

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

  const onSubmit = async () => {
    console.log("submit form", form);
    // TODO: pass response to confirmation
    const companyId = localStorage.getItem("companyId") || "";
    const data = await companyDataEndpoint.exchange(companyId, {
      currencyFrom: form.from.currency,
      currencyTo: form.to.currency,
      amount: form.from.value,
      startRate: form.rate,
      type: "exchange",
    });
    // console.log(data);
    // const data = await companyDataEndpoint.exchange("companyId", {
    //   currencyFrom: "ETH",
    //   currencyTo: "SOL",
    //   amount: "2",
    //   startRate: "rate fetched from getRates",
    //   type: "exchange",
    // });

    if (setConfirmation && data) {
      setConfirmation(data);
    }
    // TODO: submit exchange
    navigate({
      pathname: "/app/crypto-exchange/confirm",
    });
  };

  return (
    <div>
      <Alert message="Insufficient USD funds." type="error" className="mb-8" />
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
    </div>
  );
}
