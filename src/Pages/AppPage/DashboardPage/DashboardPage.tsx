import Card from "@/Components/Display/Card/Card";
import CardSave, {
  CardSaveProps,
} from "@/Components/Display/CardSave/CardSave";
import CurrentCardList, {
  CurrentCardListProps,
} from "@/Components/Display/CurrentCardList/CurrentCardList";
import Text from "@/Components/General/Text/Text";
import React from "react";
import styles from "./DashboardPage.module.scss";

const tmpData: CurrentCardListProps[] = [
  {
    country: "/images/Flags/malawi.svg",
    currency: "US Dollar (USD)",
    value: "150.00",
    convertValue: "USD 403.33",
  },
  {
    country: "/images/Flags/canada.svg",
    currency: "US Dollar (USD)",
    value: "250.00",
  },
];

const savingMoney: CardSaveProps[] = [
  {
    principal: "10,248.00",
    interest: "128.00",
    country: "/images/Flags/malawi.svg",
    currency: "USD",
  },
  {
    principal: "10,248.00",
    interest: "128.00",
    country: "/images/Flags/canada.svg",
    currency: "USD",
  },
];

const currentAccountData: CurrentCardListProps[] = [];

Array(20)
  .fill(10)
  .forEach(() => currentAccountData.push(...tmpData));

const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardLeft}>
        <Card style={{ paddingTop: 10 }}>
          {currentAccountData.map((c, index) => (
            <CurrentCardList {...c} key={`c-${index}`} />
          ))}
        </Card>
      </div>
      <div className={styles.dashboardRight}>
        <div className={styles.dashboardSaving}>
          {savingMoney.map((s, index) => (
            <CardSave {...s} key={`s-${index}`} className="mb-5" />
          ))}
        </div>
        <div className={styles.dashboardTransaction}>
          <Text tag="h2" type="h2" weight={600}>
            Recent Transactions
          </Text>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
