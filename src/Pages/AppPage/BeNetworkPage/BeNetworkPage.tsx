import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Outlet } from "react-router-dom";

const BeNetworkPage = () => {
  useSetAppLayoutTitle("Be Network");
  return <Outlet></Outlet>;
};

export default BeNetworkPage;
