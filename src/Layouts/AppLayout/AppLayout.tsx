import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { memo } from "react";
import { AppLayoutContext } from "./AppLayoutContext";
import Sidebar from "../Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <AppLayoutContext.Provider value={{}}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* content */}
        <Layout.Sider>
          <Sidebar />
        </Layout.Sider>
        <Layout.Content style={{ marginLeft: "20%", paddingLeft: 32 }}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </AppLayoutContext.Provider>
  );
};

export default memo(AppLayout);
