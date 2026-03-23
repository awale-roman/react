import * as yup from "yup";

import { CancelButton, SubmitButton } from "../form/action-button.component";
import {
  InputGrid,
  LabelComponent,
  LabelGrid,
} from "../form/input-inline-grid-component";
import {
  PasswordInputComponent,
  TextInputComponent,
} from "../form/input.component";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { INPUT_TYPE } from "../../constants/constant";

export interface ILoginData {
  email: string;
  password: string;
}

const LoginRightPanel = () => {
  const UserLoginDTO = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as ILoginData,
    resolver: yupResolver(UserLoginDTO),
  });

  const submitLoginData = (data: ILoginData) => {
    console.log(data);
    // Cookies.set("name", JSON.stringify(data), { expires: 3 });

    // const cookieData = Cookies.get("name") as string;
    // console.log(cookieData);
  };
  return (
    <>
      <h2 className="font-bold underline offset-2 text-2xl">Sign In</h2>
      <form
        onSubmit={handleSubmit(submitLoginData)}
        className="flex flex-col gap-4"
      >
        <div className="flex w-full gap-3">
          <LabelGrid>
            <LabelComponent htmlfor="email" label="Email" />
          </LabelGrid>

          <InputGrid>
            <TextInputComponent
              type={INPUT_TYPE.EMAIL}
              control={control}
              errorMsg={errors?.email?.message}
              name="email"
            />
          </InputGrid>
        </div>
        <div className="flex w-full gap-3">
          <LabelGrid>
            <LabelComponent htmlfor="password" label="Password" />
          </LabelGrid>

          <InputGrid>
            <PasswordInputComponent
              control={control}
              errorMsg={errors?.password?.message}
              name="password"
            />
          </InputGrid>
        </div>

        <div className="flex italic gap-4 flex-col-reverse xl:justify-between xl:flex-row">
          <p>
            By loggin in, you aggree with our{" "}
            <span>
              <NavLink
                to="/admin-layout"
                className="underline offset-2 text-green-400"
              >
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
        <div className="flex gap-3">
          <SubmitButton>Sign in</SubmitButton>
          <CancelButton>Cancel</CancelButton>
        </div>
        <p>Or</p>

        <NavLink to="/register">Sign Up</NavLink>
      </form>
    </>
  );
};

export default LoginRightPanel;
