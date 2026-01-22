import { Button, Input } from "antd";

import { NavLink } from "react-router";

const LoginRightPanel = () => {
  return (
    <>
      <h2 className="font-bold underline offset-2 text-2xl">Sign In</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <Input placeholder="Enter your username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <Input placeholder="Enter your password" />
      </div>
      <div className="flex italic gap-4 flex-col lg:justify-between lg:flex-row">
        <p>
          By loggin in, you aggree with our{" "}
          <span>
            <NavLink
              to="/admin-layout"
              className="underline offset-2 text-green-400"
            >
              terms and condition
            </NavLink>
          </span>
        </p>
        <NavLink
          to="/forget-password"
          className="underline offset-2 text-green-400"
        >
          Forgot password?
        </NavLink>
      </div>
      <Button type="primary" htmlType="submit" className="w-min">
        Log In
      </Button>
      <p>Or</p>

      <NavLink to="/register">Sign Up</NavLink>
    </>
  );
};

export default LoginRightPanel;
