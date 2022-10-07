import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { memo } from "react";
import { AppLayoutContext } from "./AppLayoutContext";
import Sidebar from "@/Components/Common/Sidebar/Sidebar";
import Header from "@/Components/Common/Header/Header";

const AppLayout = () => {
  let { state } = useLocation();

  return (
    <AppLayoutContext.Provider value={{}}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* content */}
        <Layout.Sider width={"20%"}>
          <Sidebar />
        </Layout.Sider>
        <Layout>
          <Layout.Header
            style={{
              position: "sticky",
              top: 0,
              padding: 0,
              backgroundColor: "#f5f5f5",
              height: 82,
              zIndex: 100,
            }}
          >
            <Header title={state ? state.headerLabel || "" : ""} />
          </Layout.Header>
          <Layout.Content style={{ padding: "0 32px" }}>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </AppLayoutContext.Provider>
  );
};

export default memo(AppLayout);
