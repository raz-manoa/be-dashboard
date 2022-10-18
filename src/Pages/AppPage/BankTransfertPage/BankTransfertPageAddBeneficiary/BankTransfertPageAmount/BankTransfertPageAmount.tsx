import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import styles from "./BankTransfertPageAmount.module.scss";
import React from "react";

interface BankTransfertPageAmountProps {
  overlay?: boolean;
}

export default function BankTransfertPageAmount(
  props: BankTransfertPageAmountProps
) {
  const { overlay } = props;
  return (
    <Card className={overlay ? styles.overlay : ""}>
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
