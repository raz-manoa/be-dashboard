import { formatCardAmount } from "@/Components/Display/CardAmount/CardAmount";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useForeignExchangePageContext } from "../ForeignExchangePageContext";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";

export default function ForeignExchangePageReview() {
  useSetAppLayoutTitle("Foreign Exchange (FX)");
  const navigate = useNavigate();
  const { form } = useForeignExchangePageContext();

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
    // TODO: submit exchange
    const companyId = localStorage.getItem('companyId') || '';
    const data = await companyDataEndpoint.exchange(companyId, {
      currencyFrom: form.from.currency,
      currencyTo: form.to.currency,
      amount: Number(form.from.value),
      // startRate: Number(form.rate.rate),
      type: "exchange",
    });
    navigate({
      pathname: "/app/foreign-exchange/confirm",
    });
  };
  return (
    <CardConfirm
      className="common__card"
      title="Foreign Exchange - Review"
      btnPrimary="Back"
      btnSecondary="Confirm"
      data={data}
      onClickFirstBtn={() => {
        navigate({
          pathname: "/app/foreign-exchange",
        });
      }}
      onClickSecondBtn={onSubmit}
    />
  );
}
