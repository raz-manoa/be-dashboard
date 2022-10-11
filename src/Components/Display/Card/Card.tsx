import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export default function Card(props: CardProps) {
  const { children, className = "", ...rest } = props;
  return (
    <div className={`${styles.card} ${className}`} {...rest}>
      {children}
    </div>
  );
}
