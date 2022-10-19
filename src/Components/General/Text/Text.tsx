import React, { ReactNode } from "react";
import styles from "./Text.module.scss";
export interface TextProps extends React.HTMLAttributes<any> {
  tag?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  type?: "h1" | "h2" | "h3" | "p" | "span";
  variant?:
    | "black"
    | "black2"
    | "red"
    | "grey"
    | "grey-light"
    | "green"
    | "white"
    | "yellow";
  weight?: React.CSSProperties["fontWeight"];
  size?: React.CSSProperties["fontSize"];
  style?: React.CSSProperties;
}

export default function Text(props: TextProps) {
  const {
    tag = "p",
    type,
    children,
    variant = "black",
    className = "",
    size = 14,
    weight = 400,
    style,
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
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </TextTag>
  );
}
