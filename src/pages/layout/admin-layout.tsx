const AdminLayout = () => {
  return (
    <>
      <div className="h-screen w-full flex ">
        <div className="slider h-full w-1/3 bg-blue-400">slider</div>
        <div className="dasboard-right-panel h-full flex flex-col grow">
          <div className="header p-[20px] bg-red-400 ">header</div>
          <div className="content p-[20px]  bg-red-100 grow">content</div>
          <div className="footer p-[20px]  bg-red-400">footer</div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
