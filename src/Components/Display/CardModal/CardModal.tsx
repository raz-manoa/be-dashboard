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
  title: string;
  btnSecondary?: string;
}

export default function CardModal(props: CardModalProps) {
  const { data = [], btnPrimary = "", btnSecondary = "", title } = props;
  return (
    <Card className={styles.cardModal}>
      <div className={styles.cardModal__header}>
        <Text tag="h2" type="h2">
          {title}
        </Text>
      </div>
      <div className={styles.cardModal__body}>
        {data.map((d) => {
          return (
            <CardModalItem label={d.label} value={d.value} color={d.color} />
          );
        })}
      </div>
      <div
        className={`${styles.cardModal__footer} ${
          btnPrimary === "" || btnSecondary === ""
            ? styles.cardModal__footerSingle
            : ""
        }`}
      >
        {btnPrimary !== "" && (
          <Button type="primary" tag="link" className="btn">
            {btnPrimary}
          </Button>
        )}
        {btnSecondary !== "" && (
          <Button type="secondary" tag="link" className="btn">
            {btnSecondary}
          </Button>
        )}
      </div>
    </Card>
  );
}
