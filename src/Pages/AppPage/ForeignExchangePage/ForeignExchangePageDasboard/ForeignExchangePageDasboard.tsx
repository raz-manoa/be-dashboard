import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import {
  CardAmount,
  ICartAmountForm,
} from "@/Components/Display/CardAmount/CardAmount";
import companyDataEndpoint, {
  AccountsResponse,
} from "@/Api/endpoints/companyData.endpoint";
import { useEffect, useState } from "react";

const ForeignExchangePageDashboard = () => {
  useSetAppLayoutTitle("Foreign Exchange (FX)");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);

  const navigate = useNavigate();

  const handleSubmit = (data: ICartAmountForm) => {
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
      title="Exchange Amount"
      selectFrom={accounts}
      selectTo={accounts}
      transactionFee="0 USD"
      onSubmit={handleSubmit}
      loading={isLoading}
    />
  );
};

export default ForeignExchangePageDashboard;
