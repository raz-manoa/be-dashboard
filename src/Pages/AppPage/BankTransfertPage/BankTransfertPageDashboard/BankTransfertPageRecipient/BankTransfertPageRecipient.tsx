import Card from "@/Components/Display/Card/Card";
import styles from "./BankTransfertPageRecipient.module.scss";
import React from "react";
import Text from "@/Components/General/Text/Text";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { useForm } from "antd/es/form/Form";
import Button from "@/Components/General/Button/Button";
import { useNavigate } from "react-router-dom";
import Icon from "@/Components/General/Icon/Icon";

export default function BankTransfertPageRecipient() {
  const navigate = useNavigate();
  const [form] = useForm();
  return (
    <Card className={styles.card}>
      <div className={`${styles.card__header} mb-6`}>
        <Text tag="h2" type="h2">
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
            name="city or district"
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
            name="name"
            label="BIC/SWIFT Code:"
            placeholder="Code"
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
            label="IBAN:"
            placeholder="Code"
            color="grey"
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
            name="select"
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
            name="name"
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
            name="name"
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
            label="message : "
            option="optional"
            placeholder="messages"
            className="textarea"
          />
        </div>
        <div className={styles.btn__group}>
          <Button
            type="secondary"
            onClick={() => {
              form.validateFields();
              navigate("/app/bank-transfert");
            }}
          >
            Back
          </Button>
          <Button
            type="default"
            onClick={() => {
              form.validateFields();
              navigate("#");
            }}
          >
            ADD BENEFICIARY
          </Button>
          <Button
            type="primary"
            onClick={() => {
              form.validateFields();
              navigate("#");
            }}
          >
            Continue
          </Button>
        </div>
      </FormCustom>
    </Card>
  );
}
