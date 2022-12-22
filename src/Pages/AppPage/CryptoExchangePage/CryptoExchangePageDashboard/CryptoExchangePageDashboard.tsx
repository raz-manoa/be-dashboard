import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import { CardAmount } from "@/Components/Display/CardAmount/CardAmount";
import companyDataEndpoint, {
  AccountsResponse,
  CurrencyInfo,
} from "@/Api/endpoints/companyData.endpoint";
import { useState, useEffect, useMemo } from "react";
import { ECurrency } from "@/Interfaces/Currency";

const currencyData = [
  { from: "1 BTC", to: "1.04 SOL" },
  { from: "1 SOL", to: "0.97 BTC" },
];

const cryptoData: CurrencyInfo[] = [
  {
    id: "SOL",
    sign: ECurrency.SOL,
    name: "Solana",
    isCrypto: true,
    precision: 8,
  },
  {
    id: "USDC",
    sign: ECurrency.USDC,
    name: "USD//Coin",
    isCrypto: true,
    precision: 8,
  },
  {
    id: "BTC",
    sign: ECurrency.BTC,
    name: "Bitcoin",
    isCrypto: true,
    precision: 8,
  },
  {
    id: "ETH",
    sign: ECurrency.ETH,
    name: "Ethereum",
    isCrypto: true,
    precision: 8,
  },
];

const CryptoExchangePageDashboard = () => {
  useSetAppLayoutTitle("Crypto Exchange");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);

  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    console.log(data);
    navigate("review");
  };

  useEffect(() => {
    setIsLoading(true);
    // TODO: set account id
    companyDataEndpoint.mocks
      .getAccounts("")
      .then((data) => {
        if (data) {
          setAccounts(data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  const availableCurrency = useMemo(() => {
    const availableSign: ECurrency[] = cryptoData.map((item) => item.sign);
    return accounts.filter((account) =>
      availableSign.includes(account.currency)
    );
  }, [cryptoData, accounts]);

  return (
    <CardAmount
      title="Amount"
      selectFrom={availableCurrency}
      selectTo={availableCurrency}
      currency={currencyData}
      transactionFee="0 USD"
      onSubmit={handleSubmit}
      loading={isLoading}
    />
  );
};

export default CryptoExchangePageDashboard;
