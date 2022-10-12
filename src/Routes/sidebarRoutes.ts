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
const BankTransfertPageDashboard = React.lazy(
  () =>
    import(
      "@/Pages/AppPage/BankTransfertPage/BankTransfertPageDashboard/BankTransfertPageDashboard"
    )
);
const BankTransfertPageAddBeneficiary = React.lazy(
  () =>
    import(
      "@/Pages/AppPage/BankTransfertPage/BankTransfertPageDashboard/BankTransfertPageAddBeneficiary/BankTransfertPageAddBeneficiary"
    )
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

const SavingPageReview = React.lazy(
  () => import("../Pages/AppPage/SavingsPage/SavingPageReview/SavingPageReview")
);
const SavingPageConfirm = React.lazy(
  () => import("../Pages/AppPage/SavingsPage/SavingPageSucess/SavingPageSucess")
);
const SavingPageDashboard = React.lazy(
  () =>
    import(
      "@/Pages/AppPage/SavingsPage/SavingPageDashboard/SavingPageDashboard"
    )
);

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
  {
    path: "be-network",
    name: "Be Network",
    icon: "network",
    component: BeNetworkPage,
  },
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
    children: [
      {
        path: "",
        name: "bank-transfert-dashboard",
        component: BankTransfertPageDashboard,
      },
      {
        path: "add-beneficiary",
        name: "add-beneficiary",
        component: BankTransfertPageAddBeneficiary,
      },
      {
        path: "bank-review",
        name: "bank-review",
        component: BankTransfertPageAddBeneficiary,
      },
    ],
  },
  {
    path: "savings",
    name: "Savings",
    icon: "saving-deposit",
    component: SavingsPage,
    children: [
      {
        path: "",
        name: "savings-dashboard",
        component: SavingPageDashboard,
      },
      {
        path: "review",
        name: "savings-review",
        component: SavingPageReview,
      },
      {
        path: "confirm",
        name: "savings-confirm",
        component: SavingPageConfirm,
      },
    ],
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
