import Text, { TextProps } from "@/Components/General/Text/Text";
import styles from "./CardConfirm.module.scss";
import React, { ReactNode } from "react";
import Icon from "@/Components/General/Icon/Icon";
export interface CardModalItemProps {
  color?: TextProps["variant"];
  label: string | ReactNode;
  value?: string | number | ReactNode;
  icon?: string;
  optional?: string;
  num?: number;
  weight?: TextProps["weight"];
  onClick?(e: React.MouseEvent): void;
  align?: "row" | "col";
  extra?: string | number | ReactNode;
  first?: boolean;
  style?: React.CSSProperties;
}
export default function CardConfirmItem(props: CardModalItemProps) {
  const {
    color = "black",
    label,
    value,
    weight = 600,
    extra,
    align = "col",
    first = false,
    style,
  } = props;
  return (
    <>
      <div
        className={`
          ${
            align === "row"
              ? `${styles.cardModal__msg} ${styles.cardModal__list}`
              : `${styles.cardModal__list}`
          }
        `}
        style={style}
      >
        <Text
          tag="span"
          variant="grey"
          type="span"
          size={12}
          className={styles.cardModal__label}
        >
          {label}
        </Text>
        <div className={styles.valueWrap}>
          <Text
            tag="span"
            variant={color}
            type="span"
            size={first ? 14 : 12}
            weight={weight}
          >
            {value}
          </Text>
          {extra}
        </div>
      </div>
    </>
  );
}
