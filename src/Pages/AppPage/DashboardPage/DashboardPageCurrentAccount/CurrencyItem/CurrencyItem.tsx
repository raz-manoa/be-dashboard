import Text from "@/Components/General/Text/Text";
import { ECurrency } from "@/Interfaces/Currency";
import { currencyParser } from "@/Utils/currencyParser";
import { currenctyToLabel, currencyToFlag } from "@/Utils/currentyToFlag";
import styles from "./CurrencyItem.module.scss";
import {AccountsResponse} from "@/Api/endpoints/companyData.endpoint";

export interface ICurrencyItem {
  currency: ECurrency;
  currencyLabel?: string;
  balance: number;
  usdBalance?: {
    value: number;
    currency: ECurrency;
  };
}

export default function CurrencyItem(props: AccountsResponse) {
  const { currency, balance, usdBalance } = props;
  return (
    <div className={`${styles.card__content} card-dashboard`}>
      <div className={styles.card__money}>
        <img src={currencyToFlag(currency)} alt="flag" />
        <Text tag="h3" type="h3" variant="grey">
          {currenctyToLabel(currency)} ({currency})
        </Text>
      </div>
      <div className={styles.card__moneyNbr} style={{ textAlign: "right" }}>
        <Text size={31} tag="p" variant="grey" weight={600}>
          {currencyParser(balance)}
        </Text>
        {usdBalance && (
          <Text size={13} tag="span" variant="grey-light">
            = {usdBalance.currency} {currencyParser(usdBalance.value)}
          </Text>
        )}
      </div>
    </div>
  );
}
