import React, { ReactNode } from "react";
import styles from "./LoginLayout.module.scss";
import LoginImg from "@/Assets/login__img.jpg";
import Text from "@/Components/General/Text/Text";
import BeLogo from "@/Assets/Be_Logos.svg";
interface LoginLayoutProps {
  children: ReactNode;
  className?: string;
  title: string;
}

export default function LoginLayout(props: LoginLayoutProps) {
  const { children, className, title } = props;
  return (
    <div className={`${styles.login} ${className}`}>
      <div className={styles.logo}>
        <img src={BeLogo} alt="logo" />
      </div>
      <div className={styles.login__img}>
        <img src={LoginImg} alt="" loading="lazy" />
      </div>
      <div className={styles.login__content}>
        <Text
          tag="h1"
          type="h1"
          variant="white"
          size={32}
          weight="bold"
          className={styles.title}
        >
          {title}
        </Text>
        {children}
      </div>
    </div>
  );
}
