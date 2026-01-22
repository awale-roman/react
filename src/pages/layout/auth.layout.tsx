import LoginLeftPanel from "../../component/auth/login.left.panel";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <div className="h-screen flex gap-2 p-2.5">
        <LoginLeftPanel />

        <div className="login-right w-full  flex flex-col justify-center p-4 lg:w-[50%]">
          <div className="flex gap-4 flex-col justify-center p-4 md:w-1/3 lg:w-2/3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
