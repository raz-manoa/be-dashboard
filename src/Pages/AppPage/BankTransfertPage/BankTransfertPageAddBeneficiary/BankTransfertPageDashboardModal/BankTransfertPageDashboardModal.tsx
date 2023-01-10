import CardConfirmItem, {
  CardModalItemProps,
} from "@/Components/Display/CardConfirm/CardConfirmItem";
import Modal, { ModalProps } from "antd/lib/modal";
import React from "react";
import { useBankTransfertPageContext } from "../../BankTransfertPageContext";
import styles from "./BankTransfertPageDashboardModal.module.scss";

interface BankTransfertPageDashboardProps extends ModalProps {}

export default function BankTransfertPageDashboardModal(
  props: BankTransfertPageDashboardProps
) {
  const { form } = useBankTransfertPageContext();
  const dataModal: CardModalItemProps[] =
    form && form.beneficiary
      ? [
          {
            label: "Recipient",
            value: form.beneficiary.name,
            color: "black",
          },

          {
            label: "Country",
            value: form.beneficiary.country,
            color: "black",
          },
          {
            label: "City",
            value: form.beneficiary.city_or_district,
            color: "black",
          },
          {
            label: "Adress",
            value: form.beneficiary.beneficiary_address,
            color: "black",
          },
          {
            label: "Bank Name",
            value: form.beneficiary.bank_name,
            color: "black",
          },
          {
            label: "Account Number",
            value: form.beneficiary.account_number,
            color: "black",
          },
          {
            label: "BIC/SWIFT Code",
            value: form.beneficiary.bic,
            color: "black",
          },
          {
            label: "IBAN",
            value: form.beneficiary.iban,
            color: "black",
          },
        ]
      : [];
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
