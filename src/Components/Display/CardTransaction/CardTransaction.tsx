import Icon from "@/Components/General/Icon/Icon";
import Text from "@/Components/General/Text/Text";
import React from "react";
import Card from "../Card/Card";
import styles from "./CardTransaction.module.scss";
interface dataProps {
  date: string;
  icon: string;
  company?: string;
  user: string;
  payement: string;
  transaction: string;
}
interface CardTransactionProps {
  data: dataProps[];
}
export default function CardTransaction(props: CardTransactionProps) {
  const { data } = props;
  return (
    <Card>
      {data.map((d, index) => (
        <div className={styles.transaction} key={`d-${index}`}>
          <div className={styles.transaction__info}>
            <Icon icon={d.icon} color="red" />
            <div className={styles.transaction__info_txt}>
              <Text tag="span" type="span" variant="black">
                {d.payement}
              </Text>
              <Text tag="p" type="p" variant="black" className={styles.name}>
                {d.user}
              </Text>
              <Text tag="p" type="p" variant="black">
                {d.company}
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
              {d.date}
            </Text>
            <Text tag="h3" type="h3" variant="black">
              {d.transaction}
            </Text>
          </div>
        </div>
      ))}
    </Card>
  );
}
