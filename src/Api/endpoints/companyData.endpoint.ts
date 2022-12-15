import { ITransaction } from "@/Interfaces/Transaction";
import apiInstance from "../apiInstance";
import {IAccount} from "@/Interfaces/Account";
import {IUser} from "@/Interfaces/IUser";
import {ECurrency} from "@/Interfaces/Currency";
import {ISaving} from "@/Pages/AppPage/DashboardPage/DashboarPageSavingAccount/SavingCard/SavingCard";

export interface IGetAllTransactionArgs {
  page?: number;
  perPage?: number;
}
interface CurrencyInfo {
  id: string;
  sign: string;
  name: string;
  isCrypto: boolean;
  precision: number;
  countryCode: string | null
}

interface UsdBalance {
  currency: ECurrency;
  value: number;
}

export interface AccountsResponse extends IAccount {
  currencyInfo: CurrencyInfo;
  usdBalance: UsdBalance;
}

const companyDataEndpoint = {
  getTransactions: async (id: string): Promise<ITransaction[]> => {
    return apiInstance.get(`api/admin/users/${id}/transactions?limit=10`)
        .then(({ data }) => data.transactions);
  },
  getSavingsTransactions: async (id: string): Promise<ITransaction[]> => {
    return apiInstance.get(`api/admin/users/${id}/savings?limit=10`)
        .then(({ data }) => data.transactions);
  },
  getSavings: async (id: string): Promise<ISaving[]> => {
    return apiInstance.get<ISaving[]>(`api/admin/companies/${id}/savings`)
        .then(({ data }) => data);
  },
  getAccounts: async (id: string): Promise<AccountsResponse[]> => {
    return apiInstance.get(`api/admin/companies/${id}/accounts`)
        .then(({ data }) => data.accounts);
  },
  getCompany: async (id: string): Promise<IUser> => {
    return apiInstance.get<{ company: IUser }>(`api/admin/companies/${id}`)
        .then(({ data }) => data.company);
  },
  getAccounts1: async (id: string): Promise<ITransaction[]> => {
    return apiInstance.get(`api/admin/users/${id}/transactions?limit=10`)
        .then(({ data }) => data.transactions);
  },
  getRates: async (id: string, currencyFrom: string, currencyTo: string, amount: number): Promise<any> => {
    return apiInstance
        .get(`api/admin/companies/${id}/exchange/rates?currencyFrom=${currencyFrom}&currencyTo=${currencyTo}&amount=${amount}`)
        .then(({ data }) => data);
  }

};

export default companyDataEndpoint;
