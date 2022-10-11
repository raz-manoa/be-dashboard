import Text from "@/Components/General/Text/Text";
import React from "react";
import Card from "../Card/Card";
import styles from "./CurrentCardList.module.scss";
export interface CurrentCardListProps {
  currency: string;
  value: string;
  convertValue?: string;
  country: string;
}
export default function CurrentCardList(props: CurrentCardListProps) {
  const { currency, value, country, convertValue } = props;
  return (
    <div className={styles.card__content}>
      <div className={styles.card__money}>
        <img src={country} alt="flag" />
        <Text tag="h3" type="h3" variant="grey">
          {currency}
        </Text>
      </div>
      <div className={styles.card__moneyNbr}>
        <Text size={31} tag="p" variant="grey" weight={600}>
          {value}
        </Text>
        {convertValue && (
          <Text size={13} tag="span" variant="grey">
            = {convertValue}
          </Text>
        )}
      </div>
    </div>
  );
}
