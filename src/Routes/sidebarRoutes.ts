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
const ForeignExchangePageSuccess = React.lazy(
  () =>
    import(
      "../Pages/AppPage/ForeignExchangePage/ForeignExchangePageSuccess/ForeignExchangePageSuccess"
    )
);
const ForeignExchangePageReview = React.lazy(
  () =>
    import(
      "../Pages/AppPage/ForeignExchangePage/ForeignExchangePageReview/ForeignExchangePageReview"
    )
);
const ForeignExchangePageDasboard = React.lazy(
  () =>
    import(
      "../Pages/AppPage/ForeignExchangePage/ForeignExchangePageDasboard/ForeignExchangePageDasboard"
    )
);
const BankTransfertPage = React.lazy(
  () => import("../Pages/AppPage/BankTransfertPage/BankTransfertPage")
);
const BankTransfertPageSuccess = React.lazy(
  () =>
    import(
      "../Pages/AppPage/BankTransfertPage/BankTransfertPageSuccess/BankTransfertPageSucces"
    )
);
const BankTransfertPageReview = React.lazy(
  () =>
    import(
      "../Pages/AppPage/BankTransfertPage/BankTransfertPageReview/BankTransfertPageReview"
    )
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
const CryptoWithdrawalReview = React.lazy(
  () =>
    import(
      "../Pages/AppPage/CryptoWithdrawal/CryptoWithdrawalReview/CryptoWithdrawalReview"
    )
);
const CryptoWithdrawalDashboard = React.lazy(
  () =>
    import(
      "../Pages/AppPage/CryptoWithdrawal/CryptoWithdrawalDashboard/CryptoWithdrawalDashboard"
    )
);
const CryptoExchangePage = React.lazy(
  () => import("../Pages/AppPage/CryptoExchangePage/CryptoExchangePage")
);
const CryptoExchangePageConfirm = React.lazy(
  () =>
    import(
      "../Pages/AppPage/CryptoExchangePage/CryptoExchangePageSuccess/CryptoExchangePageSuccess"
    )
);
const CryptoExchangePageReview = React.lazy(
  () =>
    import(
      "../Pages/AppPage/CryptoExchangePage/CryptoExchangePageReview/CryptoExchangePageReview"
    )
);
const CryptoExchangePageDashboard = React.lazy(
  () =>
    import(
      "../Pages/AppPage/CryptoExchangePage/CryptoExchangePageDashboard/CryptoExchangePageDashboard"
    )
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

const RequestMoneyPage = React.lazy(
  () => import("@/Pages/AppPage/RequestMoneyPage/RequestMoneyPage")
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
    icon: "fx",
    component: ForeignExchangePage,
    children: [
      {
        path: "",
        name: "foreign-exchange-dashboard",
        component: ForeignExchangePageDasboard,
      },
      {
        path: "foreign-exchange-review",
        name: "foreign-exchange-review",
        component: ForeignExchangePageReview,
      },
      {
        path: "foreign-exchange-confirm",
        name: "foreign-exchange-confirm",
        component: ForeignExchangePageSuccess,
      },
    ],
  },
  {
    path: "request-money",
    name: "Request Money",
    icon: "resquest-money",
    component: RequestMoneyPage,
  },
  {
    path: "bank-transfer",
    name: "Bank Transfers",
    icon: "bank-transfert",
    component: BankTransfertPage,
    children: [
      {
        path: "",
        name: "bank-transfer-dashboard",
        component: BankTransfertPageDashboard,
      },
      {
        path: "add-beneficiary",
        name: "add-beneficiary",
        component: BankTransfertPageAddBeneficiary,
      },
      {
        path: "bank-review",
        name: "bank-review-confirm",
        component: BankTransfertPageReview,
      },
      {
        path: "bank-confirm",
        name: "bank-success-confirm",
        component: BankTransfertPageSuccess,
      },
    ],
  },
  {
    path: "savings",
    name: "Savings",
    icon: "saving",
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
    children: [
      {
        path: "",
        name: "crypto-withdrawal-dashboard",
        component: CryptoWithdrawalDashboard,
      },
      {
        path: "crypto-withdraw-review",
        name: "crypto-withdraw-review",
        component: CryptoWithdrawalReview,
      },
    ],
  },
  {
    path: "crypto-exchange",
    name: "Crypto Exchange",
    icon: "crypto-exchange",
    component: CryptoExchangePage,
    children: [
      {
        path: "",
        name: "crypto-exchange-dashboard",
        component: CryptoExchangePageDashboard,
      },
      {
        path: "crypto-exchange-review",
        name: "crypto-exchange-review",
        component: CryptoExchangePageReview,
      },
      {
        path: "crypto-exchange-confirm",
        name: "crypto-exchange-confirm",
        component: CryptoExchangePageConfirm,
      },
    ],
  },
  { path: "otc", name: "OTC", icon: "otc", component: OtcPage },
];

export default sidebarRoutes;
