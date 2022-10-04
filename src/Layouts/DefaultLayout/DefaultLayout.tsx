import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { DefaultLayoutContext } from "./DefaultLayoutContext";
import { memo } from "react";

const DefaultLayout = () => {
  return (
    <DefaultLayoutContext.Provider value={{}}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* content */}
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </DefaultLayoutContext.Provider>
  );
};

export default memo(DefaultLayout);
