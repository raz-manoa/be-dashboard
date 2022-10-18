import Text, { TextProps } from "@/Components/General/Text/Text";
import styles from "./CardConfirm.module.scss";
import React from "react";
import Icon from "@/Components/General/Icon/Icon";
interface CardModalItemProps {
  color?: TextProps["variant"];
  label: string;
  value?: string;
  icon?: string;
  msg?: string;
  optional?: string;
  num?: number;
  onClick?(e: React.MouseEvent): void;
}
export default function CardConfirmItem(props: CardModalItemProps) {
  const {
    color = "black",
    label,
    value,
    icon,
    onClick,
    msg = "",
    num,
    optional,
  } = props;
  return (
    <>
      <div
        className={`
          ${
            msg
              ? `${styles.cardModal__msg} ${styles.cardModal__list}`
              : `${styles.cardModal__list}`
          }
        `}
      >
        <div>
          <Text
            tag="span"
            variant="grey"
            type="span"
            size={12}
            className={styles.cardModal__label}
          >
            {label}
          </Text>
          {optional && (
            <Text
              tag="span"
              variant="grey"
              type="span"
              weight={500}
              size={12}
              className={styles.cardModal__optional}
            >
              ({optional})
            </Text>
          )}
        </div>
        <div
          className={
            icon
              ? ` flex items-center ${styles.cardModal__value}`
              : `${styles.cardModal__value}`
          }
        >
          <div>
            <Text tag="span" variant={color} type="span" size={12} weight={600}>
              {value}
            </Text>
            {num && (
              <Text
                tag="p"
                type="p"
                size={12}
                weight={600}
                className={styles.cardModal__num}
              >
                {num}
              </Text>
            )}
          </div>
          {icon && (
            <span onClick={onClick} className={styles.cardModal__icon}>
              <Icon icon={icon} color="red" />
            </span>
          )}
        </div>
        {msg && (
          <div className={styles.msg}>
            <Text tag="p" type="p" weight={600} size={12}>
              {msg}
            </Text>
          </div>
        )}
      </div>
    </>
  );
}
