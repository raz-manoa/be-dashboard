import Text from "@/Components/General/Text/Text";
import React, { ReactNode } from "react";
import { IRoute } from "../Interfaces/Routes";

interface ISidebarRoute extends IRoute {
  icon: string;
  state?: string[];
}

const DashboardPage = React.lazy(
  () => import("../Pages/AppPage/DashboardPage/DashboardPage")
);
const TransactionPage = React.lazy(
  () => import("../Pages/AppPage/TransactionPage/TransactionPage")
);
const BeNetworkPage = React.lazy(
  () => import("../Pages/AppPage/BeNetworkPage/BeNetworkPage")
);
const ForeignExchangePage = React.lazy(
  () => import("../Pages/AppPage/ForeignExchangePage/ForeignExchangePage")
);
const BankTransfertPage = React.lazy(
  () => import("../Pages/AppPage/BankTransfertPage/BankTransfertPage")
);
const SavingsPage = React.lazy(
  () => import("../Pages/AppPage/SavingsPage/SavingsPage")
);
const TopUpPage = React.lazy(
  () => import("../Pages/AppPage/TopUpPage/TopUpPage")
);
const CryptoDepositPage = React.lazy(
  () => import("../Pages/AppPage/CryptoDepositPage/CryptoDepositPage")
);
const CryptoWithdrawal = React.lazy(
  () => import("../Pages/AppPage/CryptoWithdrawal/CryptoWithdrawal")
);
const CryptoExchangePage = React.lazy(
  () => import("../Pages/AppPage/CryptoExchangePage/CryptoExchangePage")
);
const OtcPage = React.lazy(() => import("../Pages/AppPage/OtcPage/OtcPage"));

// routes
const sidebarRoutes: ISidebarRoute[] = [
  {
    index: true,
    path: "dashboard",
    icon: "dashboard",
    name: "Overview",
    component: DashboardPage,
  },
  {
    path: "transactions",
    name: "Transactions",
    icon: "transactions",
    component: TransactionPage,
  },
  { path: "", name: "Be Network", icon: "network", component: BeNetworkPage },
  {
    path: "foreign-exchange",
    name: "Foreign Exchange",
    icon: "transfert-intl",
    component: ForeignExchangePage,
  },
  {
    path: "bank-transfert",
    name: "Bank Transfert",
    icon: "bank-transfert",
    component: BankTransfertPage,
  },
  {
    path: "savings",
    name: "Savings",
    icon: "saving-deposit",
    component: SavingsPage,
  },
  { path: "top-up", name: "Top Up", icon: "top-up", component: TopUpPage },
  {
    path: "crypto-deposit",
    name: "Crypto Deposit",
    icon: "crypto-deposit",
    component: CryptoDepositPage,
  },
  {
    path: "crypto-withdraw",
    name: "Crypto Withdrawal",
    icon: "crypto-withdraw",
    component: CryptoWithdrawal,
  },
  {
    path: "crypto-exchange",
    name: "Crypto Exchange",
    icon: "crypto-exchange",
    component: CryptoExchangePage,
  },
  { path: "otc", name: "OTC", icon: "otc", component: OtcPage },
];

export default sidebarRoutes;
