import React, { ReactNode } from "react";
import { Link, To } from "react-router-dom";
import styles from "./Button.module.scss";
interface ButtonProps {
  type: "primary" | "secondary" | "white" | "default";
  className?: String;
  children: ReactNode;
  tag?: "link" | "button";
  to?: To;
  active: boolean;
  onClick?(e: React.MouseEvent): void;
}

export default function Button(props: ButtonProps) {
  const {
    type = "default",
    className = "",
    children,
    tag = "button",
    to,
    active = true,
    onClick,
  } = props;
  console.log(props);
  const ButtonTag = tag;

  return (
    <>
      {(tag === "link" && active) ? (
        <Link
          to={to as To}
          className={`${styles.btn} ${styles[`btn__${type}`]} ${className}`}
        >
          {children}
        </Link>
      ) : (
        <ButtonTag
          className={`${styles.btn} ${styles[`btn__${type}`]} ${className}`}
          onClick={onClick}
        >
          {children}
        </ButtonTag>
      )}
    </>
  );
}
