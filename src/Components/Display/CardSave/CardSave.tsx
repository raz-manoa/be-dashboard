import Text from "@/Components/General/Text/Text";
import { AllHTMLAttributes } from "react";
import Card from "../Card/Card";
import styles from "./CardSave.module.scss";

export interface CardSaveProps extends AllHTMLAttributes<HTMLDivElement> {
  country: string;
  currency: string;
  principal: string;
  interest: string;
}

export default function CardSave(props: CardSaveProps) {
  const { className, country, currency, principal, interest, ...rest } = props;
  return (
    <Card
      className={`${styles.cardSave} ${className} common__info_card`}
      {...rest}
    >
      <div className={styles.cardSave__flag}>
        <img src={country} alt="flag" />
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
