import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import React from "react";
import Card from "../Card/Card";
import styles from "./CardDisposit.module.scss";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
interface CardDispositProps {
  money: string;
  placeholder: string;
  save: string;
  className?: string;
  currency: string;
  btnLabel: string;
  onAction?(data?: any): void;
}
export default function CardDisposit(props: CardDispositProps) {
  const { money, placeholder, currency, save, className, btnLabel, onAction } =
    props;
  let amount = 0;
  const companyId = localStorage.getItem("companyId") || "";
  const [form] = useForm();
  return (
    <Card className={`${styles.card} common__info_card ${className}`}>
      <div className={styles.card__header}>
        <Text type="span" tag="span" variant="grey" className={styles.txt}>
          {save}
        </Text>
        <Text type="span" tag="span" variant="grey" className={styles.txt}>
          Available to transfer:
          <strong>{money}</strong>
        </Text>
      </div>
      <FormCustom form={form} className={styles.card__field}>
        <FormCustom.Input
          type="number"
          name="value"
          placeholder={placeholder}
          color="grey"
          className={styles.card__input}
          onInput={(event) => {
            // @ts-ignore
            console.log(event.target.value);
            // @ts-ignore
            amount = event.target.value;
          }}
          rules={[
            {
              required: true,
              message: "Ce champ est requis",
            },
          ]}
        />
        <Button
          type="primary"
          className={styles.card__btn}
          onClick={async () => {
            const formData = await form.validateFields();

            form.validateFields();
            /* setCurrency(currency);
            setAmount(amount); */
            // console.log(amount, currency);
            try {
              await companyDataEndpoint.addSavings(companyId, {
                currency,
                amount,
              });
              onAction && onAction({ amount, currency, ...formData });
            } catch (e) {
              console.log(e);
            }
          }}
        >
          {btnLabel}
        </Button>
      </FormCustom>
    </Card>
  );
}
