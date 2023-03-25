import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import { useSavingPageContext } from "../../SavingPageContext";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import dayjs from "dayjs";
import Alert from "antd/es/alert";
import {useEffect, useState} from "react";
import api from "@/Api/api";

export default function SavingPageReview() {
  useSetAppLayoutTitle("Savings");
  const { form, setForm } = useSavingPageContext();
  const [error, setError] = useState<boolean>(false);
  const companyId = localStorage.getItem("companyId") || "";
  const beid = localStorage.getItem('beId');
  const fullname = localStorage.getItem('fullName');
  const date = new Date();
  let data: CardModalItemProps[] = [
    {
      label: "Amount",
      value: form ? `${form.value} ${form.currency}` : "",
      color: "red",
    },
    {
      label: "Recipient",
      value: fullname,
      color: "black",
    },
    {
      label: "BE ID",
      value: beid,
      color: "black",
    },
    {
      label: "When",
      value: date.toLocaleString(),
      color: "black",
    }
  ];

  const navigate = useNavigate();
  return (
      <div>
        {error && (
            <Alert message="Savings deposit failed" type="error" className="mb-8" />
        )}
        <CardConfirm
            data={data}
            title="Savings Deposit - Review"
            className="common__card"
            btnPrimary="back"
            btnSecondary="Confirm"
            onClickFirstBtn={() => {
              navigate({
                pathname: "/app/savings",
              });
            }}
            onClickSecondBtn={async () => {
              try {
                const result = await companyDataEndpoint.addSavings(companyId, {
                  currency: form?.currency,
                  amount: form?.value,
                });
                if (setForm) {
                  setForm({
                    currency: form.currency,
                    value: form.value,
                    response: result,
                    type: 'deposit'
                  });
                }
                navigate({
                  pathname: "/app/savings/confirm-deposit",
                });
              } catch (e) {
                setError(true);
              }
            }}
        />
      </div>
  );
}
