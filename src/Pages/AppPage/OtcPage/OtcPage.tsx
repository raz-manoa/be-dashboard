import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import styles from "./Otcpage.module.scss";
import React from "react";

const OtcPage = () => {
  const [form] = useForm();

  return (
    <Card className={styles.otc__card}>
      <Text tag="h2" type="h2">
        Amount
      </Text>
      <FormCustom form={form}>
        <div className={styles.field__wrap}>
          <FormCustom.Input
            name="field from"
            label="From : "
            color="grey"
            type="number"
            className={styles.field}
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.Select
            name="select money"
            options={[
              {
                label: "USD",
                value: "usd",
              },
              {
                label: "EUR",
                value: "eur",
              },
            ]}
          />
        </div>
        <div className={styles.field__wrap}>
          <FormCustom.Input
            name="field to"
            label="To : "
            color="grey"
            type="number"
            className={styles.field}
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.Select
            name="select"
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
        </div>
        <Text type="p" tag="p" variant="grey" className={styles.otc__txt}>
          <strong>174.75 USD</strong> 174.75 USD available to transfer
          Transaction fee <strong>0 USD</strong>
        </Text>
        <Text type="p" tag="p" variant="grey" className={styles.otc__info}>
          1 USDC equals 1 USD
        </Text>
        <Text type="p" tag="p" variant="grey" className={styles.otc__info}>
          1 USD equals 1 USDC
        </Text>
        <Button
          type="primary"
          onClick={() => {
            form.validateFields();
          }}
        >
          Continuer
        </Button>
      </FormCustom>
    </Card>
  );
};

export default OtcPage;
