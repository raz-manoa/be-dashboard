import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CryptoExchangePageContext, {
  CryptoExchangeFormType,
} from "./CryptoExchangePageContext";
import { CryptoExchangeConfirmData } from "./CryptoExchangePageSuccess/CryptoExchangePageSuccess";

const CryptoExchangePage = () => {
  const [form, setForm] = useState<CryptoExchangeFormType>();
  const [confirmation, setConfirmation] = useState<CryptoExchangeConfirmData>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!form) {
      navigate("");
    } else {
      navigate("review");
    }
  }, []);

  return (
    <CryptoExchangePageContext.Provider
      value={{ form, setForm, confirmation, setConfirmation }}
    >
      <Outlet></Outlet>
    </CryptoExchangePageContext.Provider>
  );
};

export default CryptoExchangePage;
