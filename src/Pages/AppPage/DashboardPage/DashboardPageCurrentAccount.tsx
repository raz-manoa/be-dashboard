import Card from "@/Components/Display/Card/Card";
import CurrentCardList, {
  CurrentCardListProps,
} from "@/Components/Display/CurrentCardList/CurrentCardList";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import Scrollbar from "@/Components/General/Scrollbar/Scrollbar";
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

const currentAccountData: CurrentCardListProps[] = [];

Array(20)
  .fill(10)
  .forEach(() => currentAccountData.push(...tmpData));

export default function DashboardCurrentAccount() {
  return (
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
        <Card className="pt-3 current-account">
          <Scrollbar>
            <div>
              {currentAccountData.map((c, index) => (
                <CurrentCardList {...c} key={`c-${index}`} />
              ))}
            </div>
          </Scrollbar>
        </Card>
      </div>
    </div>
  );
}
