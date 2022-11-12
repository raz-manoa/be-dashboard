import Text from "@/Components/General/Text/Text";
import DashboardPageCurrentAccount from "./DashboardPageCurrentAccount/DashboardPageCurrentAccount";
import styles from "./DashboardPage.module.scss";
import DashboarPageSavingAccount from "./DashboarPageSavingAccount/DashboarPageSavingAccount";
import DashboardPageTransaction from "./DashboardPageTransaction";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import React, {useEffect, useState} from 'react'
import {ITransaction} from "@/Interfaces/Transaction";
import api from "@/Api/api";
import {IAccount} from "@/Interfaces/Account";
import {ISaving} from "@/Pages/AppPage/DashboardPage/DashboarPageSavingAccount/SavingCard/SavingCard";

const DashboardPage = () => {
    const [accounts, setAccounts] = useState<IAccount[]>([]);
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    const [savings, setSavings] = useState<ISaving[]>([]);

    useEffect(() => {
        async function getInfo() {
            const companyId = localStorage.getItem('companyId');
            // @ts-ignore
            api.companyData.getAccounts(companyId).then(data => setAccounts(data));
            // @ts-ignore
            api.companyData.getTransactions(companyId).then(data => setTransactions(data));
            // @ts-ignore
            api.companyData.getSavings(companyId).then(data => setSavings(data));
        }
        getInfo();
    },[]);

    useSetAppLayoutTitle(
    <>
      <span>{`Welcome ${localStorage.getItem('fullName')}`}</span>{" "}
      <Text tag="span" size={14} weight={400} variant="grey-light">
          {localStorage.getItem('email')}
      </Text>
    </>
  );

    return (
    <div className={styles.dashboard}>
        {accounts && accounts.length > 0 && <DashboardPageCurrentAccount accounts={accounts}/>}
      <div className={styles.dashboardRight}>
          {savings && savings.length > 0 && <DashboarPageSavingAccount savings={savings} />}
          {transactions && transactions.length > 0 && <DashboardPageTransaction transactions={transactions}/>}
      </div>
    </div>
  );
};

export default DashboardPage;
