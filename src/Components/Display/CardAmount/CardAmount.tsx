import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import styles from "./CardAmount.module.scss";
import { useEffect, useState } from "react";
import { SelectProps } from "antd/es/select";
import { ECurrency } from "@/Interfaces/Currency";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import { IRate } from "@/Interfaces/Rate";
import { FormInputProps } from "@/Components/DataEntry/FormInput/FormInput";

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
export interface ITransactionFree {
  value: number;
  currencyId: string;
  currency: ECurrency;
}

export interface ICardAmountForm {
  from: {
    value: number;
    currency: ECurrency;
  };
  to: {
    value: number;
    currency: ECurrency;
  };
  transactionFee?: ITransactionFree;
  rate?: IRate;
}
interface CardAmountProps {
  title: string;
  selectFrom: SelectData[];
  selectTo: SelectData[];
  transactionFee?: ITransactionFree;
  onSubmit?: (data: ICardAmountForm) => void;
  loading?: boolean;
  showRate?: boolean;
  allowSameCurrency?: boolean;
}

export const formatCardAmount = (
  key: "from" | "to" | "transactionFee",
  form: ICardAmountForm
): string => {
  const info = form[key];
  if (info) return `${info.value} ${info.currency}`;
  return "0";
};

export function CardAmount(props: CardAmountProps) {
  const {
    title,
    selectFrom,
    selectTo,
    transactionFee: defaultTransactionFee,
    showRate = false,
    allowSameCurrency = false,
    onSubmit,
  } = props;

  const [form] = useForm<ICardAmountForm>();
  const [selectValue, setSelectValue] = useState<SelectData>();
  const [transactionFee, setTransactionFee] = useState<
    ITransactionFree | undefined
  >(defaultTransactionFee);
  const [fromRate, setFromRate] = useState<IRate>();

  const findFirstAvailableTo = (
    excludes?: ECurrency[]
  ): SelectData | undefined => {
    const fieldValue = form.getFieldsValue();

    const fromItemCurrency =
      fieldValue.from.currency || selectFrom[0] ? selectFrom[0].currency : "";

    return selectTo.find(
      ({ currency }) =>
        !!allowSameCurrency ||
        (!!fromItemCurrency && currency !== fromItemCurrency && !excludes) ||
        (!!excludes && !excludes.includes(currency))
    );
  };

  const fetchRate = async () => {
    const fieldValue = form.getFieldsValue();
    // TODO: rates
    if (
      fieldValue.from.currency &&
      fieldValue.to.currency &&
      fieldValue.from.value
    ) {
      const companyId = localStorage.getItem("companyId") || "";

      const rates = await companyDataEndpoint.getRates(
        companyId,
        fieldValue.from.currency,
        fieldValue.to.currency,
        fieldValue.from.value
      );
      if (rates) {
        setFromRate(rates);

        // Update to.value
        form.setFields([
          {
            name: ["to", "value"],
            value: rates.destinationAmount,
          },
        ]);
      }
    }
  };

  const handleChange: SelectProps["onChange"] = (currency) => {
    const selectedItem = selectFrom.find((item) => item.currency === currency);
    setSelectValue(selectedItem);

    const formData = form.getFieldsValue();

    if (
      !allowSameCurrency &&
      selectedItem &&
      selectedItem.currency === formData.to.currency
    ) {
      const toItem = findFirstAvailableTo([selectedItem.currency]);

      form.setFields([
        {
          name: ["to", "currency"],
          value: toItem ? toItem.currency : null,
        },
      ]);
    }

    fetchRate();
  };
  const handleFromChange: FormInputProps["onChange"] = (e) => {
    const value = e.currentTarget.value;
    if (value) {
      if (allowSameCurrency) {
        const fieldValue = form.getFieldsValue();
        if (fieldValue.from.currency === fieldValue.to.currency) {
          form.setFields([
            {
              name: ["to", "value"],
              value: value,
            },
          ]);
        }
      }
      fetchRate();
    } else {
      form.setFields([
        {
          name: ["to", "value"],
          value: null,
        },
      ]);
    }
  };
  const handleToCurrencChange: SelectProps["onChange"] = (currency) => {
    const formData = form.getFieldsValue();
    const selectedItem = selectTo.find((item) => item.currency === currency);
    form.setFields([
      {
        name: ["to", "currency"],
        value: selectedItem ? selectedItem.currency : null,
      },
    ]);

    if (
      selectedItem &&
      selectedItem.currency === formData.from.currency &&
      formData.from.value
    ) {
      form.setFields([
        {
          name: ["to", "value"],
          value: formData.from.value,
        },
      ]);
    }

    fetchRate();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await form.validateFields();

    onSubmit &&
      onSubmit({
        ...data,
        transactionFee,
        rate: fromRate, // TODO: set rate here
      });
  };

  useEffect(() => {
    const fieldValue = form.getFieldsValue();

    if (!fieldValue.from.currency && selectFrom[0]) {
      form.setFields([
        {
          name: ["from", "currency"],
          value: selectFrom[0] && selectFrom[0].currency,
        },
      ]);
      setSelectValue(selectFrom[0]);
    }

    if (!fieldValue.to.currency) {
      const item = findFirstAvailableTo();
      form.setFields([
        {
          name: ["to", "currency"],
          value: item && item.currency,
        },
      ]);
    }
  }, [selectFrom, selectTo]);

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
            onChange={handleFromChange}
          />
          <FormCustom.Select
            name={["from", "currency"]}
            placeholder="currency"
            defaultValue={selectFrom[0] ? selectFrom[0].id : undefined}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
            onChange={handleChange}
            options={selectFrom.map((s) => ({
              label: s.currency,
              value: s.currency,
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
            name={["to", "currency"]}
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
              value: st.currency,
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
              Transaction fee{" "}
              <strong>
                {transactionFee.value} {transactionFee.currency}
              </strong>
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
