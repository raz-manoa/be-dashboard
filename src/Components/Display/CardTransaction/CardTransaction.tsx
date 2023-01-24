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
function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default function CardTransaction(props: CardTransactionProps) {
  const { date, company, user, transaction } = props;
  let { icon, payment } = props;
  if (icon === 'exchange') {
    icon = 'fx';
  }
  if (icon === 'bebanktransfer') {
    icon = 'bank-transfer';
  }
  if (payment === 'bebanktransfer') {
    payment = 'BeBank Transfer'
  }
  if (payment === 'otherbanktransfer') {
    payment = 'Other Bank Transfer'
  }
  if (payment === 'fundswithdraw') {
    payment = 'Funds Withdraw'
  }
  if (payment === 'wiretransfer') {
    payment = 'Wire Transfer'
  }
  if (payment === 'qrtransfer') {
    payment = 'QR Transfer'
  }
  payment = capitalize(payment);
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
          {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.parse(date))}
        </Text>
        <Text tag="h3" type="h3" variant="black">
          {transaction}
        </Text>
      </div>
    </div>
  );
}
