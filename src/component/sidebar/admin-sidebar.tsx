import {
  AppstoreAddOutlined,
  HomeOutlined,
  ProductOutlined,
  StarOutlined,
  TagOutlined,
  TeamOutlined,
  TruckOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import logo from "../../assets/images/logo.png";

export interface IUserSidebarProps {
  collapsed: boolean;
}

const AdminSidebar = ({ collapsed }: IUserSidebarProps) => {
  return (
    <>
      <Sider
        trigger={true}
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
                icon: <HomeOutlined />,
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
    </>
  );
};

export default AdminSidebar;
