import {ECurrency} from "@/Interfaces/Currency";

export interface IAccount {
  id: string;
  currency: ECurrency;
  balance: number;
  lockBalance: number;
  isDefaultCurrency: boolean;
  currencyInfo: object;
  usdBalance: object
  userId: string;
  createdAt: string;
  updatedAt: string;
}
