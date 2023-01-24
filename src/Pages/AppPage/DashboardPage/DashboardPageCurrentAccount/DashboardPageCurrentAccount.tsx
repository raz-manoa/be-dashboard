import Card from "@/Components/Display/Card/Card";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import Scrollbar from "@/Components/General/Scrollbar/Scrollbar";
import Text from "@/Components/General/Text/Text";
import CurrencyItem, { ICurrencyItem } from "./CurrencyItem/CurrencyItem";
import styles from "../DashboardPage.module.scss";
import { currencyParser } from "@/Utils/currencyParser";
import CompanyData, {AccountsResponse} from "@/Api/endpoints/companyData.endpoint";

export default function DashboardCurrentAccount(accounts: { accounts: AccountsResponse[] }) {
    const data = accounts.accounts;
    const defaultAccount = data.find(account => account.isDefaultCurrency) || data[0];
    let totalBalance = 0;
    data.forEach(account => {
        if (account.currency !== 'USD') {
            // @ts-ignore
            totalBalance += account.usdBalance.value;
        } else {
            totalBalance += account.balance;
        }
    })

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
                        {defaultAccount.currency}
                    </Text>
                    <Text
                        tag="span"
                        size={32}
                        variant="red"
                        weight={700}
                        className="relative top-1"
                    >
                        {currencyParser(totalBalance)}
                    </Text>
                </Text>
            </TitleCard>
            <div className={styles.dashboardCurrentAccount}>
                <Card className="current-account">
                    <Scrollbar>
                        <div>
                            {data.map((c, index) => (
                                <CurrencyItem {...c} key={`c-${index}`}/>
                            ))}
                        </div>
                    </Scrollbar>
                </Card>
            </div>
        </div>
    );
}
