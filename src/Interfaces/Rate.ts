import { CurrencyInfo } from "@/Api/endpoints/companyData.endpoint";

export interface IRate {
  id: string;
  rate: number;
  rateWithCommission: number;
  withoutCommission: number;
  destinationAmount: number;
  commission: number;
  percentageFee: number;
  directRate: {
    amountFrom: {
      value: number;
      currency: CurrencyInfo;
    };
    amountTo: {
      value: number;
      currency: CurrencyInfo;
    };
  };
}
