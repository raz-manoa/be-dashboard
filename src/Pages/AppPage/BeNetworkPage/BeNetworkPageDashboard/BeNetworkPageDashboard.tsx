import { FormCustom } from "@/Components/DataEntry/FormCustom";
import SwitchToggle from "@/Components/DataEntry/SwitchToggle/SwitchToggle";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { Switch } from "antd";
import { useForm } from "antd/es/form/Form";
import styles from "./BeNetworkPageDashboard.module.scss";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import Alert from "antd/es/alert";
import { useState } from "react";
import { DefaultOptionType } from "antd/es/select";
const optionsData = [
  { label: "US Dollar (USD)", value: "USD" },
  { label: "Euro (EUR)", value: "EUR" },
  { label: "Pound Sterling (GPB)", value: "GPB" },
  { label: "Canadian Dollar (CAD)", value: "CAD" },
  { label: "South African Rand (ZAR)", value: "ZAR" },
  { label: "Kenyan Shilling (KES)", value: "KES" },
  { label: "Ugandan Shilling (UGX)", value: "UGX" },
  { label: "Tanzanian Shilling (TZS)", value: "TZS" },
  { label: "Malawian Kwacha (MWK)", value: "MWK" },
];
const BeNetworkPageDashboard = () => {
  const navigate = useNavigate();
  const [currentPhone, setCurrentPhone] = useState(false);
  const [currentBeId, setCurrentBeId] = useState(false);

  useSetAppLayoutTitle("Be Network");

  const [form] = useForm();

  const handleContinue = () => {
    form.validateFields();
    navigate("review");
  };

  return (
    <Card className="common__card">
      <Text tag="h2" type="h2">
        Transfer Amount
      </Text>
      <FormCustom form={form}>
        <div className={`${styles.select__field} common__field-wrap`}>
          <FormCustom.Input
            name="account_number"
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
            name="currency"
            placeholder="USD"
            options={optionsData}
            optionLabelProp="value"
            dropdownMatchSelectWidth={false}
          />
        </div>
        <div className="common__txt">
          <Text type="p" tag="p" variant="grey">
            <strong>174.75 USD</strong> available to transfer
          </Text>
          <Text type="p" tag="p" variant="grey">
            Transaction fee <strong>0 USD</strong>
          </Text>
          <Text type="p" tag="p" variant="grey">
            1 USD equals 1 USD
          </Text>
        </div>
        <div className={styles.switch__field}>
          <FormCustom.Switch
            label="By Phone Number"
            className={styles.switch__toggle}
            name="phone"
            onChange={setCurrentPhone}
          />
          <FormCustom.Input
            name="mobile_number"
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
            disabled={!currentPhone}
          />
        </div>
        <div className={styles.switch__field}>
          <FormCustom.Switch
            label="By BE ID"
            name="beid"
            className={styles.switch__toggle}
            onChange={setCurrentBeId}
          />
          <FormCustom.Input
            name="be_id"
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
            disabled={!currentBeId}
          />
        </div>
        <FormCustom.TextArea
          name="message"
          className={styles.textarea}
          label="Message : "
          option="Optional"
          placeholder="Messages..."
          rules={[
            {
              required: true,
              message: "Ce champ est requis",
            },
          ]}
        />
        <Alert message="The BE ID entered is incorrect." type="error" />

        <Button type="primary" onClick={handleContinue} className="common__btn">
          Continue
        </Button>
      </FormCustom>
    </Card>
  );
};

export default BeNetworkPageDashboard;
