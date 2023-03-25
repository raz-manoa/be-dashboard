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
    value: "bebanktransfer",
  },
  { label: "QR Payment", value: "qrtransfer" },
  { label: "Bank Transfer", value: "otherbanktransfer" },
  { label: "Top Up", value: "wiretransfer" },
  { label: "Savings", value: "saving" },
  { label: "Funds withdraw", value: "fundswithdraw" },
  { label: "Crypto Exchange", value: "crypto-exchange" },
  { label: "FX", value: "exchange" },
];
export default function TransactionPageHead() {
  const [form] = useForm();
  return (
    <FormCustom form={form}>
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
    </FormCustom>
  );
}
