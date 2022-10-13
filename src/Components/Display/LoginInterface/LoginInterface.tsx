import React, { ReactNode } from "react";
import styles from "./LoginInterface.module.scss";
import LoginImg from "@/Assets/login__img.jpg";
interface LoginInterfaceProps {
  children: ReactNode;
  className?: string;
}

export default function LoginInterface(props: LoginInterfaceProps) {
  const { children, className } = props;
  return (
    <div className={`${styles.login} ${className}`}>
      <div className={styles.login__img}>
        <img src={LoginImg} alt="" loading="lazy" />
      </div>
      <div className={styles.login__content}>{children}</div>
    </div>
  );
}
