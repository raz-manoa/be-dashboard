import CardDisposit from "@/Components/Display/CardDisposit/CardDisposit";
import Text from "@/Components/General/Text/Text";
import styles from "./SavingPageAdd.module.scss";
import { Tabs, TabsProps } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISaving } from "@/Pages/AppPage/DashboardPage/DashboardPageSavingAccount/SavingCard/SavingCard";
import { IAccount } from "@/Interfaces/Account";
import { currencyParser } from "@/Utils/currencyParser";
import axios from "axios";
import apiInstance from "@/Api/apiInstance";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import { useSavingPageContext } from "../../SavingPageContext";
import { ECurrency } from "@/Interfaces/Currency";

export default function SavingPageAdd(props: {
  savings: ISaving[];
  accounts: IAccount[];
}) {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState<any>(null);
  const [amount, setAmount] = useState<number>(0);
  const { savings, accounts } = props;
  const { setForm } = useSavingPageContext();
  // const [usdAccount, setUsdAccount] = useState<IAccount>(null);
  // const [eurAccount, setEurAccount] = useState<IAccount>(null);

  const usdSaving = savings.find((item) => item.currency.id === "USD");
  const eurSaving = savings.find((item) => item.currency.id === "EUR");
  const usdAccount = accounts.find((item) => item.currency === "USD");
  const eurAccount = accounts.find((item) => item.currency === "EUR");

  const tabItems: TabsProps["items"] = [
    {
      label: "Deposit",
      key: "1",
      children: (
        <>
          <CardDisposit
            save="USD Savings"
            placeholder="0.0 USD"
            money={`${currencyParser(usdAccount?.balance)} USD`}
            btnLabel="Deposit"
            className={styles.card}
            currency={ECurrency.USD}
            onAction={(data) => {
              if (setForm) {
                setForm({
                  type: "deposit",
                  currency: ECurrency.USD,
                  ...data,
                });
              }
              navigate({
                pathname: "review-deposit",
              });
            }}
          />
          <CardDisposit
            save="EUR Savings"
            placeholder="0.0 EUR"
            money={`${currencyParser(eurAccount?.balance)} EUR`}
            btnLabel="Deposit"
            currency={ECurrency.EUR}
            className={styles.card}
            onAction={(data) => {
              if (setForm) {
                setForm({
                  type: "deposit",
                  currency: ECurrency.EUR,
                  ...data,
                });
              }
              navigate({
                pathname: "review-deposit",
              });
            }}
          />
        </>
      ),
    },
    {
      label: "Withdraw",
      key: "2",
      children: (
        <>
          <CardDisposit
            save="USD Savings"
            placeholder="0.0 USD"
            money={`${currencyParser(usdSaving?.amount)} USD`}
            className={styles.card}
            currency={ECurrency.USD}
            btnLabel="Withdraw"
            onAction={(data) => {
              if (setForm) {
                setForm({
                  type: "withdraw",
                  currency: ECurrency.USD,
                  ...data,
                });
              }
              navigate({
                pathname: "review-withdrawal",
              });
            }}
          />
          <CardDisposit
            save="EUR Savings"
            placeholder="0.0 EUR"
            money={`${currencyParser(eurSaving?.amount)} EUR`}
            currency={ECurrency.EUR}
            className={styles.card}
            btnLabel="Withdraw"
            onAction={(data) => {
              if (setForm) {
                setForm({
                  type: "withdraw",
                  currency: ECurrency.USD,
                  ...data,
                });
              }
              navigate({
                pathname: "review-withdrawal",
              });
            }}
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <Text
        type="h2"
        tag="h2"
        variant="black2"
        style={{ lineHeight: "normal" }}
        className={styles.card__title}
      >
        Add/Withdraw Funds
      </Text>
      {tabItems && <Tabs defaultActiveKey="1" items={tabItems} />}
    </div>
  );
}
