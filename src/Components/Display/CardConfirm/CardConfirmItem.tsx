import Text, { TextProps } from "@/Components/General/Text/Text";
import styles from "./CardConfirm.module.scss";
import React from "react";
import Icon from "@/Components/General/Icon/Icon";
interface CardModalItemProps {
  color?: TextProps["variant"];
  label: string;
  value: string;
  icon?: string;
  onClick?(e: React.MouseEvent): void;
}
export default function CardConfirmItem(props: CardModalItemProps) {
  const { color = "black", label, value, icon = "", onClick } = props;
  return (
    <div className={styles.cardModal__list}>
      <Text
        tag="span"
        variant="grey"
        type="span"
        size={12}
        className={styles.cardModal__label}
      >
        {label}
      </Text>
      <div className={styles.cardModal__value}>
        <Text tag="h3" variant={color} type="h3" size={12}>
          {value}
        </Text>
        {icon != "" && (
          <span onClick={onClick} className={styles.cardModal__icon}>
            <Icon icon={icon} color="red" />
          </span>
        )}
      </div>
    </div>
  );
}
