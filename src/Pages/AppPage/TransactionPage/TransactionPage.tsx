import { FormCustom } from "@/Components/DataEntry/FormCustom";
import React from "react";
import styles from "./TransactionPage.module.scss";

const TransactionPage = () => {
  return (
    <div className={styles.transaction__head}>
      <FormCustom.SelectIcon
        name="select"
        icon="transactions"
        placeholder="Transaction type"
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
    </div>
  );
};

export default TransactionPage;
