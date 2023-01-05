import { ITransaction } from "@/Interfaces/Transaction";
import apiInstance from "../apiInstance";
import { IAccount } from "@/Interfaces/Account";
import { IUser } from "@/Interfaces/IUser";
import { ECurrency } from "@/Interfaces/Currency";
import { ISaving } from "@/Pages/AppPage/DashboardPage/DashboarPageSavingAccount/SavingCard/SavingCard";
import { accountsMock } from "../mock/account.mock";
import { IRate } from "@/Interfaces/Rate";

export interface IGetAllTransactionArgs {
  page?: number;
  perPage?: number;
}
export interface CurrencyInfo {
  id: ECurrency;
  sign: string;
  name: string;
  isCrypto: boolean;
  precision: number;
  countryCode?: string | null;
}

interface UsdBalance {
  currency: ECurrency;
  value: number;
}

export interface AccountsResponse extends IAccount {
  currencyInfo?: CurrencyInfo;
  usdBalance?: UsdBalance;
}

const companyDataEndpoint = {
  getTransactions: async (id: string): Promise<ITransaction[]> => {
    return apiInstance
      .get(`api/admin/users/${id}/transactions?limit=10`)
      .then(({ data }) => data.transactions);
  },
  getSavingsTransactions: async (id: string): Promise<ITransaction[]> => {
    return apiInstance
      .get(`api/admin/users/${id}/savings?limit=10`)
      .then(({ data }) => data.transactions);
  },
  getSavings: async (id: string): Promise<ISaving[]> => {
    return apiInstance
      .get<ISaving[]>(`api/admin/companies/${id}/savings`)
      .then(({ data }) => data);
  },
  getAccounts: async (id: string): Promise<AccountsResponse[]> => {
    return apiInstance
      .get(`api/admin/companies/${id}/accounts`)
      .then(({ data }) => data.accounts);
  },
  getCompany: async (id: string): Promise<IUser> => {
    return apiInstance
      .get<{ company: IUser }>(`api/admin/companies/${id}`)
      .then(({ data }) => data.company);
  },
  getAccounts1: async (id: string): Promise<ITransaction[]> => {
    return apiInstance
      .get(`api/admin/users/${id}/transactions?limit=10`)
      .then(({ data }) => data.transactions);
  },
  getRates: async (
    id: string,
    currencyFrom: string,
    currencyTo: string,
    amount: number
  ): Promise<IRate> => {
    return apiInstance
      .get(
        `api/admin/companies/${id}/exchange/rates?currencyFrom=${currencyFrom}&currencyTo=${currencyTo}&amount=${amount}`
      )
      .then(({ data }) => data);
  },
  cryptoExchange: async (id: string, body: any): Promise<ITransaction[]> => {
    return apiInstance
      .post(`api/admin/companies/${id}/crypto/exchange`, body)
      .then(({ data }) => data);
  },
  exchange: async (id: string, body: any): Promise<ITransaction[]> => {
    return apiInstance
        .post(`api/admin/companies/${id}/exchange`, body)
        .then(({ data }) => data);
  },
  mocks: {
    getAccounts: async (id: string): Promise<AccountsResponse[]> => {
      return Promise.resolve(accountsMock);
    },
    getRates: async (
      id: string,
      currencyFrom: string,
      currencyTo: string,
      amount: number
    ): Promise<IRate> => {
      return Promise.resolve({
        id: "1",
        rate: 1954.09389006,
        rateWithCommission: 1563.2751120479998,
        withoutCommission: 1,
        destinationAmount: 1563.275112048,
        commission: 0.2,
        percentageFee: 20,
        directRate: {
          amountFrom: {
            value: 0.0006396826715228198,
            currency: {
              id: ECurrency.ETH,
              sign: "Ξ",
              name: "Ethereum",
              isCrypto: true,
              precision: 8,
            },
          },
          amountTo: {
            value: 1,
            currency: {
              id: ECurrency.USDC,
              sign: "USDC",
              name: "USD//Coin",
              isCrypto: true,
              precision: 8,
            },
          },
        },
      });
    },
  },
};

export default companyDataEndpoint;
