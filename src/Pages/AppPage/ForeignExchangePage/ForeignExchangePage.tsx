import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ForeignExchangePageContext, {
  ForeignExchangeFormType,
} from "./ForeignExchangePageContext";

const ForeignExchangePage = () => {
  useSetAppLayoutTitle("Foreign Exchange (FX)");

  const [form, setForm] = useState<ForeignExchangeFormType>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!form) {
      navigate("");
    } else {
      navigate("review");
    }
  }, []);

  return (
    <ForeignExchangePageContext.Provider value={{ form, setForm }}>
      <Outlet></Outlet>
    </ForeignExchangePageContext.Provider>
  );
};

export default ForeignExchangePage;
