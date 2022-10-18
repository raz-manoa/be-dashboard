import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Outlet } from "react-router-dom";

const OtcPage = () => {
  useSetAppLayoutTitle("OTC");
  return <Outlet></Outlet>;
};

export default OtcPage;
