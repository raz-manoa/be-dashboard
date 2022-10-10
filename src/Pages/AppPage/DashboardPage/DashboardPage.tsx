import React from "react";
import Text from "@/Components/General/Text/Text";
import DashboardPageCurrentAccount from "./DashboardPageCurrentAccount";
import styles from "./DashboardPage.module.scss";
import DashboarPageSavingAccount from "./DashboarPageSavingAccount";
import DashboardPageTransaction from "./DashboardPageTransaction";

const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <DashboardPageCurrentAccount />
      <div className={styles.dashboardRight}>
        <DashboarPageSavingAccount />
        <DashboardPageTransaction />
      </div>
    </div>
  );
};

export default DashboardPage;
