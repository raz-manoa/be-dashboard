import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
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
        <div className="flex gap-3">
          <Text tag="h1" type="h1" variant="grey">
            {title}
          </Text>
        </div>
        <nav className={styles.header__nav}>
          <NavLink to="/">
            <Icon icon="qr" color="#546e7a" />
          </NavLink>
          <NavLink
            to="setting"
            className={({ isActive }) =>
              `${styles.headerNav} ${isActive ? styles.headerNavActive : ""}`
            }
          >
            <Icon
              icon="setting"
              className={styles.header__icon}
              color="#546e7a"
            />
          </NavLink>
          <NavLink to="/">
            <Icon
              icon="logout"
              color="#546e7a"
              className={styles.header__icon}
            />
          </NavLink>
          <NavLink to="/"></NavLink>
        </nav>
      </div>
    </div>
  );
}
