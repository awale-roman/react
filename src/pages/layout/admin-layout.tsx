import AdminHeader from "../../component/header/admin-header";
import AdminSidebar from "../../component/sidebar/admin-sidebar";
import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";
import { useState } from "react";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout>
        <AdminSidebar collapsed={collapsed} />
        <Layout>
          <AdminHeader toggleSidebar={toggleSidebar} collapsed={collapsed} />
          <Content
            className="bg-gray-200 rounded-lg"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Layout />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
