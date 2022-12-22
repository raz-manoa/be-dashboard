import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import { CardAmount } from "@/Components/Display/CardAmount/CardAmount";
import companyDataEndpoint, {
  AccountsResponse,
} from "@/Api/endpoints/companyData.endpoint";
import { useState, useEffect } from "react";

const currencyData = [
  { from: "1 BTC", to: "1.04 SOL" },
  { from: "1 SOL", to: "0.97 BTC" },
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
    companyDataEndpoint.mocks
      .getAccounts("")
      .then((data) => {
        if (data) {
          setAccounts(data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <CardAmount
      title="Amount"
      selectFrom={accounts}
      selectTo={accounts}
      currency={currencyData}
      transactionFee="0 USD"
      onSubmit={handleSubmit}
      loading={isLoading}
    />
  );
};

export default CryptoExchangePageDashboard;
