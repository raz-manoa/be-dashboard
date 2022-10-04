import React from "react";
import { IRoute } from "../Interfaces/Routes";

// app page components
const DashboardPage = React.lazy(
  () => import("../Pages/AppPage/DashboardPage/DashboardPage")
);
const TransactionPage = React.lazy(
  () => import("../Pages/AppPage/TransactionPage/TransactionPage")
);
const NotFoundPage = React.lazy(
  () => import("../Pages/NotFoundPage/NotFoundPage")
);

const appRoutes: IRoute[] = [
  {
    index: true,
    path: `dashboard`,
    name: "Dashboard",
    component: DashboardPage,
  },
  {
    path: `transactions`,
    name: "Transactions",
    component: TransactionPage,
  },
  {
    path: `*`,
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

export default appRoutes;
