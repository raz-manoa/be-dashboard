import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import styles from "./CardAmount.module.scss";
import { useState } from "react";
import { SelectProps } from "antd/es/select";
import { ECurrency } from "@/Interfaces/Currency";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import { IRate } from "@/Interfaces/Rate";

interface SelectData {
  id: string;
  userId: string;
  balance: number;
  lockBalance: number;
  currency: ECurrency;
  isDefaultCurrency: Boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ICartAmountForm {
  from: {
    value: number;
    currencyId: string;
  };
  to: {
    value: number;
    currencyId: string;
  };
}
interface CardAmountProps {
  title: string;
  selectFrom: SelectData[];
  selectTo: SelectData[];
  transactionFee: string;
  onSubmit?: (data: ICartAmountForm) => void;
  loading?: boolean;
  showRate?: boolean;
  allowSameCurrency?: boolean;
}

export function CardAmount(props: CardAmountProps) {
  const {
    title,
    selectFrom,
    selectTo,
    transactionFee = null,
    showRate = false,
    allowSameCurrency = false,
    onSubmit,
  } = props;

  const [form] = useForm<ICartAmountForm>();
  const [selectValue, setSelectValue] = useState<SelectData>();
  const [fromRate, setFromRate] = useState<IRate>();

  const fetchRate = async () => {
    const fieldValue = form.getFieldsValue();
    // TODO: rates
    const rates = await companyDataEndpoint.mocks.getRates(
      "",
      fieldValue.from.currencyId,
      fieldValue.to.currencyId,
      fieldValue.from.value
    );
    if (rates) {
      setFromRate(rates);
    }
  };

  const handleChange: SelectProps["onChange"] = (id) => {
    const selectedItem = selectFrom.find((item) => item.id === id);
    setSelectValue(selectedItem);

    const formData = form.getFieldsValue();

    if (
      !allowSameCurrency &&
      selectedItem &&
      selectedItem.id === formData.to.currencyId
    ) {
      form.setFields([
        {
          name: ["to", "currencyId"],
          value: null,
        },
      ]);
    }

    if (showRate) {
      fetchRate();
    }
  };
  const handleToCurrencChange: SelectProps["onChange"] = () => {
    if (showRate) {
      fetchRate();
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await form.validateFields();
    onSubmit && onSubmit(data);
  };

  // TODO: handle loading props
  return (
    <Card className="common__card">
      <Text tag="h2" type="h2" variant="black2">
        {title}
      </Text>
      <FormCustom form={form}>
        <div className="common__field-wrap">
          <FormCustom.Input
            name={["from", "value"]}
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
              {
                validator: (rule, value, callback) => {
                  const data = parseFloat(value) || 0;
                  if (selectValue && data > selectValue.balance) {
                    callback("The amount is not available");
                  }
                  callback();
                },
              },
            ]}
          />
          <FormCustom.Select
            name={["from", "currencyId"]}
            placeholder="currency"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
            onChange={handleChange}
            options={selectFrom.map((s) => ({
              label: s.currency,
              value: s.id,
            }))}
          />
        </div>
        <div className="common__field-wrap">
          <FormCustom.Input
            name={["to", "value"]}
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
            name={["to", "currencyId"]}
            placeholder="currency"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
            onChange={handleToCurrencChange}
            options={selectTo.map((st) => ({
              label: st.currency,
              value: st.id,
              optionDisable:
                !allowSameCurrency && !!selectValue && selectValue.id === st.id,
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

        {fromRate && (
          <Text
            type="p"
            tag="p"
            variant="grey"
            weight={600}
            className="common__info"
          >
            <>
              {fromRate.directRate?.amountFrom?.value}{" "}
              {fromRate.directRate?.amountFrom?.currency?.sign} equals{" "}
              {fromRate.directRate?.amountTo?.value}{" "}
              {fromRate.directRate?.amountTo?.currency.sign}
            </>
          </Text>
        )}

        <Button type="primary" onClick={handleSubmit} className="common__btn">
          Continue
        </Button>
      </FormCustom>
    </Card>
  );
}
