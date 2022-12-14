import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import React from "react";
import Card from "../Card/Card";
import styles from "./CardDisposit.module.scss";
interface CardDispositProps {
  money: string;
  placeholder: string;
  save: string;
  className?: string;
  btnLabel: string;
  onAction?(data?: any): void;
}
export default function CardDisposit(props: CardDispositProps) {
  const { money, placeholder, save, className, btnLabel, onAction } = props;
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
          name="example"
          placeholder={placeholder}
          color="grey"
          className={styles.card__input}
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
          onClick={() => {
            form.validateFields();
            onAction && onAction();
          }}
        >
          {btnLabel}
        </Button>
      </FormCustom>
    </Card>
  );
}
