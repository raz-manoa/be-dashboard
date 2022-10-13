import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import SavingCard, { ISavinItem } from "./SavingCard/SavingCard";
import { ECurrency } from "@/Interfaces/Currency";

export default function DashboarPageSavingAccount() {
  const savingMoney: ISavinItem[] = [
    {
      principal: 10248.0,
      interest: 128.0,
      currency: ECurrency.USD,
    },
    {
      principal: 10248.0,
      interest: 128.0,
      currency: ECurrency.EUR,
    },
  ];

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
      <div style={{ marginTop: 25 }}>
        {savingMoney.map((s, index) => (
          <SavingCard data={s} key={`s-${index}`} className="mb-5" />
        ))}
      </div>
    </>
  );
}
