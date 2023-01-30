import CardSave from "@/Components/Display/CardSave/CardSave";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import EuropUnion from "@/Assets/Flags/european union.svg";
import UnitedState from "@/Assets/Flags/united states.svg";
import styles from "./SavingPageOffering.module.scss";
import React, { useEffect, useState } from "react";
import api from "@/Api/api";
import SavingCard, {ISaving} from "@/Pages/AppPage/DashboardPage/DashboarPageSavingAccount/SavingCard/SavingCard";

export default function SavingPageOffering(savings: { savings: ISaving[] }) {
    useEffect(() => {
        async function getInfo() {
            const data = savings.savings;
            // @ts-ignore
            // setUSDSaving(data.find(item => item.currency.id === 'USD'));
            // @ts-ignore
            // setEURSaving(data.find(item => item.currency.id === 'EUR'));
        }
        getInfo();
    },[]);
  return (
    <div>
      <TitleCard title="5% Savings Offering" subtitle="Balances"  />
        <div style={{ marginTop: 25 }}>
            {savings.savings && savings.savings.map((s, index) => (
                <SavingCard data={s} key={`s-${index}`} className="mb-5" />
            ))}
        </div>
    </div>
  );
}
