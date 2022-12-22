import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import styles from "./CardAmount.module.scss";
import { useState } from "react";
import { SelectProps } from "antd/es/select";
import { Navigate, useNavigate } from "react-router-dom";

interface SelectData {
  id: string;
  userId: string;
  balance: number;
  lockBalance: number;
  currency: string;
  isDefaultCurrency: Boolean;
  createdAt: string;
  updatedAt: string;
}
interface Currency {
  from: string;
  to: string;
}
interface CardAmountProps {
  title: string;
  selectFrom: SelectData[];
  selectTo: SelectData[];
  currency?: Currency[];
  transactionFee: string;
  onSubmit?: () => void;
  path?: string;
}

export function CardAmount(props: CardAmountProps) {
  const {
    title,
    selectFrom,
    selectTo,
    currency,
    transactionFee = null,
    path = "review",
  } = props;

  const [form] = useForm<{}>();
  const [selectValue, setSelectValue] = useState<SelectData>();
  const navigate = useNavigate();

  const handleChange: SelectProps["onChange"] = (id) => {
    const selectedItem = selectFrom.find((item) => item.id === id);
    setSelectValue(selectedItem);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await form.validateFields();
    navigate(path);
  };

  return (
    <Card className="common__card">
      <Text tag="h2" type="h2" variant="black2">
        {title}
      </Text>
      <FormCustom form={form}>
        <div className="common__field-wrap">
          <FormCustom.Input
            name="from"
            label="From: "
            color="grey"
            type="number"
            className="common__field"
            placeholder="0.00"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
          <FormCustom.Select
            name="fromCurrency"
            placeholder="currency"
            onChange={handleChange}
            options={selectFrom.map((s) => ({
              label: s.currency,
              value: s.id,
            }))}
          />
        </div>
        <div className="common__field-wrap">
          <FormCustom.Input
            name="to"
            label="To : "
            color="grey"
            type="number"
            className="common__field"
            placeholder="0.00"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
          <FormCustom.Select
            name="toCurrency"
            placeholder="currency"
            options={selectTo.map((st) => ({
              label: st.currency,
              value: st.id,
              optionDisable: !!selectValue && selectValue.id === st.id,
            }))}
          />
        </div>
        {/* {balance && ( */}
        <div className={`${styles.exchange__txt} common__txt`}>
          {selectValue && (
            <Text type="p" tag="p" variant="grey">
              <strong>
                {selectValue.balance} {selectValue.currency}
              </strong>{" "}
              available to transfer
            </Text>
          )}
          {transactionFee && (
            <Text type="p" tag="p" variant="grey">
              Transaction fee <strong>{transactionFee}</strong>
            </Text>
          )}
        </div>
        {/* )} */}

        {currency?.map((c) => (
          <Text
            type="p"
            tag="p"
            variant="grey"
            weight={600}
            className="common__info"
          >
            {c.from} equals {c.to}
          </Text>
        ))}

        <Button type="primary" onClick={handleSubmit} className="common__btn">
          Continue
        </Button>
      </FormCustom>
    </Card>
  );
}
