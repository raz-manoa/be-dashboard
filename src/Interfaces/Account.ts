import {ECurrency} from "@/Interfaces/Currency";

export interface IAccount {
  id: string;
  currency: ECurrency;
  balance: number;
  lockBalance: number;
  isDefaultCurrency: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
