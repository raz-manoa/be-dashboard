import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import { formatCardAmount } from "@/Components/Display/CardAmount/CardAmount";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Alert } from "antd";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useOtcPagePageContext } from "../OtcPageContext";

export default function OtcPageReview() {
  useSetAppLayoutTitle("OTC");
  const navigate = useNavigate();
  const { form } = useOtcPagePageContext();
  const [error, setError] = useState<boolean>(false);

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
    const companyId = localStorage.getItem("companyId") || "";
    try {
      const data = await companyDataEndpoint.cryptoExchange(companyId, {
        currencyFrom: form.from.currency,
        currencyTo: form.to.currency,
        amount: Number(form.from.value),
        startRate: Number(form.rate?.rate),
        type: "otc",
      });
      navigate({
        pathname: "/app/otc/confirm",
      });
    } catch (e) {
      setError(true);
    }
  };
  return (
    <div>
      {error && (
        <Alert message="Exchange failed." type="error" className="mb-8" />
      )}
      <CardConfirm
        className="common__card"
        title="Foreign Exchange - Review"
        btnPrimary="Back"
        btnSecondary="Confirm"
        data={data}
        onClickFirstBtn={() => {
          navigate({
            pathname: "/app/otc",
          });
        }}
        onClickSecondBtn={onSubmit}
      />
    </div>
  );
}
