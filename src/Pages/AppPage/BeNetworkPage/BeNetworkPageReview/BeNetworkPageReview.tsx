import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import Text from "@/Components/General/Text/Text";
import styles from "./BeNetworkPageReview.module.scss";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import { useBeNetworkPageContext } from "../BeNetworkPageContext";

export default function BeNetworkPageReview() {
  useSetAppLayoutTitle("Be Network");
  const { form } = useBeNetworkPageContext();

  const data: CardModalItemProps[] = [
    {
      label: (
        <Text tag="span" variant="grey" weight={700} size={12}>
          Amount
        </Text>
      ),
      value: form ? `${form.amount} ${form.currency}` : "",
      color: "red",
      weight: 400,
    },
    {
      label: (
        <Text tag="span" variant="grey" weight={700} size={12}>
          Transaction Fee
        </Text>
      ),
      value:
        form && form.transactionFee
          ? `${form.transactionFee.value} ${form.transactionFee.currency}`
          : "0",
      color: "black",
      weight: 400,
    },
    {
      label: (
        <Text tag="span" variant="grey" weight={700} size={12}>
          Recipient
        </Text>
      ),
      value: (
        <Text tag="div" variant="black" weight={700} size={12}>
          {form?.recipient ? form.recipient.identity : ""}
        </Text>
      ),
      extra: (
        <Text tag="div" variant="grey-light" weight={700} size={12}>
          {form ? (form.beid ? form.phone : "") : ""}
        </Text>
      ),
      color: "black",
    },
    {
      label: (
        <Text tag="span" variant="grey" weight={700} size={12}>
          When
        </Text>
      ),
      value: new Date().toLocaleDateString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      color: "black",
      weight: 400,
    },
    {
      label: (
        <>
          <Text tag="span" variant="grey" weight={700} size={12}>
            Message
          </Text>{" "}
          <Text tag="span" variant="grey-light" weight={700} size={12}>
            (Optional)
          </Text>
        </>
      ),
      value: form?.message || "",
      color: "black",
      align: "row",
      weight: 400,
    },
  ];

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/app/be-network");
  };
  const handleConfirm = () => {
    navigate("/app/be-network/confirm");
  };
  return (
    <CardConfirm
      title="Review"
      data={data}
      className={`common__card ${styles.beNetwork_review}`}
      btnPrimary="back"
      btnSecondary="Confirm"
      onClickFirstBtn={handleBack}
      onClickSecondBtn={handleConfirm}
    />
  );
}
