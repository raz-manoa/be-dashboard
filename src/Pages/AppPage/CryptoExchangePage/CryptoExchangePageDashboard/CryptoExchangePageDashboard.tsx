import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import styles from "./CryptoExchangePageDashboard.module.scss";

const CryptoExchangePageDashboard = () => {
  useSetAppLayoutTitle("Crypto Exchange");
  const [form] = useForm();
  const navigate = useNavigate();

  return (
    <Card className="common__card">
      <Text tag="h2" type="h2">
        Amount
      </Text>
      <FormCustom form={form}>
        <div className="common__field-wrap">
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
            placeholder="SOL"
            options={[
              {
                label: "SOL",
                value: "sol",
              },
              {
                label: "ETH",
                value: "eth",
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
            placeholder="BTC"
            options={[
              {
                label: "BTC",
                value: "btc",
              },
              {
                label: "ETH",
                value: "eth",
              },
            ]}
          />
        </div>
        <div className={`${styles.exchange__txt} common__txt`}>
          <Text type="p" tag="p" variant="grey">
            <strong>174.75 SOL</strong> available to transfer
          </Text>
          <Text type="p" tag="p" variant="grey">
            Transaction fee <strong>0 USD</strong>
          </Text>
        </div>
        <Text
          type="p"
          tag="p"
          variant="grey"
          weight={600}
          className="common__info"
        >
          1 USDC equals 1 SOL
        </Text>
        <Text
          type="p"
          tag="p"
          variant="grey"
          weight={600}
          className="common__info"
        >
          1 USD equals 1 BTC
        </Text>
        <Button
          type="primary"
          onClick={() => {
            form.validateFields();
            navigate("review");
          }}
          className="common__btn"
        >
          Continue
        </Button>
      </FormCustom>
    </Card>
  );
};

export default CryptoExchangePageDashboard;
