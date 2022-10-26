import { ITransaction } from "@/Interfaces/Transaction";
import { AxiosResponse } from "axios";
import apiInstance from "../apiInstance";
import queryString from "query-string";

export interface IGetAllTransactionArgs {
  page?: number;
  perPage?: number;
}

type IGetAllTransactionResponse = ITransaction[];

const transactionsEndpoint = {
  getAll: async (
    args: IGetAllTransactionArgs = {}
  ): Promise<AxiosResponse<IGetAllTransactionResponse>> => {
    return apiInstance.get<IGetAllTransactionResponse>(
      `/transactions?${queryString.stringify(args)}`
    );
  },
};

export default transactionsEndpoint;
