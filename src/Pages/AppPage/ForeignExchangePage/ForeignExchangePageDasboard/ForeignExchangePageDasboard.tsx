import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import {
  CardAmount,
  ICardAmountForm,
} from "@/Components/Display/CardAmount/CardAmount";
import companyDataEndpoint, {
  AccountsResponse,
} from "@/Api/endpoints/companyData.endpoint";
import { useEffect, useState } from "react";
import { useForeignExchangePageContext } from "../ForeignExchangePageContext";

const ForeignExchangePageDashboard = () => {
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
    companyDataEndpoint.mocks
      // TODO: set account id
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
      onSubmit={handleSubmit}
      loading={isLoading}
    />
  );
};

export default ForeignExchangePageDashboard;
