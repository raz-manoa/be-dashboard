import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import SavingCard, {ISaving } from "./SavingCard/SavingCard";
import styles from "../DashboardPage.module.scss";

export default function DashboarPageSavingAccount(savings: ISaving[]) {
    const data = savings.savings;
    return (
        <div>
            <TitleCard
                title="5% Savings Offering"
                subtitle="Balances"
                link={{
                    url: "/",
                    label: "View all",
                }}
            />
            <div className={styles.dashboardSaving}>
                {savings.savings.map((s, index) => (
                    <SavingCard data={s} key={`s-${index}`} className="mb-5" />
                ))}
            </div>
        </div>
    );
}
