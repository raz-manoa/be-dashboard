import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import styles from "./CryptoDepositPageItem.module.scss";
import React from "react";

export default function CryptoDepositPageItem() {
  return (
    <Card>
      <Text type="h2" tag="h2" className={styles.title}>
        Ethereum <sup>ETH</sup>
      </Text>
    </Card>
  );
}
