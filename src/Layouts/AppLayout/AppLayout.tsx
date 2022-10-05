import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { memo } from "react";
import { AppLayoutContext } from "./AppLayoutContext";
import Icon from "@/Components/General/Icon/Icon";

const AppLayout = () => {
  return (
    <AppLayoutContext.Provider value={{}}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* content */}
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </AppLayoutContext.Provider>
  );
};

export default memo(AppLayout);
