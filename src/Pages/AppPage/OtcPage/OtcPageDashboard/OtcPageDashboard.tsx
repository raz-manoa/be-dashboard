import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import companyDataEndpoint, {
  AccountsResponse,
  CurrencyInfo,
} from "@/Api/endpoints/companyData.endpoint";
import {
  ICardAmountForm,
  CardAmount,
} from "@/Components/Display/CardAmount/CardAmount";
import { useState, useEffect, useMemo } from "react";
import { useOtcPagePageContext } from "../OtcPageContext";
import { ECurrency } from "@/Interfaces/Currency";
import Solana from "@/Assets/Logo/Solana.svg";

const cryptoData: { [c in ECurrency]?: CurrencyInfo } = {
  [ECurrency.USDC]: {
    id: ECurrency.USDC,
    sign: "USDC",
    name: "USDC",
    isCrypto: true,
    precision: 8,
    // icon: Solana,
  },
  [ECurrency.USD]: {
    id: ECurrency.USD,
    sign: "USD",
    name: "USD",
    isCrypto: true,
    precision: 8,
    // icon: ,
  },
  [ECurrency.ZAR]: {
    id: ECurrency.ZAR,
    sign: "ZAR",
    name: "ZAR",
    isCrypto: true,
    precision: 8,
    // icon: Zar,
  },
};
const OtcPageDashboard = () => {
  useSetAppLayoutTitle("OTC");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);
  const { setForm } = useOtcPagePageContext();

  const navigate = useNavigate();

  const handleSubmit = (data: ICardAmountForm) => {
    if (setForm) {
      setForm(data);
    }
    navigate({ pathname: "review" });
  };

  useEffect(() => {
    setIsLoading(true);
    companyDataEndpoint
      .getMyAccounts()
      .then((data) => {
        if (data) {
          setAccounts(data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  const availableCurrency = useMemo(() => {
    const availableSign: ECurrency[] = Object.keys(cryptoData) as ECurrency[];
    return accounts.filter((account) =>
      availableSign.includes(account.currency)
    );
  }, [cryptoData, accounts]);

  return (
    <CardAmount
      title="Amount"
      selectFrom={availableCurrency}
      selectTo={availableCurrency}
      onSubmit={handleSubmit}
      loading={isLoading}
      mayHave={ECurrency.USDC}
    />
  );
};

export default OtcPageDashboard;
