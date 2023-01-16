import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import companyDataEndpoint, {
  AccountsResponse,
} from "@/Api/endpoints/companyData.endpoint";
import {
  ICardAmountForm,
  CardAmount,
} from "@/Components/Display/CardAmount/CardAmount";
import { useState, useEffect } from "react";
import { useOtcPagePageContext } from "../OtcPageContext";

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

  return (
    <CardAmount
      title="Amount"
      selectFrom={accounts}
      selectTo={accounts}
      onSubmit={handleSubmit}
      loading={isLoading}
    />
  );
};

export default OtcPageDashboard;
