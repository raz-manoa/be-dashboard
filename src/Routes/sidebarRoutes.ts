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
const BeNetworkPageConfirm = React.lazy(
  () =>
    import(
      "../Pages/AppPage/BeNetworkPage/BeNetworkPageConfirm/BeNetworkPageConfirm"
    )
);
const BeNetworkPageReview = React.lazy(
  () =>
    import(
      "../Pages/AppPage/BeNetworkPage/BeNetworkPageReview/BeNetworkPageReview"
    )
);
const BeNetworkPageDashboard = React.lazy(
  () =>
    import(
      "../Pages/AppPage/BeNetworkPage/BeNetworkPageDashboard/BeNetworkPageDashboard"
    )
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
      "@/Pages/AppPage/BankTransfertPage/BankTransfertPageAddBeneficiary/BankTransfertPageAddBeneficiary"
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
const CryptoWithdrawalSuccess = React.lazy(
  () =>
    import(
      "../Pages/AppPage/CryptoWithdrawal/CryptoWithdrawalSuccess/CryptoWithdrawalSuccess"
    )
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
const OtcPageSuccess = React.lazy(
  () => import("../Pages/AppPage/OtcPage/OtcPageSuccess/OtcPageSuccess")
);

const OtcPageReview = React.lazy(
  () => import("../Pages/AppPage/OtcPage/OtcPageReview/OtcPageReview")
);

const OtcPageDashboard = React.lazy(
  () => import("../Pages/AppPage/OtcPage/OtcPageDashboard/OtcPageDashboard")
);

const SavingPageDepositReview = React.lazy(
  () =>
    import(
      "../Pages/AppPage/SavingsPage/SavingPageReview/SavingPageDepositReview/SavingPageDepositReview"
    )
);
const SavingPageWithdrawalReview = React.lazy(
  () =>
    import(
      "../Pages/AppPage/SavingsPage/SavingPageReview/SavingPageWithdrawalReview/SavingPageWithdrawalReview"
    )
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
    children: [
      {
        path: "",
        name: "Be Network dashboard",
        component: BeNetworkPageDashboard,
      },
      {
        path: "review",
        name: "Be Network review",
        component: BeNetworkPageReview,
      },
      {
        path: "confirm",
        name: "Be Network confirm",
        component: BeNetworkPageConfirm,
      },
    ],
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
        path: "review",
        name: "foreign-exchange-review",
        component: ForeignExchangePageReview,
      },
      {
        path: "confirm",
        name: "foreign-exchange-confirm",
        component: ForeignExchangePageSuccess,
      },
    ],
  },
  /* {
    path: "request-money",
    name: "Request Money",
    icon: "resquest-money",
    component: RequestMoneyPage,
  }, */
  {
    path: "bank-transfer",
    name: "Bank Transfer",
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
        path: "review",
        name: "bank-review-confirm",
        component: BankTransfertPageReview,
      },
      {
        path: "confirm",
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
        path: "review-withdrawal",
        name: "savings-review",
        component: SavingPageWithdrawalReview,
      },
      {
        path: "review-deposit",
        name: "savings-review",
        component: SavingPageDepositReview,
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
        path: "review",
        name: "crypto-withdraw-review",
        component: CryptoWithdrawalReview,
      },
      {
        path: "confirm",
        name: "crypto-withdraw-success",
        component: CryptoWithdrawalSuccess,
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
        path: "review",
        name: "crypto-exchange-review",
        component: CryptoExchangePageReview,
      },
      {
        path: "confirm",
        name: "crypto-exchange-confirm",
        component: CryptoExchangePageConfirm,
      },
    ],
  },
  {
    path: "otc",
    name: "OTC",
    icon: "otc",
    component: OtcPage,
    children: [
      {
        path: "",
        name: "OTC-dashboard",
        component: OtcPageDashboard,
      },
      {
        path: "review",
        name: "OTC-review",
        component: OtcPageReview,
      },
      {
        path: "confirm",
        name: "OTC-success",
        component: OtcPageSuccess,
      },
    ],
  },
];

export default sidebarRoutes;
