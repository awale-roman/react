import { Button, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import Sider from "antd/es/layout/Sider";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      {/* <div className="h-screen w-full flex ">
        <div className="slider h-full w-1/3 bg-blue-400">slider</div>
        <div className="dasboard-right-panel h-full flex flex-col grow">
          <div className="header p-[20px] bg-red-400 ">header</div>
          <div className="content p-[20px]  bg-red-100 grow">content</div>
          <div className="footer p-[20px]  bg-red-400">footer</div>
        </div>
      </div> */}
      <Layout>
        <Sider collapsible collapsed={collapsed}>
          <div>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <Menu
              items={[
                {
                  key: "1",
                  icon: <DashboardOutlined />,
                  label: "Dashboard",
                },
                {
                  key: "2",
                  icon: <DashboardOutlined />,
                  label: "Banners",
                },
                {
                  key: "3",
                  icon: <DashboardOutlined />,
                  label: "Brands",
                },
                {
                  key: "4",
                  icon: <DashboardOutlined />,
                  label: "Categories",
                },
                {
                  key: "5",
                  icon: <DashboardOutlined />,
                  label: "Products",
                },
                {
                  key: "6",
                  icon: <DashboardOutlined />,
                  label: "Orders",
                },
                {
                  key: "7",
                  icon: <DashboardOutlined />,
                  label: "Users",
                },
              ]}
            ></Menu>
          </div>
        </Sider>
        <Layout>
          <Header>
            <Button
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              type="text"
            ></Button>
          </Header>
          <Content>content</Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
