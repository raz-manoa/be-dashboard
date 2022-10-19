import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import Text from "@/Components/General/Text/Text";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";
import { useNavigate } from "react-router-dom";

const data: CardModalItemProps[] = [
  {
    label: (
      <Text tag="span" variant="grey" weight={700} size={12}>
        Amount
      </Text>
    ),
    value: "+454.00 CHF",
    color: "red",
    weight: 400,
  },
  {
    label: (
      <Text tag="span" variant="grey" weight={700} size={12}>
        Transaction Fee
      </Text>
    ),
    value: "0.00 USD",
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
        YR Main
      </Text>
    ),
    extra: (
      <Text tag="div" variant="grey-light" weight={700} size={12}>
        +380930874852
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
    value: "May 17, 2022",
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
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "black",
    align: "row",
    weight: 400,
  },
];

export default function BeNetworkPageReview() {
  useSetAppLayoutTitle("Be Network");

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
      className="common__card"
      btnPrimary="back"
      btnSecondary="Confirm"
      onClickFirstBtn={handleBack}
      onClickSecondBtn={handleConfirm}
    />
  );
}
