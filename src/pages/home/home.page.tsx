import { Button, Input, Spin } from "antd";

import LoginLeftPanel from "../../component/auth/login.left.panel";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex gap-2 p-2.5">
        <Suspense fallback={<Spin fullscreen></Spin>}>
          <LoginLeftPanel />
        </Suspense>
        <div className="login-right w-full  flex flex-col justify-center p-4 lg:w-[50%]">
          <div className="flex gap-2 flex-col justify-center rounded-sm p-4 md:w-1/3 lg:w-2/3">
            <h2 className="font-bold underline offset-2 text-2xl">Sign In</h2>
            <div>
              <p>Username:</p>
              <Input placeholder="Enter your username" />
            </div>
            <div>
              <p>Password:</p>
              <Input placeholder="Enter your password" />
            </div>
            <Button type="primary">Log In</Button>
            <a href="#" className="underline offset-2">
              Forgot password?
            </a>
            <Button type="primary">Sign Up</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
