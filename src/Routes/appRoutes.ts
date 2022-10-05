import React from "react";
import { IRoute } from "../Interfaces/Routes";
import StyleguidePage from "../Pages/StyleguidePage/StyleguidePage";

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
const Styleguide = React.lazy(
  () => import("../Pages/StyleguidePage/StyleguidePage")
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
    index: true,
    path: "styleguide",
    name: "styleguide",
    component: Styleguide,
  },
  {
    path: `*`,
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

export default appRoutes;
