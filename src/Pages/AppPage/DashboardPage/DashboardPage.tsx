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
    const [fullName, setFullname] = useState('');

    useEffect(() => {
        async function getInfo() {
            const companyId = localStorage.getItem('companyId');
            const company = localStorage.getItem('company');
            // @ts-ignore
            const info = JSON.parse(company);
            setFullname(info.firstName + ' ' + info.lastName);
            // @ts-ignore
            const data = await api.companyData.getAccounts(companyId);
            // @ts-ignore
            const data1 = await api.companyData.getTransactions(companyId);
            // @ts-ignore
            const data2 = await api.companyData.getSavings(companyId);
            // @ts-ignore
            setAccounts(data);
            setTransactions(data1);
            setSavings(data2);
        }
        getInfo();
    },[]);

    useSetAppLayoutTitle(
    <>
      <span>{`Welcome ${fullName}`}</span>{" "}
      <Text tag="span" size={14} weight={400} variant="grey-light">
        (john@happydays.com)
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
