import CardConfirmItem, {
  CardModalItemProps,
} from "@/Components/Display/CardConfirm/CardConfirmItem";
import Modal, { ModalProps } from "antd/lib/modal";
import React from "react";
import styles from "./BankTransfertPageDashboardModal.module.scss";

const dataModal: CardModalItemProps[] = [
  {
    label: "Recipient",
    value: "John Smith",
    color: "black",
  },

  {
    label: "Country",
    value: "USA",
    color: "black",
  },
  {
    label: "City",
    value: "Washington",
    color: "black",
  },
  {
    label: "Adresse",
    value: "Street Address",
    color: "black",
  },
  {
    label: "Bank Name",
    value: "City Bank",
    color: "black",
  },
  {
    label: "Account Number",
    value: "000449876447656",
    color: "black",
  },
  {
    label: "BIC/SWIFT Code",
    value: "3003",
    color: "black",
  },
  {
    label: "IBAN",
    value: "876165318323290823132",
    color: "black",
  },
];

interface BankTransfertPageDashboardProps extends ModalProps {}

export default function BankTransfertPageDashboardModal(
  props: BankTransfertPageDashboardProps
) {
  return (
    <Modal
      title="Add Beneficiary"
      width={550}
      className={styles.modal}
      {...props}
    >
      {dataModal.map((d, id) => (
        <CardConfirmItem
          label={d.label}
          value={d.value}
          icon={d.icon}
          first={true}
          optional={d.optional}
          key={`d-${id}`}
          style={{ padding: "18px 15px" }}
        />
      ))}
    </Modal>
  );
}
