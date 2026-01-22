import { Button, Input } from "antd";

import { NavLink } from "react-router";

const RegisterRightPanel = () => {
  return (
    <>
      <h2 className="font-bold underline offset-2 text-2xl">Sign Up</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <Input placeholder="Enter your username" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <Input placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <Input placeholder="Enter your password" />
      </div>
      <div className="flex italic gap-4 flex-col lg:justify-between lg:flex-row">
        <p>
          By signing up, you aggree with our{" "}
          <span>
            <NavLink to="*" className="underline offset-2 text-green-400">
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
        Create New Account
      </Button>
      <p>Or</p>
      <NavLink to="/">Sign In</NavLink>
    </>
  );
};

export default RegisterRightPanel;
