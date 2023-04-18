import React from "react";
import { IRoute } from "@/Interfaces/Routes";
import sidebarRoutes from "./sidebarRoutes";

// app page components
const TransactionPage = React.lazy(
  () => import("../Pages/AppPage/TransactionPage/TransactionPage")
);
const NotFoundPage = React.lazy(
  () => import("../Pages/NotFoundPage/NotFoundPage")
);
const StyleguidePage = React.lazy(
  () => import("../Pages/AppPage/StyleguidePage/StyleguidePage")
);
const SettingPage = React.lazy(
  () => import("../Pages/AppPage/SettingPage/SettingPage")
);

const appRoutes: IRoute[] = [
  ...sidebarRoutes,
  {
    path: `transactions`,
    name: "Transactions",
    component: TransactionPage,
  },
  {
    path: "styleguide",
    name: "styleguide",
    component: StyleguidePage,
  },
  { path: "setting", name: "setting", component: SettingPage },
  {
    path: `*`,
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

export default appRoutes;
