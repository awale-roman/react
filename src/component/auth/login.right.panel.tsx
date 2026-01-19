import { Button, Input } from "antd";

import { NavLink } from "react-router";

const LoginRightPanel = () => {
  return (
    <>
      <div className="flex gap-4 flex-col justify-center rounded-sm p-4 md:w-1/3 lg:w-2/3">
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
                to="/termandcondition"
                className="underline offset-2 text-green-400"
              >
                terms and condition
              </NavLink>
            </span>
          </p>
          <NavLink
            to="/forgotpassword"
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
      </div>
    </>
  );
};

export default LoginRightPanel;
