import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./SidebarItem.module.scss";
interface SidebarItemProps {
  to: string;
  label: string;
  children: ReactNode;
  state?: string[];
}

export default function SidebarItem(props: SidebarItemProps) {
  const { to, label, state, children } = props;

  return (
    <Link
      to={to}
      state={{
        headerLabel: state || label,
      }}
      className={styles.sidebarItem}
    >
      {children}
      <span>{label}</span>
    </Link>
  );
}
