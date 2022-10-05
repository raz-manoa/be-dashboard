import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./SidebarItem.module.scss";
interface SidebarItemProps {
  to: string;
  label: string;
  children: ReactNode;
}

export default function SidebarItem(props: SidebarItemProps) {
  const { to, label, children } = props;
  return (
    <Link to={to} title="" className={styles.sidebarItem}>
      {children}
      <span>{label}</span>
    </Link>
  );
}
