import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BankTransferPageContext, {
  BankTransferFormType,
} from "./BankTransferPageContext";

const BankTransferPage = () => {
  const [form, setForm] = useState<BankTransferFormType>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!form) {
      navigate("");
    }
  }, []);

  return (
    <BankTransferPageContext.Provider value={{ form, setForm }}>
      <Outlet></Outlet>
    </BankTransferPageContext.Provider>
  );
};

export default BankTransferPage;
