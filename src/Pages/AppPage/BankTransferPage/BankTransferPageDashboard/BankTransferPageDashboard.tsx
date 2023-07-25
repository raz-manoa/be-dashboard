import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import {
  CardAmount,
  ICardAmountForm,
} from "@/Components/Display/CardAmount/CardAmount";
import companyDataEndpoint, {
  AccountsResponse,
} from "@/Api/endpoints/companyData.endpoint";
import {useState, useEffect, useMemo} from "react";
import { useBankTransferPageContext } from "../BankTransferPageContext";
import Alert from "antd/es/alert";
import {ECurrency} from "@/Interfaces/Currency";

const BankTransferPageDashboard = () => {
  useSetAppLayoutTitle("Bank Transfer");
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);
  const [error, setError] = useState<string>('');
  const { setForm } = useBankTransferPageContext();

  const navigate = useNavigate();

  const handleSubmit = (data: ICardAmountForm) => {
    if (error.length === 0) {
      if (setForm) {
        setForm(data);
      }
      navigate("add-beneficiary");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const companyId = localStorage.getItem("companyId") || "";

    companyDataEndpoint
      .getAccounts(companyId)
      .then((data) => {
        console.log("companyId", data);
        if (data) {
          const accs = data.filter(item => !item.currencyInfo?.isCrypto);
          setAccounts(accs);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
      <div>
        {error && error.length > 0 && (
            <Alert message={error} type="error" className="mb-8" />
        )}
        <CardAmount
            title="Transfer amount"
            selectFrom={accounts}
            selectTo={allMockedAccs}
            onSubmit={handleSubmit}
            loading={isLoading}
            setError={setError}
            error={error}
        />
      </div>
  );
};

export default BankTransferPageDashboard;
