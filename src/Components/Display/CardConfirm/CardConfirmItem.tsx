import Text, { TextProps } from "@/Components/General/Text/Text";
import styles from "./CardConfirm.module.scss";
import React from "react";
interface CardModalItemProps {
  color: TextProps["variant"];
  label: string;
  value: string;
}
export default function CardConfirmItem(props: CardModalItemProps) {
  const { color, label, value } = props;
  return (
    <div className={styles.cardModal__list}>
      <Text tag="span" variant="grey" type="span">
        {label}
      </Text>
      <Text tag="h3" variant={color} type="h3">
        {value}
      </Text>
    </div>
  );
}
