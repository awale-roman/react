import { Button, Input } from "antd";

import { NavLink } from "react-router";

const RegisterRightPanel = () => {
  return (
    <>
      <div className="flex gap-4 flex-col justify-center rounded-sm p-4 md:w-1/3 lg:w-2/3">
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
          <NavLink to="*" className="underline offset-2 text-green-400">
            Forgot password?
          </NavLink>
        </div>
        <Button type="primary" htmlType="submit" className="w-min">
          Create New Account
        </Button>
        <p>Or</p>
        <NavLink to="/">Sign In</NavLink>
      </div>
    </>
  );
};

export default RegisterRightPanel;
