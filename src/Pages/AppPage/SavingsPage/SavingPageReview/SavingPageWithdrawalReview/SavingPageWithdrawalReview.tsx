import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";

import { useNavigate } from "react-router-dom";
import { useSavingPageContext } from "../../SavingPageContext";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import {ECurrency} from "@/Interfaces/Currency";
import dayjs from "dayjs";
import {useState} from "react";
import Alert from "antd/es/alert";

export default function SavingPageReview() {
  useSetAppLayoutTitle("Savings");
  const { form, setForm } = useSavingPageContext();
  const companyId = localStorage.getItem("companyId") || "";
  const beid = localStorage.getItem('beId');
  const fullname = localStorage.getItem('fullName');
  const date = new Date();
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  const data: CardModalItemProps[] = [
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
    },
  ];
  return (
      <div>
        {error && (
            <Alert message="Savings withdrawal failed" type="error" className="mb-8" />
        )}
        <CardConfirm
            data={data}
            title="Savings Withdrawal - Review"
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
                const result = await companyDataEndpoint.requestWithdrawSavings(companyId, {
                  currency: form?.currency,
                  amount: form?.value,
                });
                if (setForm) {
                  setForm({
                    currency: form.currency,
                    value: form.value,
                    response: result,
                    type: 'withdraw'
                  });
                }
                navigate({
                  pathname: "/app/savings/confirm-withdrawal",
                });
              } catch (e) {
                setError(true);
              }
            }}
        />
      </div>
  );
}
