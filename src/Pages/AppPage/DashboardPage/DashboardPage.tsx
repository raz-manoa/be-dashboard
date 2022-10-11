import React, { useEffect } from "react";
import Text from "@/Components/General/Text/Text";
import DashboardPageCurrentAccount from "./DashboardPageCurrentAccount";
import styles from "./DashboardPage.module.scss";
import DashboarPageSavingAccount from "./DashboarPageSavingAccount";
import DashboardPageTransaction from "./DashboardPageTransaction";
import { useAppLayoutContext } from "@/Layouts/AppLayout/AppLayoutContext";

const DashboardPage = () => {
  const { setHeaderTitle } = useAppLayoutContext();

  useEffect(() => {
    setHeaderTitle(
      <>
        <span>Welcome John</span>{" "}
        <Text tag="span" size={14} weight={400} variant="grey-light">
          (john@happydays.com)
        </Text>
      </>
    );
  }, []);
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
