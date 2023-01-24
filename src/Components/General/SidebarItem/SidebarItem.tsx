import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
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
    <NavLink
      className={({ isActive }) =>
        `${styles.sidebarItem} ${isActive ? styles.sidebarActive : ""}`
      }
      to={to}
      state={{
        headerLabel: state || label,
      }}
    >
      {children}
      <span>{label}</span>
    </NavLink>
  );
}
