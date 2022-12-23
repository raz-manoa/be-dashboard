import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BankTransfertPageContext, {
  BankTransfertFormType,
} from "./BankTransfertPageContext";

const BankTransfertPage = () => {
  const [form, setForm] = useState<BankTransfertFormType>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!form) {
      navigate("");
    }
  }, []);

  return (
    <BankTransfertPageContext.Provider value={{ form, setForm }}>
      <Outlet></Outlet>
    </BankTransfertPageContext.Provider>
  );
};

export default BankTransfertPage;
