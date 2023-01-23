import Icon from "@/Components/General/Icon/Icon";
import Text from "@/Components/General/Text/Text";
import React from "react";
import Card from "../Card/Card";
import styles from "./CardTransaction.module.scss";
export interface CardTransactionProps {
  date: string;
  icon: string;
  company?: string;
  user: string;
  payment: string;
  transaction: string;
}
export default function CardTransaction(props: CardTransactionProps) {
  const { date, company, user, payment, transaction } = props;
  let { icon } = props;
  if (icon === 'exchange') {
    icon = 'fx';
  }
  return (
    <div className={styles.transaction}>
      <div className={styles.transaction__info}>
        <Icon icon={icon} color="#e02b59" />
        <div className={styles.transaction__info_txt}>
          <Text tag="p" size={12} type="span" variant="black">
            {payment}
          </Text>
          <Text
            tag="p"
            size={12}
            weight={500}
            variant="black"
            className={styles.name}
          >
            {user}
          </Text>
          <Text tag="p" size={12} type="p" variant="grey">
            {company}
          </Text>
        </div>
      </div>
      <div>
        <Text
          tag="p"
          type="p"
          variant="grey"
          className={styles.transaction__date}
        >
          {date}
        </Text>
        <Text tag="h3" type="h3" variant="black">
          {transaction}
        </Text>
      </div>
    </div>
  );
}
