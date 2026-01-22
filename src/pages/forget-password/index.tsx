import { Button, Input } from "antd";

import { NavLink } from "react-router";

const ForgetPassword = () => {
  return (
    <>
      <h2 className="font-bold underline offset-2 text-2xl">Forget Password</h2>

      <div>
        <label htmlFor="email">Email:</label>
        <Input placeholder="Enter your email" />
      </div>

      <div className="flex italic gap-4 flex-col lg:justify-between lg:flex-row">
        <p>
          Lost your password? Please enter your email address. You will receive
          a link to create a new password via email.
        </p>
      </div>
      <Button type="primary" htmlType="submit" className="w-min">
        Send Request
      </Button>
      <p>Or</p>
      <NavLink to="/">Sign In</NavLink>
    </>
  );
};

export default ForgetPassword;
