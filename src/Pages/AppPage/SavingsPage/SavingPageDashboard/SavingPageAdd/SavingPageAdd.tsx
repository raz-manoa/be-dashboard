import CardDisposit from "@/Components/Display/CardDisposit/CardDisposit";
import Text from "@/Components/General/Text/Text";
import styles from "./SavingPageAdd.module.scss";
import { Tabs, TabsProps } from "antd";
import React from "react";
import SavingPageSucess from "../../SavingPageSucess/SavingPageSucess";
import { useNavigate } from "react-router-dom";

export default function SavingPageAdd() {
  const navigate = useNavigate();

  const tabItems: TabsProps["items"] = [
    {
      label: "Deposit",
      key: "1",
      children: (
        <>
          <CardDisposit
            save="USD Savings"
            placeholder="0.0 USD"
            money="564.00 USD"
            btnLabel="Deposit"
            className={styles.card}
            onAction={() =>
              navigate({
                pathname: "review",
              })
            }
          />
          <CardDisposit
            save="EUR Savings"
            placeholder="0.0 EUR"
            money="0.00 EUR"
            btnLabel="Deposit"
            className={styles.card}
            onAction={() =>
              navigate({
                pathname: "review",
              })
            }
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
            placeholder="200.0 USD"
            money="564.00 USD"
            className={styles.card}
            btnLabel="Withdraw"
            onAction={() =>
              navigate({
                pathname: "review",
              })
            }
          />
          <CardDisposit
            save="EUR Savings"
            placeholder="200.0 EUR"
            money="0.00 EUR"
            className={styles.card}
            btnLabel="Withdraw"
            onAction={() =>
              navigate({
                pathname: "review",
              })
            }
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <Text type="h2" tag="h2" variant="black2" className={styles.card__title}>
        Add/Withdraw Funds
      </Text>
      <Tabs defaultActiveKey="1" items={tabItems} />
    </div>
  );
}
