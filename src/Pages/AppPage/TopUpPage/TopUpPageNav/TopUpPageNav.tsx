import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopUpPageNav.module.scss";
interface TopUpPageNavProps {
  label: string;
  to: string;
}

export default function TopUpPageNav(props: TopUpPageNavProps) {
  const { label, to } = props;
  return (
    <button className={styles.nav}>
      <Link to={to}>{label}</Link>
    </button>
  );
}
