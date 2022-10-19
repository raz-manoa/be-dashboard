import Card from "@/Components/Display/Card/Card";
import styles from "./BankTransfertPageRecipient.module.scss";
import React, { useState } from "react";
import Text from "@/Components/General/Text/Text";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { useForm } from "antd/es/form/Form";
import Button from "@/Components/General/Button/Button";
import { useNavigate } from "react-router-dom";
import Icon from "@/Components/General/Icon/Icon";
import Modal from "antd/lib/modal";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import CardConfirmItem from "@/Components/Display/CardConfirm/CardConfirmItem";
import BankTransfertPageDashboardModal from "../BankTransfertPageDashboardModal/BankTransfertPageDashboardModal";

interface BankTransfertPageRecipientProps {
  onAddBeneficiary?(e: React.MouseEvent): void;
  overlay: boolean;
}

export default function BankTransfertPageRecipient(
  props: BankTransfertPageRecipientProps
) {
  const { onAddBeneficiary, overlay } = props;

  const navigate = useNavigate();
  const [form] = useForm();

  return (
    <Card className={`${styles.card} modal ${overlay ? styles.overlay : ""}`}>
      <div className={`${styles.card__header} mb-6`}>
        <Text tag="h2" type="h2" variant="black2">
          Recipient
        </Text>
        <div className={styles.search}>
          <Icon icon="search" color="red" />
          <input type="text" placeholder="Search Beneficiary" />
        </div>
      </div>
      <FormCustom form={form} className={styles.card__field}>
        <div>
          <FormCustom.Input
            name="name"
            label="Beneficiary Name:"
            placeholder="Name"
            color="grey"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.Input
            name="city_or_district"
            label="Beneficiary City or District:"
            placeholder="City/District Name"
            color="grey"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.Input
            name="name"
            label="Bank Name:"
            placeholder="Bank"
            color="grey"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.Input
            name="bic"
            label="BIC/SWIFT Code:"
            placeholder="Code"
            color="grey"
            type="number"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.Input
            name="iban"
            label="IBAN:"
            placeholder="Code"
            color="grey"
            type="number"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
        </div>
        <div>
          <FormCustom.Select
            className={styles.select}
            label="Beneficiary Country:"
            name="country"
            placeholder="Select"
            options={[
              {
                label: "USDC",
                value: "usdc",
              },
              {
                label: "EUR",
                value: "eur",
              },
            ]}
          />
          <FormCustom.Input
            name="beneficiary_address"
            label="Beneficiary Address:"
            placeholder="Street Address"
            color="grey"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.Input
            name="account_number"
            label="Account Number:"
            placeholder="Number"
            color="grey"
            type="number"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.TextArea
            name="message"
            label="message : "
            option="optional"
            placeholder="messages"
            className="textarea"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
        </div>
        <div className={styles.btn__group}>
          <Button
            type="secondary"
            onClick={() => {
              form.validateFields();
              navigate({ pathname: "/app/bank-transfer" });
            }}
          >
            Back
          </Button>
          <Button type="default" onClick={onAddBeneficiary}>
            ADD BENEFICIARY
          </Button>
          <Button
            type="primary"
            onClick={() => {
              form.validateFields();
              navigate({ pathname: "/app/bank-transfer/review" });
            }}
          >
            Continue
          </Button>
        </div>
      </FormCustom>
    </Card>
  );
}
