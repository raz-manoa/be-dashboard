import React from "react";
import Icon from "@/Components/General/Icon/Icon";
import SidebarItem from "@/Components/General/SibarItem/SidebarItem";
import styles from "./Sidebar.module.scss";
import sidebarRoutes from "@/Routes/sidebarRoutes";
import Text from "@/Components/General/Text/Text";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <Text tag="h2" type="h2" variant="white" size={19}>
          Company Name
        </Text>
        <Text tag="p" type="p" size={16}>
          Be ID: BE007054
        </Text>
      </div>
      <div className={styles.sidebar__list}>
        {sidebarRoutes.map((data, index) => {
          return (
            <SidebarItem
              to={data.path || ""}
              label={data.name}
              state={data.state}
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
