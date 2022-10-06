import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import "./SidebarItem.scss";
=======
import styles from "./SidebarItem.module.scss";
>>>>>>> 7d0bf4404901294031be0c3d7c6b40a12b24e334
interface SidebarItemProps {
  to: string;
  label: string;
  children: ReactNode;
}

export default function SidebarItem(props: SidebarItemProps) {
  const { to, label, children } = props;
  return (
<<<<<<< HEAD
    <Link to={to} className="sidebar-item">
=======
    <Link
      to={to}
      state={{
        headerLabel: label,
      }}
      className={styles.sidebarItem}
    >
>>>>>>> 7d0bf4404901294031be0c3d7c6b40a12b24e334
      {children}
      <span>{label}</span>
    </Link>
  );
}
