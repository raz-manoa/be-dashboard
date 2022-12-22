import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import { CardAmount } from "@/Components/Display/CardAmount/CardAmount";

const accounts = [
  {
    id: "ea8185b3-9ce4-4a34-bc2e-b12ab53862af",
    userId: "490bc618-6006-4409-afdd-a53e917b36b9",
    balance: 361.40968870006,
    lockBalance: 219497.452535665,
    currency: "USD",
    isDefaultCurrency: true,
    createdAt: "2020-12-10T16:28:56.697Z",
    updatedAt: "2022-12-18T23:21:34.715Z",
  },
  {
    id: "10fa3454-0c1c-4445-b553-b6a64fa6e0b3",
    userId: "490bc618-6006-4409-afdd-a53e917b36b9",
    balance: 19924.868586236,
    lockBalance: 125116.507160564,
    currency: "EUR",
    isDefaultCurrency: false,
    createdAt: "2020-09-11T14:31:51.758Z",
    updatedAt: "2022-12-18T23:21:34.586Z",
  },
  {
    id: "de1ea2dd-0907-4a54-a2e4-2b0a66b88ae8",
    userId: "490bc618-6006-4409-afdd-a53e917b36b9",
    balance: 0.54342546,
    lockBalance: 2.49001361117932,
    currency: "BTC",
    isDefaultCurrency: false,
    createdAt: "2020-12-17T15:28:27.554Z",
    updatedAt: "2022-02-04T09:45:46.047Z",
  },
];

const ForeignExchangePageDashboard = () => {
  useSetAppLayoutTitle("Foreign Exchange (FX)");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("review");
    console.log(">>>>>>ato za eee");
  };
  return (
    <CardAmount
      title="Exchange Amount"
      selectFrom={accounts}
      selectTo={accounts}
      transactionFee="0 USD"
      onSubmit={handleSubmit}
      path="review"
    />
  );
};

export default ForeignExchangePageDashboard;
