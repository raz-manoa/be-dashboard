import authEndpoint from "./endpoints/auth.endpoint";
import transactionsEndpoint from "./endpoints/transactions.endpoint";

export default {
  transactions: transactionsEndpoint,
  auth: authEndpoint,
};
