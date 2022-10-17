import { FormCustom } from "@/Components/DataEntry/FormCustom";
import React from "react";
import styles from "./TransactionPage.module.scss";
import TransactionPageHead from "./TransactionPageDashboard/TransactionPageHead/TransactionPageHead";

const TransactionPage = () => {
  return (
    <div className={styles.transaction__head}>
      <TransactionPageHead />
    </div>
  );
};

export default TransactionPage;
