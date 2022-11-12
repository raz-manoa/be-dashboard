import CardSave from "@/Components/Display/CardSave/CardSave";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import EuropUnion from "@/Assets/Flags/european union.svg";
import UnitedState from "@/Assets/Flags/united states.svg";
import styles from "./SavingPageOffering.module.scss";
import React, {useEffect, useState} from "react";
import api from "@/Api/api";
import {ISaving} from "@/Pages/AppPage/DashboardPage/DashboarPageSavingAccount/SavingCard/SavingCard";

export default function SavingPageOffering(savings: { savings: ISaving[] }) {
    const [usdSaving, setUSDSaving] = useState<ISaving>(null);
    const [eurSaving, setEURSaving] = useState<ISaving>(null);
    useEffect(() => {
        async function getInfo() {
            const data = savings.savings;
            // @ts-ignore
            setUSDSaving(data.find(item => item.currency.id === 'USD'));
            // @ts-ignore
            setEURSaving(data.find(item => item.currency.id === 'EUR'));
        }
        getInfo();
    },[]);
  return (
    <div>
      <TitleCard title="5% Savings Offering" subtitle="Balances" />
        {usdSaving && eurSaving && <div className={styles.card__offering}>
        <CardSave
          principal={usdSaving.amount.toString()}
          interest={usdSaving.interestAmount.toString()}
          country={UnitedState}
          currency="USD"
          className={styles.offering}
        />
        <CardSave
          principal={eurSaving.amount.toString()}
          interest={eurSaving.interestAmount.toString()}
          country={EuropUnion}
          currency="EUR"
          className={styles.offering}
        />
      </div>}
    </div>
  );
}
