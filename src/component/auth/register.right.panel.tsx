import { Button, Input } from "antd";

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
          <label htmlFor="password">Password:</label>
          <Input placeholder="Enter your password" />
        </div>
        <div className="flex italic gap-4 flex-col lg:justify-between lg:flex-row">
          <p>
            By loggin in, you aggree with our{" "}
            <span>
              <a href="*" className="underline offset-2 text-green-400">
                terms and condition
              </a>
            </span>
          </p>
          <a href="*" className="underline offset-2 text-green-400">
            Forgot password?
          </a>
        </div>
        <Button type="primary" htmlType="submit" className="w-min">
          Create New Account
        </Button>
        <p>Or</p>
        <a href="/">Sign In</a>
      </div>
    </>
  );
};

export default RegisterRightPanel;
