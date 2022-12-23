import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CryptoExchangePageContext, {
  CryptoExchangeFormType,
} from "./CryptoExchangePageContext";

const CryptoExchangePage = () => {
  const [form, setForm] = useState<CryptoExchangeFormType>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!form) {
      navigate("");
    } else {
      navigate("review");
    }
  }, []);

  return (
    <CryptoExchangePageContext.Provider value={{ form, setForm }}>
      <Outlet></Outlet>
    </CryptoExchangePageContext.Provider>
  );
};

export default CryptoExchangePage;
