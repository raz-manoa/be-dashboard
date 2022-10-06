import React, { ReactNode } from "react";
import { Link, To } from "react-router-dom";
import styles from "./Button.module.scss";
interface ButtonProps {
  type: "primary" | "secondary" | "white" | "default";
  className?: String;
  children: ReactNode;
  tag?: "link" | "button";
  to?: To;
}

export default function Button(props: ButtonProps) {
  const {
    type = "default",
    className = "",
    children,
    tag = "button",
    to,
  } = props;

  const ButtonTag = tag;

  return (
    <>
      {tag === "link" ? (
        <Link
          to={to as To}
          className={`${styles.btn} ${styles[`btn__${type}`]} ${className}`}
        >
          {children}
        </Link>
      ) : (
        <ButtonTag
          className={`${styles.btn} ${styles[`btn__${type}`]} ${className}`}
        >
          {children}
        </ButtonTag>
      )}
    </>
  );
}
