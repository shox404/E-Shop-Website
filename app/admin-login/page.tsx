"use client";

import FormItem from "../_components/form-item";

import { Form, Input } from "antd";
import { Styles } from "../_styles/admin/login";
import { Title } from "../_styles/ui/text";
import { Button, CustomInput } from "../_styles/ui/element";
import { AdminLoginData } from "../types";
import { useAdminLoginMutation } from "../_store/services/admin";

export default function Login() {
  const [adminLogin] = useAdminLoginMutation();

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
