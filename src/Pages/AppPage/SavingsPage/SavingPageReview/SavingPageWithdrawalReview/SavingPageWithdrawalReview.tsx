import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";

import { useNavigate } from "react-router-dom";
import { useSavingPageContext } from "../../SavingPageContext";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import {ECurrency} from "@/Interfaces/Currency";

export default function SavingPageReview() {
  useSetAppLayoutTitle("Savings");
  const { form, setForm } = useSavingPageContext();
  const companyId = localStorage.getItem("companyId") || "";
  const beid = localStorage.getItem('beId');
  const fullname = localStorage.getItem('fullName');
  const date = "Jan 30, 2023";

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
      value: date,
      color: "black",
    },
  ];
  return (
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
      }}
    />
  );
}
