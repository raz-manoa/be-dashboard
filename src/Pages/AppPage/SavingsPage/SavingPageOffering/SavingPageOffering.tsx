import CardSave from "@/Components/Display/CardSave/CardSave";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import EuropUnion from "@/Assets/Flags/european union.svg";
import UnitedState from "@/Assets/Flags/united states.svg";
import styles from "./SavingPageOffering.module.scss";
import React from "react";

export default function SavingPageOffering() {
  return (
    <div>
      <TitleCard title="5% Savings Offering" subtitle="Balances" />
      <div className={styles.card__offering}>
        <CardSave
          principal="245,624.32"
          interest="12,439.79"
          country={UnitedState}
          currency="USD"
          className={styles.offering}
        />
        <CardSave
          principal="245,624.32"
          interest="12,439.79"
          country={EuropUnion}
          currency="EUR"
          className={styles.offering}
        />
      </div>
    </div>
  );
}
