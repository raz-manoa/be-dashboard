import React from "react";
import CardSave, {
  CardSaveProps,
} from "@/Components/Display/CardSave/CardSave";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import styles from "./DashboardPage.module.scss";

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

export default function DashboarPageSavingAccount() {
  return (
    <>
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
    </>
  );
}
