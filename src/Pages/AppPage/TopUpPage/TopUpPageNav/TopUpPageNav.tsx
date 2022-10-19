import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TopUpPageNav.module.scss";
interface TopUpPageNavProps {
  label: string;
  active?: boolean;
  onclick?(e: React.MouseEvent): void;
}

export default function TopUpPageNav(props: TopUpPageNavProps) {
  const { label, active, onclick } = props;

  return (
    <button
      className={`${styles.nav} ${active ? styles.navActive : ""}`}
      onClick={onclick}
    >
      <span>{label}</span>
    </button>
  );
}
