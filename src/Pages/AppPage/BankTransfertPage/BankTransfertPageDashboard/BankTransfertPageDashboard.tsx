import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import styles from "./BankTransfertPageDashboard.module.scss";

const BankTransfertPageDashboard = () => {
  useSetAppLayoutTitle("Bank Transfer");
  const [form] = useForm();
  const navigate = useNavigate();

  return (
    <Card className="common__card">
      <Text tag="h2" type="h2">
        Transfer Amount
      </Text>
      <FormCustom form={form}>
        <div className={`${styles.select} common__field-wrap`}>
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
        <div className={`${styles.select} common__field-wrap`}>
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
            navigate("add-beneficiary");
          }}
          className="common__btn"
        >
          Continuer
        </Button>
      </FormCustom>
    </Card>
  );
};

export default BankTransfertPageDashboard;
