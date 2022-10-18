import { FormCustom } from "@/Components/DataEntry/FormCustom";
import styles from "./TransactionPageHead.module.scss";
import FormDatePicker from "@/Components/DataEntry/FormDatePicker/FormDatePicker";
import React from "react";
import { useForm } from "antd/es/form/Form";
import ButtonWithIcon from "@/Components/General/ButtonWithIcon/ButtonIcon";
import Icon from "@/Components/General/Icon/Icon";
const optionSelect = [
  {
    label: "Be Network",
    value: "Be Network",
  },
  { label: "QR Payment", value: "QR Payment" },
  { label: "Bank Transfer", value: "Bank Transfer" },
  { label: "Top Up", value: "Top Up" },
  { label: "Add Savings", value: "Add Savings" },
  { label: "Withdraw Savings", value: "Withdraw Savings" },
  { label: "Add Crypto", value: "Add Crypto" },
  { label: "Withdraw Crypto", value: "Withdraw Crypto" },
  { label: "OTC", value: "OTC" },
  { label: "Crypto Exchange", value: "Crypto Exchange" },
  { label: "FX", value: "FX" },
];
export default function TransactionPageHead() {
  return (
    <div className={styles.transaction__head}>
      <div className={styles.transaction__button}>
        <FormCustom.SelectIcon
          name="select"
          icon="transactions"
          placeholder="Transaction type"
          className={styles.transaction__item}
          options={optionSelect}
        />

        <FormDatePicker
          className={`${styles.transaction__item} ${styles.transaction__date}`}
        />
        <FormCustom.InputIcon
          icon="user"
          placeholder="Name"
          className={`${styles.transaction__item} ${styles.transaction__name}`}
        />
        <ButtonWithIcon
          icon="close"
          label="Clear Filters"
          className={`${styles.transaction__item}`}
        />
      </div>
      <div className={styles.export}>
        <ButtonWithIcon label="Export" className={styles.transaction__item} />
        <button className={styles.icon__relaod}>
          <Icon icon="resfresh" color="white" />
        </button>
      </div>
    </div>
  );
}
