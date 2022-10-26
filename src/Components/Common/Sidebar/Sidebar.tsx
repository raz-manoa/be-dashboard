import React from "react";
import Icon from "@/Components/General/Icon/Icon";
import SidebarItem from "@/Components/General/SibarItem/SidebarItem";
import BeLogoWhite from "@/Assets/Be-logo-white.svg";
import styles from "./Sidebar.module.scss";
import sidebarRoutes from "@/Routes/sidebarRoutes";
import Text from "@/Components/General/Text/Text";
import Scrollbar from "@/Components/General/Scrollbar/Scrollbar";

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
        <Scrollbar style={{ padding: "0 16px" }}>
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
        </Scrollbar>
      </div>
      <div className={styles.be_logo}>
        <img src={BeLogoWhite} alt="be-logo" />
      </div>
    </div>
  );
}
