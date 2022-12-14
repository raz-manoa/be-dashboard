import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import styles from "./ForeignExchangePageDasboard.module.scss";
import { useNavigate } from "react-router-dom";

const ForeignExchangePageDashboard = () => {
  useSetAppLayoutTitle("Foreign Exchange (FX)");

  const [form] = useForm();
  const navigate = useNavigate();
  return (
    <Card className="common__card">
      <Text tag="h2" type="h2" variant="black2">
        Exchange Amount
      </Text>
      <FormCustom form={form}>
        <div className={`${styles.select__field} common__field-wrap`}>
          <FormCustom.Input
            name="field from"
            label="From: "
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
        <div className={`common__field-wrap`}>
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
            <strong>174.75 USD</strong> available to transfer
          </Text>
          <Text type="p" tag="p" variant="grey">
            Transaction fee <strong>0 USD</strong>
          </Text>
        </div>
        <Button
          type="primary"
          onClick={() => {
            form.validateFields();
            navigate({
              pathname: "review",
            });
          }}
          className="common__btn"
        >
          Continue
        </Button>
      </FormCustom>
    </Card>
  );
};

export default ForeignExchangePageDashboard;
