import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Button } from "antd";
import { Header } from "antd/es/layout/layout";

export interface IUserHeaderProps {
  toggleSidebar: React.MouseEventHandler;
  collapsed: boolean;
}

const AdminHeader = ({ toggleSidebar, collapsed }: IUserHeaderProps) => {
  return (
    <div>
      <Header className="flex justify-between items-center">
        <Button
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleSidebar}
          type="text"
          style={{
            fontSize: "16px",
            color: "white",
          }}
        ></Button>
        <Button icon={<UserOutlined />}></Button>
      </Header>
    </div>
  );
};

export default AdminHeader;
