import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import {
  ICardAmountForm,
} from "@/Components/Display/CardAmount/CardAmount";
import companyDataEndpoint, {
  AccountsResponse,
  CurrencyInfo,
} from "@/Api/endpoints/companyData.endpoint";
import { useState, useEffect, useMemo } from "react";
import { ECurrency } from "@/Interfaces/Currency";
import { useCryptoExchangePageContext } from "../CryptoExchangePageContext";
import {FxCardAmount} from "@/Components/Display/CardAmount/FxCardAmount";

const cryptoData: CurrencyInfo[] = [
  {
    id: ECurrency.SOL,
    sign: "SOL",
    name: "Solana",
    isCrypto: true,
    precision: 8,
  },
  {
    id: ECurrency.USDC,
    sign: "USDC",
    name: "USD//Coin",
    isCrypto: true,
    precision: 8,
  },
  {
    id: ECurrency.BTC,
    sign: "₿",
    name: "Bitcoin",
    isCrypto: true,
    precision: 8,
  },
  {
    id: ECurrency.ETH,
    sign: "Ξ",
    name: "Ethereum",
    isCrypto: true,
    precision: 8,
  },
];

const CryptoExchangePageDashboard = () => {
  useSetAppLayoutTitle("Crypto Exchange");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);
  const { setForm } = useCryptoExchangePageContext();

  const navigate = useNavigate();

  const handleSubmit = (data: ICardAmountForm) => {
    if (setForm) {
      setForm(data);
    }
    navigate("review");
  };

  useEffect(() => {
    setIsLoading(true);
    // TODO: set account id
    const companyId = localStorage.getItem('companyId') || '';
    companyDataEndpoint
      .getAccounts(companyId)
      .then((data) => {
        if (data) {
          setAccounts(data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  const availableCurrency = useMemo(() => {
    const availableSign: ECurrency[] = cryptoData.map((item) => item.id);
    return accounts.filter((account) =>
      availableSign.includes(account.currency)
    );
  }, [cryptoData, accounts]);

  return (
    <FxCardAmount
      title="Exchange Amount"
      selectFrom={availableCurrency}
      selectTo={availableCurrency}
      onSubmit={handleSubmit}
      showRate={true}
      loading={isLoading}
    />
  );
};

export default CryptoExchangePageDashboard;
