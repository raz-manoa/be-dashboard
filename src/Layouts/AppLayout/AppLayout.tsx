import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { memo, ReactNode, useState } from "react";
import { AppLayoutContext } from "./AppLayoutContext";
import Sidebar from "@/Components/Common/Sidebar/Sidebar";
import Header from "@/Components/Common/Header/Header";

const AppLayout = () => {
  const { state } = useLocation();
  const [headerTitle, setHeaderTitle] = useState<ReactNode>("");

  return (
    <AppLayoutContext.Provider value={{ headerTitle, setHeaderTitle }}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* content */}
        <Layout.Sider width={"30%"} style={{ maxWidth: 260 }}>
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
            <Header
              title={
                headerTitle
                  ? headerTitle
                  : (state && state.headerLabel) || headerTitle
              }
            />
          </Layout.Header>
          <Layout.Content style={{ padding: "0px 32px 32px" }} id="main-layout">
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </AppLayoutContext.Provider>
  );
};

export default memo(AppLayout);
