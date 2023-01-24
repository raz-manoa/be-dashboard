import {IAccount} from "@/Interfaces/Account";
import {IUser} from "@/Interfaces/IUser";

export interface ITransaction {
  icon?: string;
  transfer?: object;
  id: string;
  Account: IAccount,
  accountId: string;
  accountVersionType: string;
  currency: string;
  balance: number;
  lockBalance: number;
  originId: string;
  parentId: string
  transactionType: string;
  transactionFee: string;
  recipient: IUser;
  sender: IUser;
  status: string;
  Saving: object | null;
  BebankTransfer: object | null;
  Exchange: object | null;
  InviteTransfer: object | null;
  OtherBankTransfer: object | null;
  RemittanceTransfer: object | null;
  date: string;
  createdAt: string;
  updatedAt: string;
}
