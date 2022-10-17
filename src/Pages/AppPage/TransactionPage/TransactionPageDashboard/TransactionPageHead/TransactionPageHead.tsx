import { FormCustom } from "@/Components/DataEntry/FormCustom";
import styles from "./TransactionPageHead.module.scss";
import FormDatePicker from "@/Components/DataEntry/FormDatePicker/FormDatePicker";
import React from "react";
import { useForm } from "antd/es/form/Form";
import ButtonWithIcon from "@/Components/General/ButtonWithIcon/ButtonIcon";

export default function TransactionPageHead() {
  return (
    <div className={styles.transaction__head}>
      <FormCustom.SelectIcon
        name="select"
        icon="transactions"
        placeholder="Transaction type"
        className={styles.transaction__item}
        options={[
          {
            label: "Be Network",
            value: "Be Network",
          },
          {
            label: "Bank Transfer",
            value: "Be Network",
          },
        ]}
      />

      <FormDatePicker className={styles.transaction__item} />
      <FormCustom.InputIcon
        icon="user"
        placeholder="Name"
        className={styles.transaction__item}
      />
      <ButtonWithIcon icon="close" label="Clear Filters" />
    </div>
  );
}
