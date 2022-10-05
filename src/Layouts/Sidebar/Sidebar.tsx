import React from "react";
import Icon from "../../Components/General/Icon/Icon";
import SidebarItem from "../../Components/General/SibarItem/SidebarItem";
import TestIcon from "../../Components/Icons/TestIcon";
import "./Sidebar.scss";
const datas = [
  { label: "Overview", icon: "dashboard", path: "/" },
  { label: "Transactions", icon: "transactions", path: "/" },
  { label: "Be Network", icon: "network", path: "/" },
  { label: "Foreign Exchange", icon: "transfert-intl", path: "/" },
  { label: "Bank Transfers", icon: "bank-transfert", path: "/" },
  { label: "Savings", icon: "saving-deposit", path: "/" },
  { label: "Top Up", icon: "top-up", path: "/" },
  { label: "Crypto Deposit", icon: "crypto-deposit", path: "/" },
  { label: "Crypto Withdrawal", icon: "crypto-withdraw", path: "/" },
  { label: "Crypto Exchange", icon: "crypto-exchange", path: "/" },
  { label: "OTC", icon: "otc", path: "/" },
];
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__list">
        {datas.map((data) => {
          return (
            <SidebarItem to={data.path} label={data.label}>
              <Icon icon={data.icon} color="#fff" />
            </SidebarItem>
          );
        })}
      </div>
    </div>
  );
}
