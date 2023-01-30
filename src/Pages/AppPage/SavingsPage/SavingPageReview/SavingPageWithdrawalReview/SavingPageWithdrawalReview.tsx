import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";

import { useNavigate } from "react-router-dom";
import { useSavingPageContext } from "../../SavingPageContext";

export default function SavingPageReview() {
  useSetAppLayoutTitle("Savings");
  const { form } = useSavingPageContext();

  const navigate = useNavigate();
  const data: CardModalItemProps[] = [
    {
      label: "Amout",
      value: form ? `${form.value} ${form.currency}` : "",
      color: "red",
    },
    {
      label: "Recipient",
      value: "Company Name",
      color: "black",
    },
    {
      label: "BE ID",
      value: "30303",
      color: "black",
    },
    {
      label: "When",
      value: "May 17, 2022",
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
      onClickSecondBtn={() => {
        navigate({
          pathname: "/app/savings/confirm-withdrawal",
        });
      }}
    />
  );
}
