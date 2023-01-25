import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import {
  CardAmount,
  ICardAmountForm,
} from "@/Components/Display/CardAmount/CardAmount";
import companyDataEndpoint, {
  AccountsResponse,
} from "@/Api/endpoints/companyData.endpoint";
import { useState, useEffect } from "react";
import { useBankTransferPageContext } from "../BankTransferPageContext";

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
  const { setForm } = useBankTransferPageContext();

  const navigate = useNavigate();

  const handleSubmit = (data: ICardAmountForm) => {
    if (setForm) {
      setForm(data);
    }
    navigate("add-beneficiary");
  };

  useEffect(() => {
    setIsLoading(true);
    const companyId = localStorage.getItem("companyId") || "";

    companyDataEndpoint
      .getAccounts(companyId)
      .then((data) => {
        console.log("companyId", data);
        if (data) {
          setAccounts(data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <CardAmount
      title="Transfer Amount"
      selectFrom={accounts}
      selectTo={allMockedAccs}
      loading={isLoading}
      onSubmit={handleSubmit}
      allowSameCurrency={true}
    />
  );
};

export default BankTransferPageDashboard;
