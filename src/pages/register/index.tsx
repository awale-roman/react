import LoginLeftPanel from "../../component/auth/login.left.panel";
import RegisterRightPanel from "../../component/auth/register.right.panel";

const Register = () => {
  return (
    <>
      <div className="h-screen flex gap-2 p-2.5">
        <LoginLeftPanel />

        <div className="login-right w-full  flex flex-col justify-center p-4 lg:w-[50%]">
          <RegisterRightPanel />
        </div>
      </div>
    </>
  );
};

export default Register;
