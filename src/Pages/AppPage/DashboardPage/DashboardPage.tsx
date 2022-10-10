import Card from "@/Components/Display/Card/Card";
import CardSave, {
  CardSaveProps,
} from "@/Components/Display/CardSave/CardSave";
import CurrentCardList, {
  CurrentCardListProps,
} from "@/Components/Display/CurrentCardList/CurrentCardList";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
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
        <TitleCard
          title="Current Account"
          subtitle="Balances"
          link={{
            url: "/",
            label: "View all",
          }}
        >
          <Text tag="div" variant="red" className="flex gap-2 items-end">
            <Text tag="span" size={20} variant="red" weight={700}>
              USD
            </Text>
            <Text
              tag="span"
              size={30}
              variant="red"
              weight={700}
              className="relative top-1"
            >
              22,761
            </Text>
          </Text>
        </TitleCard>
        <div className={styles.dashboardCurrentAccount}>
          <Card style={{ paddingTop: 10 }}>
            {currentAccountData.map((c, index) => (
              <CurrentCardList {...c} key={`c-${index}`} />
            ))}
          </Card>
        </div>
      </div>
      <div className={styles.dashboardRight}>
        <TitleCard
          title="5% Savings Offering"
          subtitle="Balances"
          link={{
            url: "/",
            label: "View all",
          }}
        />
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
