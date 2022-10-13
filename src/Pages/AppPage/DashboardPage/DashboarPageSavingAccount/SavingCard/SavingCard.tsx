import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import { ECurrency } from "@/Interfaces/Currency";
import { currencyToFlag } from "@/Utils/currentyToFlag";
import { AllHTMLAttributes } from "react";
import styles from "./SavingCard.module.scss";

export interface ISavinItem {
  currency: ECurrency;
  principal: number;
  interest: number;
}

export interface SavingCardProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, "data"> {
  data: ISavinItem;
}

export default function SavingCard(props: SavingCardProps) {
  const { className, data, ...rest } = props;
  const { currency, principal, interest } = data;

  return (
    <Card
      className={`${styles.cardSave} ${className} common__info_card`}
      {...rest}
    >
      <div className={styles.cardSave__flag}>
        <img src={currencyToFlag(currency)} alt="flag" />
        <Text
          tag="h2"
          type="h2"
          variant="grey"
          className={styles.cardSave__flagName}
        >
          {currency}
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
          {principal}
        </Text>
      </div>
      <div className={styles.cardSave__info}>
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
          {interest}
        </Text>
      </div>
    </Card>
  );
}
