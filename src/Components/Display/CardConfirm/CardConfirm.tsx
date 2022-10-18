import Button from "@/Components/General/Button/Button";
import Text, { TextProps } from "@/Components/General/Text/Text";
import React, { ReactNode } from "react";
import Card from "../Card/Card";
import styles from "./CardConfirm.module.scss";
import CardConfirmItem from "./CardConfirmItem";

export interface CardConfirmItemProps {
  label: string;
  value?: string;
  color?: TextProps["variant"];
  icon?: string;
  msg?: string;
  optional?: string;
  num?: number;
}

interface CardConfirmProps {
  data: CardConfirmItemProps[];
  btnPrimary?: string;
  title: string;
  btnSecondary?: string;
  className?: string;
  onClickFirstBtn?(data?: any): void;
  onClickSecondBtn?(data?: any): void;
}

export default function CardConfirm(props: CardConfirmProps) {
  const {
    data = [],
    btnPrimary,
    btnSecondary,
    title,
    className,
    onClickFirstBtn,
    onClickSecondBtn,
  } = props;
  return (
    <Card className={`${styles.cardModal} ${className}`}>
      <div className={styles.cardModal__header}>
        <Text tag="h2" type="h2">
          {title}
        </Text>
      </div>
      <div className={styles.cardModal__body}>
        {data.map((d, index) => (
          <CardConfirmItem
            label={d.label}
            value={d.value}
            color={d.color}
            icon={d.icon}
            msg={d.msg}
            num={d.num}
            optional={d.optional}
            key={`d-${index}`}
          />
        ))}
      </div>
      <div
        className={`${styles.cardModal__footer} ${
          !btnPrimary || !btnSecondary ? styles.cardModal__footerSingle : ""
        }`}
      >
        {btnPrimary && (
          <Button type="primary" className="btn" onClick={onClickFirstBtn}>
            {btnPrimary}
          </Button>
        )}
        {btnSecondary && (
          <Button type="secondary" className="btn" onClick={onClickSecondBtn}>
            {btnSecondary}
          </Button>
        )}
      </div>
    </Card>
  );
}
