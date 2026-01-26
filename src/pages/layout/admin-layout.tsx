import {
  AppstoreAddOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProductOutlined,
  StarOutlined,
  TagOutlined,
  TeamOutlined,
  TruckOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";

import Sider from "antd/es/layout/Sider";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="h-screen"
        >
          <div>
            <div className="p-4 flex justify-center">
              <div className="w-[100px] rounded-full overflow-hidden">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <DashboardOutlined />,
                  label: "Dashboard",
                },
                {
                  key: "2",
                  icon: <StarOutlined />,
                  label: "Banners",
                },
                {
                  key: "3",
                  icon: <TagOutlined />,
                  label: "Brands",
                },
                {
                  key: "4",
                  icon: <AppstoreAddOutlined />,
                  label: "Categories",
                },
                {
                  key: "5",
                  icon: <ProductOutlined />,
                  label: "Products",
                },
                {
                  key: "6",
                  icon: <TruckOutlined />,
                  label: "Orders",
                },
                {
                  key: "7",
                  icon: <TeamOutlined />,
                  label: "Users",
                },
              ]}
            ></Menu>
          </div>
        </Sider>
        <Layout>
          <Header className="flex justify-between items-center">
            <Button
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              type="text"
              style={{
                fontSize: "16px",
                color: "white",
              }}
            ></Button>
            <Button icon={<UserOutlined />}></Button>
          </Header>
          <Content>content</Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
