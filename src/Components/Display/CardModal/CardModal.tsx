import Button from "@/Components/General/Button/Button";
import Text, { TextProps } from "@/Components/General/Text/Text";
import React, { ReactNode } from "react";
import Card from "../Card/Card";
import styles from "./CardModal.module.scss";
import CardModalItem from "./CardModalItem";

export interface CardModelItem {
  label: string;
  value: string;
  color?: TextProps["variant"];
}

interface CardModalProps {
  data: CardModelItem[];
  btnPrimary?: string;
  btnSecondary?: string;
  children: ReactNode;
}

export default function CardModal(props: CardModalProps) {
  const { data = [], btnPrimary, btnSecondary, children } = props;
  return (
    <Card className={styles.cardModal}>
      <div className={styles.cardModal__header}>
        <Text tag="h2" type="h2">
          Foreign Exchange - Review
        </Text>
      </div>
      <div className={styles.cardModal__body}>
        {data.map((d) => {
          return (
            <CardModalItem label={d.label} value={d.value} color={d.color} />
          );
        })}
      </div>
      <div className={styles.cardModal__footer}>
        {children}
        {/* <Button type="primary" tag="link">
          {btnPrimary}
        </Button>
        <Button type="secondary" tag="link">
          {btnSecondary}
        </Button> */}
      </div>
    </Card>
  );
}
