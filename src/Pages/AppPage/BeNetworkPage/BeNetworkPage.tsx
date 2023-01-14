import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BeNetworkPageContext, {
  BeNetworkConfirmation,
  BeNetworkFormType,
} from "./BeNetworkPageContext";

const BeNetworkPage = () => {
  useSetAppLayoutTitle("Be Network");
  const navigate = useNavigate();
  const [form, setForm] = useState<BeNetworkFormType>();
  const [confirmation, setConfirmation] = useState<BeNetworkConfirmation>();

  useEffect(() => {
    if (!form) {
      navigate("");
    } else {
      navigate("review");
    }
  }, []);
  return (
    <BeNetworkPageContext.Provider
      value={{ form, setForm, confirmation, setConfirmation }}
    >
      <Outlet></Outlet>
    </BeNetworkPageContext.Provider>
  );
};

export default BeNetworkPage;
