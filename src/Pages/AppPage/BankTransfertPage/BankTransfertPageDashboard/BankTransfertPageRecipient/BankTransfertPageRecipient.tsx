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
import { CardConfirmItemProps } from "@/Components/Display/CardConfirm/CardConfirm";
import CardConfirmItem from "@/Components/Display/CardConfirm/CardConfirmItem";

export default function BankTransfertPageRecipient() {
  const navigate = useNavigate();
  const [form] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataModal: CardConfirmItemProps[] = [
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
          <Button type="default" onClick={showModal}>
            ADD BENEFICIARY
          </Button>
          <Button
            type="primary"
            onClick={() => {
              form.validateFields();
              navigate({ pathname: "/app/bank-transfer/bank-review" });
            }}
          >
            Continue
          </Button>
        </div>
      </FormCustom>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Add Beneficiary"
        width={550}
        className={styles.modal}
      >
        {dataModal.map((d, id) => (
          <CardConfirmItem
            label={d.label}
            value={d.value}
            icon={d.icon}
            msg={d.msg}
            optional={d.optional}
            key={`d-${id}`}
          />
        ))}
      </Modal>
    </Card>
  );
}
