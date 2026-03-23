import { Button, Radio, type RadioChangeEvent } from "antd";
import {
  INPUT_TYPE,
  type GENDER,
  type USER_ROLE,
} from "../../constants/constant";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import * as Yup from "yup";
import {
  InputGrid,
  LabelComponent,
  LabelGrid,
} from "../form/input-inline-grid-component";
import {
  PasswordInputComponent,
  TextInputComponent,
} from "../form/input.component";

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  repassword: string;
  role: USER_ROLE;
  gender: GENDER | null;
}

const RegisterRightPanel = () => {
  const [role, setRole] = useState(1);
  const [genderValue, setGenderValue] = useState(1);

  const onChangeRole = (e: RadioChangeEvent) => {
    setRole(e.target.value);
  };
  const onChangeGender = (e: RadioChangeEvent) => {
    setGenderValue(e.target.value);
  };

  const UserRegisterDTO = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be at most 100 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    repassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
    role: Yup.string()
      .matches(/^(admin|seller|customer)$/, "Invalid role")
      .required("Role is required")
      .default("customer"),
    gender: Yup.string()
      .matches(/^(male|female|other)$/, "Invalid gender")
      .required("Gender is required")
      .nullable()
      .default(null),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      Password: "",
      confirmpassword: "",
      role: USER_ROLE.CUSTOMER,
      gender: null,
    } as IRegisterData,
    resolver: yupResolver(UserRegisterDTO),
  });

  const submitRegisterData = (data: IRegisterData) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitRegisterData)}
        className="flex flex-col gap-4"
      >
        <h2 className="font-bold underline offset-2 text-2xl">Sign Up</h2>
        <div className="flex w-full gap-3">
          <LabelGrid>
            <LabelComponent htmlfor="name" label="Name" />
          </LabelGrid>

          <InputGrid>
            <TextInputComponent
              control={control}
              errorMsg={errors?.name?.message}
              name="name"
              type={INPUT_TYPE.TEXT}
            />
          </InputGrid>
        </div>

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

        <div className="flex w-full gap-3">
          <LabelGrid>
            <LabelComponent htmlfor="confirmpassword" label="Re-Password" />
          </LabelGrid>

          <InputGrid>
            <PasswordInputComponent
              control={control}
              errorMsg={errors?.repassword?.message}
              name="repassword"
            />
          </InputGrid>
        </div>
        <div className="flex flex-col">
          <label htmlFor="role">Role: </label>
          <Radio.Group
            value={role}
            onChange={onChangeRole}
            options={[
              { value: "admin", label: "Admin" },
              { value: "seller", label: "Seller" },
              { value: "customer", label: "Customer" },
            ]}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender">Gender:</label>
          <Radio.Group
            value={genderValue}
            onChange={onChangeGender}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />
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
          <NavLink
            to="/forget-password"
            className="underline offset-2 text-green-400"
          >
            Forgot password?
          </NavLink>
        </div>
        <Button type="primary" htmlType="submit" className="w-min">
          Create New Account
        </Button>
        <p>Or</p>
        <NavLink to="/">Sign In</NavLink>
      </form>
    </>
  );
};

export default RegisterRightPanel;
