import CardConfirm, {
  CardConfirmItem,
} from "@/Components/Display/CardConfirm/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
const data: CardConfirmItem[] = [
  {
    label: "Amout",
    value: "-100.00 USD",
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

export default function SavingPageReview() {
  useSetAppLayoutTitle("Savings");

  const navigate = useNavigate();
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
          pathname: "/app/savings/confirm",
        });
      }}
    />
  );
}
