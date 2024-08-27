"use client";

import FormItem from "../_components/form-item";

import { Form, Input } from "antd";
import { Styles } from "../_styles/admin/login";
import { Title } from "../_styles/ui/text";
import { Button, CustomInput } from "../_styles/ui/element";
import { AdminData } from "../types";

export default function Login() {
  const submit = (value: AdminData) => {};

  return (
    <Styles>
      <Form layout="vertical" onFinish={submit}>
        <Title>Log in</Title>
        <FormItem node={<CustomInput as={Input} />} name="name" />
        <FormItem node={<CustomInput as={Input.Password} />} name="password" isPsw />
        <FormItem node={<Button>Submit</Button>} />
      </Form>
    </Styles>
  );
}
