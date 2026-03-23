import { Button } from "antd";

export interface IButtonProps {
  children: React.ReactNode;
}

export const CancelButton = ({ children }: IButtonProps) => {
  return (
    <>
      <Button
        htmlType="reset"
        className="w-full bg-red-700! text-white! hover:bg-red-700! hover:bg-red-800!"
      >
        {children}
      </Button>
    </>
  );
};

export const SubmitButton = ({ children }: IButtonProps) => {
  return (
    <>
      <Button
        htmlType="submit"
        className="w-full bg-green-700! text-white! hover:bg-green-700! hover:bg-green-800!"
      >
        {children}
      </Button>
    </>
  );
};
