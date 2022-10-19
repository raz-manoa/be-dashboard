import Button from "@/Components/General/Button/Button";
import Text, { TextProps } from "@/Components/General/Text/Text";
import React, { ReactNode } from "react";
import Card from "../Card/Card";
import styles from "./CardConfirm.module.scss";
import CardConfirmItem, { CardModalItemProps } from "./CardConfirmItem";

interface CardConfirmProps {
  data: CardModalItemProps[];
  btnPrimary?: string;
  title: string;
  btnSecondary?: string;
  className?: string;
  onClickFirstBtn?(data?: any): void;
  onClickSecondBtn?(data?: any): void;
  itemStyle?: React.CSSProperties;
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
    itemStyle,
  } = props;
  return (
    <Card className={`${styles.cardModal} ${className}`}>
      <div className={styles.cardModal__header}>
        <Text tag="h2" type="h2" variant="black2">
          {title}
        </Text>
      </div>
      <div className={styles.cardModal__body}>
        {data.map((d, index) => (
          <CardConfirmItem
            {...d}
            first={index === 0}
            style={itemStyle}
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
          <Button type="secondary" className="btn" onClick={onClickFirstBtn}>
            {btnPrimary}
          </Button>
        )}
        {btnSecondary && (
          <Button type="primary" className="btn" onClick={onClickSecondBtn}>
            {btnSecondary}
          </Button>
        )}
      </div>
    </Card>
  );
}
