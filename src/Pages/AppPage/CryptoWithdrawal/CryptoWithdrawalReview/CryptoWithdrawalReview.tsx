import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import Alert from "antd/es/alert";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCryptoWithdrawalContext } from "../CryptoWithdrawalContext";

export default function CryptoWithdrawalReview() {
  useSetAppLayoutTitle("Crypto Withdrawal");
  const navigate = useNavigate();
  const { form, setConfirmation } = useCryptoWithdrawalContext();
  const [error, setError] = useState<boolean>(false);
  if (!form) {
    return <Navigate to="" />;
  }

  const data: CardModalItemProps[] = [
    {
      label: "Sending",
      value: form.amount + " " + form.currency,
      color: "red",
    },
    {
      label: "Transaction fee",
      value: form.fee || 0 + " " + form.currency,
      color: "black",
    },
    {
      label: "Destination Amount",
      value: form.amount + " " + form.currency,
      color: "black",
    },
    {
      label: "Destination address",
      value: form.address,
      color: "black",
    },
    {
      label: "When",
      value: new Date().toLocaleDateString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
        formatMatcher: "basic",
      }),
      color: "black",
      weight: 400,
    },
  ];

  const handleSubmit = async () => {
    const companyId = localStorage.getItem("companyId") || "";
    const body = {
      address: form.address,
      amount: form.amount,
      currency: form.currency
    };
    const response = await companyDataEndpoint.cryptoWithdraw(companyId, body);
    if (response && setConfirmation) {
      setConfirmation(response);
      navigate({
        pathname: "/app/crypto-withdraw/confirm",
      });
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {error && (
        <Alert message="Transfer failed" type="error" className="mb-8" />
      )}
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
        onClickSecondBtn={handleSubmit}
      />
    </div>
  );
}
