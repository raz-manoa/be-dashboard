import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";

export default function OtcPageReview() {
  useSetAppLayoutTitle("OTC");
  const navigate = useNavigate();
  const data: CardModalItemProps[] = [
    {
      label: "From",
      value: "170.00 USD",
      color: "red",
    },
    {
      label: "To",
      value: "170.00 USDC",
      color: "red",
    },
    {
      label: "Transaction fee",
      value: "0.00 USD",
      color: "black",
    },
    {
      label: "Recipient Details",
      value: "Company Name",
      color: "black",
    },
  ];
  return (
    <CardConfirm
      className="common__card"
      title="Foreign Exchange - Review"
      btnPrimary="back"
      btnSecondary="Confirm"
      itemStyle={{ padding: "25px 15px 24px" }}
      data={data}
      onClickFirstBtn={() => {
        navigate({
          pathname: "/app/otc",
        });
      }}
      onClickSecondBtn={() => {
        navigate({
          pathname: "/app/otc/confirm",
        });
      }}
    />
  );
}
