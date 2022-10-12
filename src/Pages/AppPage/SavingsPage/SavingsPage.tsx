import Alert from "antd/es/alert";
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./SavingPage.module.scss";
import SavingPageAdd from "./SavingPageDashboard/SavingPageAdd/SavingPageAdd";
import SavingPageOffering from "./SavingPageDashboard/SavingPageOffering/SavingPageOffering";
import SavingPageTable from "./SavingPageDashboard/SavingPageTable/SavingPageTable";

const showAlert = false;
const SavingsPage = () => {
  return <Outlet></Outlet>;
};

export default SavingsPage;
