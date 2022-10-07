import Text from "@/Components/General/Text/Text";
import React from "react";
import Card from "../Card/Card";
import styles from "./CurrentCardList.module.scss";
interface CurrentCardListProps {
  money: string;
  value: string;
  valueUSD?: string;
  src: string;
}
export default function CurrentCardList(props: CurrentCardListProps) {
  const { money, value, src, valueUSD } = props;
  return (
    <div className={styles.card__content}>
      <div className={styles.card__money}>
        <img src={src} alt="flag" />
        <Text tag="h3" type="h3" variant="grey">
          {money}
        </Text>
      </div>
      <div className={styles.card__moneyNbr}>
        <Text size={31} tag="p" variant="grey">
          {value}
        </Text>
        <Text size={13} tag="span" variant="grey">
          {valueUSD}
        </Text>
      </div>
    </div>
  );
}
