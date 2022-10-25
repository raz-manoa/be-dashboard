import styles from "./TransactionPage.module.scss";
import TransactionPageHead from "./TransactionPageDashboard/TransactionPageHead/TransactionPageHead";
import TransactionPageTable from "./TransactionPageDashboard/TransactionPageTable/TransactionPageTable";

const TransactionPage = () => {
  return (
    <div className={styles.transaction__head}>
      <TransactionPageHead />
      <div className={styles.table}>
        <TransactionPageTable />
      </div>
    </div>
  );
};

export default TransactionPage;
