import React from "react";
import SidebarItem from "../../Components/General/SibarItem/SidebarItem";
import TestIcon from "../../Components/Icons/TestIcon";
import "./Sidebar.scss";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__list">
        <SidebarItem to="/" label="Overview">
          <TestIcon />
        </SidebarItem>
        <SidebarItem to="/" label="Transactions">
          <TestIcon />
        </SidebarItem>
        <SidebarItem to="/" label="Be Network">
          <TestIcon />
        </SidebarItem>
        <SidebarItem to="/" label="Foreign Exchange">
          <TestIcon />
        </SidebarItem>
        <SidebarItem to="/" label="Bank Transfers">
          <TestIcon />
        </SidebarItem>
        <SidebarItem to="/" label="Savings">
          <TestIcon />
        </SidebarItem>
        <SidebarItem to="/" label="Top Up">
          <TestIcon />
        </SidebarItem>{" "}
        <SidebarItem to="/" label="Crypto Deposit">
          <TestIcon />
        </SidebarItem>{" "}
        <SidebarItem to="/" label="Crypto Withdrawal">
          <TestIcon />
        </SidebarItem>
        <SidebarItem to="/" label="Crypto Exchange">
          <TestIcon />
        </SidebarItem>
        <SidebarItem to="/" label="OTC">
          <TestIcon />
        </SidebarItem>
      </div>
    </div>
  );
}
