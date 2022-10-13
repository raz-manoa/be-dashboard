import { SavingPageTableData } from "./SavingPageTableConfig";

export default function useSavingPageTableLogic(): SavingPageTableData[] {
  return [
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00",
      transactionStatus: "completed",
      amount: -24.0,
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings deposit ",
      transactionFee: "0.00",
      transactionStatus: "completed",
      amount: -24.0,
      timestamp: "11/06/2022",
    },
    {
      name: "John smith",
      transactionType: "Savings withdrawal",
      transactionFee: "0.00",
      transactionStatus: "completed",
      amount: -24.0,
      timestamp: "11/06/2022",
    },
  ];
}
