import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import BeNetworkPageContext, {
  BeNetworkConfirmation,
  BeNetworkFormType,
} from "./BeNetworkPageContext";

const BeNetworkPage = () => {
  useSetAppLayoutTitle("Be Network");
  const [form, setForm] = useState<BeNetworkFormType>();
  const [confirmation, setConfirmation] = useState<BeNetworkConfirmation>();
  return (
    <BeNetworkPageContext.Provider
      value={{ form, setForm, confirmation, setConfirmation }}
    >
      <Outlet></Outlet>
    </BeNetworkPageContext.Provider>
  );
};

export default BeNetworkPage;
