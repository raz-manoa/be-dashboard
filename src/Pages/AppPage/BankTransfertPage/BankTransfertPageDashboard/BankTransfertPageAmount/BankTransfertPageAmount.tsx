import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import styles from "./BankTransfertPageAmount.module.scss";
import React from "react";

export default function BankTransfertPageAmount() {
  return (
    <Card>
      <Text tag="h2" type="h2">
        Amount
      </Text>
      <div className={styles.amount}>
        <Text
          tag="p"
          type="p"
          size={19}
          variant="grey"
          className={styles.amount__list}
        >
          Amount from:
          <strong className="common__strong--red">12.00 USD</strong>
        </Text>
        <Text
          tag="p"
          type="p"
          size={19}
          variant="grey"
          className={styles.amount__list}
        >
          Amount from:
          <strong className="common__strong--red">12.00 USD</strong>
        </Text>
        <Text
          tag="p"
          type="p"
          size={19}
          variant="grey"
          className={styles.amount__list}
        >
          Amount from:
          <strong className="common__strong--red">12.00 USD</strong>
        </Text>
      </div>
    </Card>
  );
}
