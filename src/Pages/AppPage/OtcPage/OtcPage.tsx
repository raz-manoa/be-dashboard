import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import React, { useEffect } from "react";
import { useAppLayoutContext } from "@/Layouts/AppLayout/AppLayoutContext";

const OtcPage = () => {
  const { setHeaderTitle } = useAppLayoutContext();
  const [form] = useForm();
  useEffect(() => {
    setHeaderTitle("OTC");
  });

  return (
    <Card className="common__card">
      <Text tag="h2" type="h2">
        Amount
      </Text>
      <FormCustom form={form}>
        <div className="common__field-wrap">
          <FormCustom.Input
            name="field from"
            label="From : "
            color="grey"
            type="number"
            className="common__field"
            placeholder="0.00"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.Select
            name="select money"
            placeholder="USD"
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
        <div className="common__field-wrap">
          <FormCustom.Input
            name="field to"
            label="To : "
            color="grey"
            type="number"
            className="common__field"
            placeholder="0.00"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.Select
            name="select"
            placeholder="USD"
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
        <div className="common__txt">
          <Text type="p" tag="p" variant="grey">
            <strong>174.75 USD</strong> 174.75 USD available to transfer
          </Text>
          <Text type="p" tag="p" variant="grey">
            Transaction fee <strong>0 USD</strong>
          </Text>
        </div>
        <Text type="p" tag="p" variant="grey" className="common__info">
          1 USDC equals 1 USD
        </Text>
        <Text type="p" tag="p" variant="grey" className="common__info">
          1 USD equals 1 USDC
        </Text>
        <Button
          type="primary"
          onClick={() => {
            form.validateFields();
          }}
          className="common__btn"
        >
          Continuer
        </Button>
      </FormCustom>
    </Card>
  );
};

export default OtcPage;
