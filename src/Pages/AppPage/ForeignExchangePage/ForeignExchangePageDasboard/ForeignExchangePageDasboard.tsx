import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import {
  ICardAmountForm,
} from "@/Components/Display/CardAmount/CardAmount";
import companyDataEndpoint, {
  AccountsResponse,
} from "@/Api/endpoints/companyData.endpoint";
import { useEffect, useState } from "react";
import { useForeignExchangePageContext } from "../ForeignExchangePageContext";
import {ECurrency} from "@/Interfaces/Currency";
import { FxCardAmount } from "@/Components/Display/CardAmount/FxCardAmount";

const ForeignExchangePageDashboard = () => {
  const all = ['USD', 'EUR', 'GBP', 'CAD', 'BWP', 'GHS', 'GNF', 'KES', 'MGA', 'MUR', 'MWK', 'MZN', 'NAD', 'NGN', 'RWF', 'SCR', 'TZS', 'UGX', 'XAF', 'XOF', 'ZAR', 'ZMW'];
  const allMockedAccs = all.map(item => { return {
      id: item,
      userId: 'string',
      balance: 0,
      lockBalance: 0,
      currency: item,
      isDefaultCurrency: false,
      createdAt: 'string',
      updatedAt: 'string'
  }});
  useSetAppLayoutTitle("Foreign Exchange (FX)");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);
  const { setForm } = useForeignExchangePageContext();

  const navigate = useNavigate();

  const handleSubmit = (data: ICardAmountForm) => {
    if (setForm) {
      setForm(data);
    }
    navigate("review");
  };

  useEffect(() => {
    setIsLoading(true);
    const companyId = localStorage.getItem('companyId') || '';

    companyDataEndpoint
      .getAccounts(companyId)
      .then((data) => {
        if (data) {
            const accs = data.filter(item => !item.currencyInfo?.isCrypto);
            setAccounts(accs);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <FxCardAmount
      title="Exchange Amount"
      selectFrom={accounts}
      selectTo={allMockedAccs}
      onSubmit={handleSubmit}
      loading={isLoading}
    />
  );
};

export default ForeignExchangePageDashboard;
