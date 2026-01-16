import logo from "../../assets/images/logo.png";

const LoginLeftPanel = () => {
  return (
    <>
      <div className="hidden lg:block login-left p-4 bg-green-600 w-1/3 rounded-lg">
        <div className="h-full flex items-center justify-center">
          <div className=" flex flex-col items-center justify-center  gap-[20px]  text-center text-white">
            <div className="w-[100px] rounded-full overflow-hidden">
              <img src={logo} alt="logo"></img>
            </div>
            <h1 className="underline underline-offset-2 text-xl font-semibold">
              Welcome to Yala Tisha
            </h1>
            <p>Designed to glow with you. Yalatisha defines your shine.</p>
            <p className="font-semibold">
              Register now and start your journey with us!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLeftPanel;
