import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import React from "react";
import Card from "../Card/Card";
import styles from "./CardModal.module.scss";

export default function CardModal() {
  return (
    <Card className={styles.cardModal}>
      <div className={styles.cardModal__header}>
        <Text tag="h2" type="h2">
          Foreign Exchange - Review
        </Text>
      </div>
      <div className={styles.cardModal__body}>
        <div className={styles.cardModal__list}>
          <Text tag="span" variant="grey" type="span">
            Transaction Type
          </Text>
          <Text tag="h3" variant="black" type="h3">
            Bank Transfer
          </Text>
        </div>
      </div>
      <div className={styles.cardModal__footer}>
        <Button type="primary" tag="link">
          Button
        </Button>
        <Button type="secondary" tag="link">
          Button
        </Button>
      </div>
    </Card>
  );
}
