import React, { ReactNode } from "react";
import styles from "./LoginInterface.module.scss";
import LoginImg from "@/Assets/login__img.jpg";
import Text from "@/Components/General/Text/Text";
interface LoginInterfaceProps {
  children: ReactNode;
  className?: string;
  title: string;
}

export default function LoginInterface(props: LoginInterfaceProps) {
  const { children, className, title } = props;
  return (
    <div className={`${styles.login} ${className}`}>
      <div className={styles.login__img}>
        <img src={LoginImg} alt="" loading="lazy" />
      </div>
      <div className={styles.login__content}>
        <Text
          tag="h1"
          type="h1"
          variant="white"
          size={32}
          className={styles.title}
        >
          {title}
        </Text>
        {children}
      </div>
    </div>
  );
}
