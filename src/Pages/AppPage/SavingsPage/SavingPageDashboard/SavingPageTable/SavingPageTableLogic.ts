import { SavingPageTableData } from "./SavingPageTableConfig";

export default function useSavingPageTableLogic(): {
  savingList: SavingPageTableData[];
} {
  const savingList = [
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "-24.00 USD",
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings deposit ",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "110.00 EUR",
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "200.00 USD",
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "-90.00 EUR",
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "-100.00 EUR",
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "200.00 USD",
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "-90.00 EUR",
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "-100.00 EUR",
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "200.00 USD",
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "-90.00 EUR",
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00 USD",
      transactionStatus: "completed",
      amount: "-100.00 EUR",
      timestamp: "11/06/2022",
    },
  ];

  return { savingList };
}
