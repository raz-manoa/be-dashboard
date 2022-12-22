import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import {
  CardAmount,
  ICartAmountForm,
} from "@/Components/Display/CardAmount/CardAmount";
import companyDataEndpoint, {
  AccountsResponse,
} from "@/Api/endpoints/companyData.endpoint";
import { useState, useEffect } from "react";

const BankTransfertPageDashboard = () => {
  useSetAppLayoutTitle("Bank Transfer");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);

  const navigate = useNavigate();

  const handleSubmit = (data: ICartAmountForm) => {
    console.log(data);
    navigate("add-beneficiary");
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
      title="Transfer Amount"
      selectFrom={accounts}
      selectTo={accounts}
      transactionFee="0 USD"
      loading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};

export default BankTransfertPageDashboard;
