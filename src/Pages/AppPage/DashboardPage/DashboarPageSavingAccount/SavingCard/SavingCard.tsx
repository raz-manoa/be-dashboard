import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import { ECurrency } from "@/Interfaces/Currency";
import { currencyParser } from "@/Utils/currencyParser";
import { currencyToFlag } from "@/Utils/currentyToFlag";
import { AllHTMLAttributes } from "react";
import styles from "./SavingCard.module.scss";

export interface ISaving {
  currency: ECurrency;
  amount: number;
  interestAmount: number;
  interestPercent: number;
  companyName: string
}

export interface SavingCardProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, "data"> {
  data: ISaving;
}

export default function SavingCard(props: SavingCardProps) {
  const { className, data, ...rest } = props;
  const { currency, amount, interestAmount } = data;
  const cur = currency.id;

  return (
    <Card
      className={`${styles.cardSave} ${className} common__info_card`}
      {...rest}
    >
      <div className={styles.cardSave__flag}>
        <img src={currencyToFlag(cur)} alt="flag" />
        <Text
          tag="h2"
          size={16}
          variant="grey"
          weight={600}
          className={styles.cardSave__flagName}
        >
          {cur}
        </Text>
      </div>

      <div className={styles.cardSave__info}>
        <Text
          tag="h3"
          type="h3"
          variant="grey"
          className={styles.cardSave__infoTitle}
        >
          Principal
        </Text>
        <Text
          tag="p"
          variant="grey"
          size={23}
          className={styles.cardSave__infoNbr}
        >
          {currencyParser(amount)}
        </Text>
      </div>
      <div className={styles.cardSave__info} style={{ paddingRight: 0 }}>
        <Text
          tag="h3"
          type="h3"
          variant="grey"
          className={styles.cardSave__infoTitle}
        >
          Interest
        </Text>
        <Text
          tag="p"
          variant="red"
          size={23}
          className={styles.cardSave__infoNbr}
        >
          {currencyParser(interestAmount)}
        </Text>
      </div>
    </Card>
  );
}
