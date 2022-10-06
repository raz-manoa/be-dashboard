import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { memo } from "react";
import { AppLayoutContext } from "./AppLayoutContext";
import Sidebar from "@/Components/Common/Sidebar/Sidebar";
import Header from "@/Components/Common/Header/Header";

const AppLayout = () => {
  return (
    <AppLayoutContext.Provider value={{}}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* content */}
        <Layout.Sider>
          <Sidebar />
        </Layout.Sider>
        <Layout.Content
          style={{ marginLeft: "20%", padding: "0 32px", marginTop: 95 }}
        >
          <Header title="Styleguide" />
          <Outlet />
        </Layout.Content>
      </Layout>
    </AppLayoutContext.Provider>
  );
};

export default memo(AppLayout);
