import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Icon from "@/Components/General/Icon/Icon";
import Text from "@/Components/General/Text/Text";
import styles from "./Header.module.scss";
interface HeaderProps {
  title: ReactNode;
}
export default function Header(props: HeaderProps) {
  const { title } = props;
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <Text tag="h1" type="h1" variant="grey">
          {title}
        </Text>
        <nav className={styles.header__nav}>
          <Link to="/">
            <Icon icon="qr" color="#546e7a" />
          </Link>
          <Link to="/">
            <Icon icon="setting" color="#546e7a" />
          </Link>
          <Link to="/">
            <Icon icon="logout" color="#546e7a" />
          </Link>
          <Link to="/"></Link>
        </nav>
      </div>
    </div>
  );
}
