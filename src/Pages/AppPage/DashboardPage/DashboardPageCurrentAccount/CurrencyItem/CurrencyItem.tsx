import Text from "@/Components/General/Text/Text";
import { ECurrency } from "@/Interfaces/Currency";
import { currencyParser } from "@/Utils/currencyParser";
import { currenctyToLabel, currencyToFlag } from "@/Utils/currentyToFlag";
import styles from "./CurrencyItem.module.scss";

export interface ICurrencyItem {
  currency: ECurrency;
  currencyLabel?: string;
  value: number;
  reference?: {
    value: number;
    currency: ECurrency;
  };
}

interface CurrencyItemProps extends ICurrencyItem {}

export default function CurrencyItem(props: CurrencyItemProps) {
  const { currency, value, reference, currencyLabel } = props;
  return (
    <div className={styles.card__content}>
      <div className={styles.card__money}>
        <img src={currencyToFlag(currency)} alt="flag" />
        <Text tag="h3" type="h3" variant="grey">
          {currencyLabel || currenctyToLabel(currency)} ({currency})
        </Text>
      </div>
      <div className={styles.card__moneyNbr} style={{ textAlign: "right" }}>
        <Text size={31} tag="p" variant="grey" weight={600}>
          {currencyParser(value)}
        </Text>
        {reference && (
          <Text size={13} tag="span" variant="grey-light">
            = {reference.currency} {currencyParser(reference.value)}
          </Text>
        )}
      </div>
    </div>
  );
}
