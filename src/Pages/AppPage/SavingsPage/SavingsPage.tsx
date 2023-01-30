import { useState } from "react";
import { Outlet } from "react-router-dom";
import SavingPageContext, { SavingFormType } from "./SavingPageContext";

const showAlert = false;
const SavingsPage = () => {
  const [form, setForm] = useState<SavingFormType>();
  return (
    <SavingPageContext.Provider value={{ form, setForm }}>
      <Outlet></Outlet>
    </SavingPageContext.Provider>
  );
};

export default SavingsPage;
