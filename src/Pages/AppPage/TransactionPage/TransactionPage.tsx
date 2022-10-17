import { FormCustom } from "@/Components/DataEntry/FormCustom";
import React from "react";
import SavingPageTable from "../SavingsPage/SavingPageDashboard/SavingPageTable/SavingPageTable";
import styles from "./TransactionPage.module.scss";
import TransactionPageHead from "./TransactionPageDashboard/TransactionPageHead/TransactionPageHead";
import TransactionPageTable from "./TransactionPageDashboard/TransactionPageTable/TransactionPageTable";

const TransactionPage = () => {
  return (
    <div className={styles.transaction__head}>
      <TransactionPageHead />
      <div>
        <TransactionPageTable />
      </div>
    </div>
  );
};

export default TransactionPage;
