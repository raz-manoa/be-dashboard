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
        <div className="flex gap-3">
          <Text tag="h1" type="h1" variant="grey">
            {title instanceof Array && title[0] ? title[0] : title}
          </Text>
          {title instanceof Array && title[1] && (
            <Text tag="span" weight={400} size={24} variant="grey-light">
              {title[1]}
            </Text>
          )}
        </div>
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
