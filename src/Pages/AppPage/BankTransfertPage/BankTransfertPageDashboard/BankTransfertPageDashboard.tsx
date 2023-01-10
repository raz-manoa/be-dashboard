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
import { useBankTransfertPageContext } from "../BankTransfertPageContext";

const BankTransfertPageDashboard = () => {
  useSetAppLayoutTitle("Bank Transfer");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);
  const { setForm } = useBankTransfertPageContext();

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
      selectTo={accounts}
      loading={isLoading}
      onSubmit={handleSubmit}
      allowSameCurrency={true}
    />
  );
};

export default BankTransfertPageDashboard;
