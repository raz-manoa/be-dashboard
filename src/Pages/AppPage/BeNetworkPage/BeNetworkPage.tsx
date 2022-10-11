import { FormCustom } from "@/Components/DataEntry/FormCustom";
import SwitchToggle from "@/Components/DataEntry/SwitchToggle/SwitchToggle";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { Switch } from "antd";
import { useForm } from "antd/es/form/Form";
import styles from "./BeNetworkPage.module.scss";
import React, { useEffect } from "react";
import { useAppLayoutContext } from "@/Layouts/AppLayout/AppLayoutContext";

const BeNetworkPage = () => {
  const { setHeaderTitle } = useAppLayoutContext();

  useEffect(() => {
    setHeaderTitle("Be Network");
  }, []);
  const [form] = useForm();
  return (
    <Card className="common__card">
      <Text tag="h2" type="h2">
        Transfer Amount
      </Text>
      <FormCustom form={form}>
        <div className="common__field-wrap">
          <FormCustom.Input
            name="field to"
            placeholder="0.00"
            label="Leaving Account:"
            color="grey"
            type="number"
            className="common__field"
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
        <div className="common__txt">
          <Text type="p" tag="p" variant="grey">
            <strong>174.75 USD</strong> 174.75 USD available to transfer
          </Text>
          <Text type="p" tag="p" variant="grey">
            Transaction fee <strong>0 USD</strong>
          </Text>
          <Text type="p" tag="p" variant="grey">
            1 USD equals 1 USD
          </Text>
        </div>
        <div className={styles.switch__field}>
          <SwitchToggle
            label="By Phone Number"
            className={styles.switch__toggle}
          />
          <FormCustom.Input
            name="field to"
            placeholder="Mobile number"
            color="grey"
            type="number"
            className={styles.input__field}
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
        </div>
        <div className={styles.switch__field}>
          <SwitchToggle label="By BE ID" className={styles.switch__toggle} />
          <FormCustom.Input
            name="field to"
            placeholder="BE ID"
            color="grey"
            type="number"
            className={styles.input__field}
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
        </div>
        <FormCustom.TextArea
          className={styles.textarea}
          label="Message : "
          option="optional"
          placeholder="Messages..."
        />
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

export default BeNetworkPage;
