import Card from "@/Components/Display/Card/Card";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import Scrollbar from "@/Components/General/Scrollbar/Scrollbar";
import Text from "@/Components/General/Text/Text";
import { ECurrency } from "@/Interfaces/Currency";
import CurrencyItem, { ICurrencyItem } from "./CurrencyItem/CurrencyItem";
import styles from "./DashboardPageCurrentAccount.module.scss";

export default function DashboardCurrentAccount() {
  const currentAccount = {
    currency: ECurrency.USD,
    total: 22761,
  };

  const currentAccountCurrencies: ICurrencyItem[] = [
    { currency: ECurrency.USD, value: 150 },
    {
      currency: ECurrency.EUR,
      value: 398,
      reference: {
        currency: ECurrency.USD,
        value: 403.83,
      },
    },
    {
      currency: ECurrency.GBP,
      value: 1502.3,
      reference: {
        currency: ECurrency.USD,
        value: 403.83,
      },
    },
    {
      currency: ECurrency.CAD,
      value: 1988.12,
      reference: {
        currency: ECurrency.USD,
        value: 403.83,
      },
    },
    {
      currency: ECurrency.ZAR,
      value: 200678.88,
      reference: {
        currency: ECurrency.USD,
        value: 403.83,
      },
    },
    {
      currency: ECurrency.KES,
      value: 40217700.0,
      reference: {
        currency: ECurrency.USD,
        value: 403.83,
      },
    },
    { currency: ECurrency.UGX, value: 0 },
    { currency: ECurrency.TZS, value: 0 },
    { currency: ECurrency.MWK, value: 0 },
  ];

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
            {currentAccount.currency}
          </Text>
          <Text
            tag="span"
            size={30}
            variant="red"
            weight={700}
            className="relative top-1"
          >
            {currentAccount.total}
          </Text>
        </Text>
      </TitleCard>
      <div className={styles.dashboardCurrentAccount}>
        <Card className="pt-3 current-account">
          <Scrollbar>
            <div>
              {currentAccountCurrencies.map((c, index) => (
                <CurrencyItem {...c} key={`c-${index}`} reference={c} />
              ))}
            </div>
          </Scrollbar>
        </Card>
      </div>
    </div>
  );
}
