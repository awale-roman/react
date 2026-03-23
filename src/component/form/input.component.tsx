import { Input } from "antd";
import { Controller } from "react-hook-form";
import type { INPUT_TYPE } from "../../constants/constant";

export interface IInputErrorMsgProps {
  errorMsg?: string | undefined | null;
}

export const InputErrorMsg = ({ errorMsg }: IInputErrorMsgProps) => {
  return <span className="text-red-500 text-sm italic">{errorMsg}</span>;
};

export interface ITextInputComponentProps {
  control: any;
  name: string;
  type?: INPUT_TYPE;
  errorMsg?: string | undefined | null;
}

export const TextInputComponent = ({
  control,
  errorMsg,
  name,
  type = INPUT_TYPE.TEXT,
}: ITextInputComponentProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <Input type={type} {...field} placeholder={`Enter your ${name}`} />
            <InputErrorMsg errorMsg={errorMsg} />
          </>
        )}
      />
    </>
  );
};

export const PasswordInputComponent = ({
  control,
  errorMsg,
  name,
}: ITextInputComponentProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <Input
              type="password"
              {...field}
              placeholder={`Enter your ${name}`}
            />
            <InputErrorMsg errorMsg={errorMsg} />
          </>
        )}
      />
    </>
  );
};
