export interface ITransaction {
  id: string;
  name?: string;
  type?: string;
  beId?: string;
  status?: string;
  fee?: number;
  amount: {
    value: number;
    currency: string;
  };
  createdAt?: string;
}
