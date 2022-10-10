import React from "react";
import Icon from "@/Components/General/Icon/Icon";
import SidebarItem from "@/Components/General/SibarItem/SidebarItem";
import styles from "./Sidebar.module.scss";
import sidebarRoutes from "@/Routes/sidebarRoutes";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__list}>
        {sidebarRoutes.map((data, index) => {
          return (
            <SidebarItem
              to={data.path || ""}
              label={data.name}
              key={`d-${index}`}
            >
              <Icon icon={data.icon} color="#fff" />
            </SidebarItem>
          );
        })}
      </div>
    </div>
  );
}
