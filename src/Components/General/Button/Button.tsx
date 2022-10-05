import React, { ReactNode } from "react";
import "./Button.scss";
interface ButtonProps {
  type: "primary" | "secondary" | "white" | "default";
  className?: String;
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  const { type = "default", className, children } = props;
  return (
    <button className={`btn btn--${type} ${className}`}>{children}</button>
  );
}
