import { ITransaction } from "@/Interfaces/Transaction";
import apiInstance from "../apiInstance";
import { IAccount } from "@/Interfaces/Account";
import { IUser } from "@/Interfaces/IUser";
import { ECurrency } from "@/Interfaces/Currency";
import { ISaving } from "@/Pages/AppPage/DashboardPage/DashboarPageSavingAccount/SavingCard/SavingCard";
import { accountsMock } from "../mock/account.mock";
import { IRate } from "@/Interfaces/Rate";
import { ICountry } from "@/Interfaces/Country";
import { countriesMock } from "../mock/country.mock";
import { BeNetworkFormType } from "@/Pages/AppPage/BeNetworkPage/BeNetworkPageContext";
import { ITopUpItem } from "@/Pages/AppPage/TopUpPage/TopUpPage";

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
  icon?: string;
}

interface UsdBalance {
  currency: ECurrency;
  value: number;
}

export interface AccountsResponse extends IAccount {
  currencyInfo?: CurrencyInfo;
  usdBalance?: UsdBalance;
}

class CompanyDataEndpoint {
  getTransactions = async (id: string): Promise<ITransaction[]> => {
    return apiInstance
      .get(`api/admin/users/${id}/transactions?limit=10`)
      .then(({ data }) => data.transactions);
  };
  getSavingsTransactions = async (id: string): Promise<ITransaction[]> => {
    return apiInstance
      .get(`api/admin/users/${id}/savings?limit=10`)
      .then(({ data }) => data.transactions);
  };
  getSavings = async (id: string): Promise<ISaving[]> => {
    return apiInstance
      .get<ISaving[]>(`api/admin/companies/${id}/savings`)
      .then(({ data }) => data);
  };
  getAccounts = async (id: string): Promise<AccountsResponse[]> => {
    return apiInstance
      .get(`api/admin/companies/${id}/accounts`)
      .then(({ data }) => data.accounts);
  };
  getMyAccounts = (): Promise<AccountsResponse[]> => {
    const companyId = localStorage.getItem("companyId") || "";
    return this.getAccounts(companyId);
  };
  getCompany = async (id: string): Promise<IUser> => {
    return apiInstance
      .get<{ company: IUser }>(`api/admin/companies/${id}`)
      .then(({ data }) => data.company);
  };
  getAccounts1 = async (id: string): Promise<ITransaction[]> => {
    return apiInstance
      .get(`api/admin/users/${id}/transactions?limit=10`)
      .then(({ data }) => data.transactions);
  };
  getRates = async (
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
  };
  cryptoExchange = async (id: string, body: any): Promise<ITransaction[]> => {
    return apiInstance
      .post(`api/admin/companies/${id}/crypto/exchange`, body)
      .then(({ data }) => data);
  };
  exchange = async (id: string, body: any): Promise<ITransaction[]> => {
    return apiInstance
      .post(`api/admin/companies/${id}/exchange`, body)
      .then(({ data }) => data);
  };
  createBankTransfer = async (
    id: string,
    body: any
  ): Promise<ITransaction[]> => {
    return apiInstance
      .post(`api/admin/companies/${id}/otherbank`, body)
      .then(({ data }) => data);
  };
  country = async (): Promise<ICountry[]> => {
    const response = await apiInstance.get(`api/admin/countries`);
    return response.data && response.data.countries
      ? response.data.countries
      : countriesMock;
  };
  getTopUP = async (): Promise<{ topUpOptions: ITopUpItem[] }> => {
    return apiInstance.get(`api/admin/top-up-options`).then(({ data }) => data);
  };
  getCryptoWithdrawalFee = async (
    id: string,
    coin: string,
    amount: number,
    address: string
  ): Promise<{ success: true; fee: number } | { success: false }> => {
    return apiInstance
      .get(
        `api/admin/companies/${id}/crypto/send/fee?coin=${coin}&amount=${amount}&address=${address}`
      )
      .then(({ data }) => data);
  };
  cryptoWithdraw = async (id: string, body: any): Promise<ITransaction[]> => {
    return apiInstance
      .post(`api/admin/companies/${id}/crypto/send`, body)
      .then(({ data }) => data);
  };
  fetchIdentity = async (
    id: string,
    search: any
  ): Promise<{
    id: string;
    identity: string;
    success?: boolean;
  }> => {
    return apiInstance
      .post(`api/admin/companies/phone/recipient`, { search })
      .then(({ data }) => data);
  };
  sendBeNetwork = async (id: string, body: BeNetworkFormType): Promise<any> => {
    return apiInstance
      .post(`api/admin/companies/benetwork`, body)
      .then(({ data }) => data);
  };
  mocks = {
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
  };
}

const companyDataEndpoint = new CompanyDataEndpoint();

export default companyDataEndpoint;
