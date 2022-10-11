import React, { ReactNode } from "react";
import styles from "./Text.module.scss";
export interface TextProps extends React.HTMLAttributes<any> {
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
  type?: "h1" | "h2" | "h3" | "p" | "span";
  variant?: "black" | "red" | "grey" | "grey-light" | "green" | "white";
  weight?: 700 | 600 | 500 | 400 | 300;
  size?: number;
}

export default function Text(props: TextProps) {
  const {
    tag = "p",
    type,
    children,
    variant = "black",
    className = "",
    size = 14,
    weight,
    ...rest
  } = props;
  const TextTag = tag;
  return (
    <TextTag
      {...rest}
      className={`
        ${styles.text} 
        ${styles[`text__color_${variant}`]} 
        ${type ? `${styles[`text__size_${type}`]}` : ""} ${className}`}
      style={
        {
          "--font-size": `${size}px`,
          "--font-weight": weight,
        } as React.CSSProperties
      }
    >
      {children}
    </TextTag>
  );
}
