import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import OtcPagePageContext, { OtcPageFormType } from "./OtcPageContext";

const OtcPage = () => {
  useSetAppLayoutTitle("OTC");

  const [form, setForm] = useState<OtcPageFormType>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!form) {
      navigate("");
    } else {
      navigate("review");
    }
  }, []);

  return (
    <OtcPagePageContext.Provider value={{ form, setForm }}>
      <Outlet></Outlet>
    </OtcPagePageContext.Provider>
  );
};

export default OtcPage;
