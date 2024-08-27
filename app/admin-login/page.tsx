"use client";

import FormItem from "../_components/form-item";

import { Form, Input } from "antd";
import { Styles } from "../_styles/admin/login";
import { Title } from "../_styles/ui/text";
import { Button } from "../_styles/ui/element";

export default function Login() {
  return (
    <Styles>
      <Form layout="vertical">
        <Title color="#fff">Log in</Title>
        <FormItem node={<Input />} name="username" />
        <FormItem node={<Input.Password />} name="password" isPsw />
        <FormItem node={<Button>Submit</Button>} />
      </Form>
    </Styles>
  );
}
