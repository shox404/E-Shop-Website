"use client";

import FormItem from "../_components/form-item";

import { Form, Input, message } from "antd";
import { Styles } from "../_styles/admin/login";
import { Title } from "../_styles/ui/text";
import { Button, CustomInput } from "../_styles/ui/element";
import { AdminLoginData } from "../types";
import { useAdminLoginMutation } from "../_store/services/admin";
import { useEffect } from "react";
import { errorMsg } from "../utils";

export default function Login() {
  const [adminLogin, { error }] = useAdminLoginMutation();

  useEffect(() => errorMsg(error), [error]);

  const submit = async (value: AdminLoginData) => {
    await adminLogin(value).unwrap();
  };

  return (
    <Styles>
      <Form layout="vertical" onFinish={submit}>
        <Title>Log in</Title>
        <FormItem node={<CustomInput as={Input} />} name="name" />
        <FormItem
          node={<CustomInput as={Input.Password} />}
          name="password"
          isPsw
        />
        <FormItem node={<Button>Submit</Button>} />
      </Form>
    </Styles>
  );
}
