"use client";

import FormItem from "../_components/form-item";
import { Form, Input } from "antd";
import { Styles } from "../_styles/admin/login";
import { Title } from "../_styles/ui/text";
import { AppButton, AppInput } from "../_styles/ui/element";
import { AdminLoginData } from "../types";
import { useAdminLoginMutation } from "../_store/services/admin";
import { useEffect } from "react";
import { errorMsg } from "../utils";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function Login() {
  const [adminLogin, { error, isLoading }] = useAdminLoginMutation();
  const router = useRouter();

  useEffect(() => errorMsg(error), [error]);

  const submit = async (value: AdminLoginData) => {
    await adminLogin(value)
      .unwrap()
      .then(() => {
        router.push("/admin");
      });
  };

  return (
    <Styles>
      <Form layout="vertical" onFinish={submit}>
        <Title>Log in</Title>
        <FormItem node={<AppInput as={Input} />} name="name" />
        <FormItem
          node={<AppInput as={Input.Password} />}
          name="password"
          isPsw
        />
        <FormItem
          node={
            <AppButton>{isLoading ? <LoadingOutlined /> : ""}Submit</AppButton>
          }
        />
      </Form>
    </Styles>
  );
}
