import { CurrencyInfo } from "@/Api/endpoints/companyData.endpoint";
import { ECurrency } from "@/Interfaces/Currency";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CryptoWithdrawalContext, {
  CryptoWithdrawalConfirmData,
  CryptoWithdrawalFormType,
} from "./CryptoWithdrawalContext";

const CryptoWithdrawal = () => {
  const [form, setForm] = useState<CryptoWithdrawalFormType>();
  const [confirmation, setConfirmation] =
    useState<CryptoWithdrawalConfirmData>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!form) {
      navigate("");
    } else {
      navigate("review");
    }
  }, []);

  return (
    <CryptoWithdrawalContext.Provider
      value={{ form, setForm, confirmation, setConfirmation }}
    >
      <Outlet></Outlet>
    </CryptoWithdrawalContext.Provider>
  );
};

export default CryptoWithdrawal;
