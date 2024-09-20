import React, { ReactNode } from "react";
import { Form } from "antd";
import { Rule } from "antd/es/form";

interface Props {
  node: ReactNode;
  name?: string;
  isPsw?: boolean;
  isEmail?: boolean;
}

export default function FormItem({ name, node, isPsw, isEmail }: Props) {
  let rules: Rule[] = [{ required: true, message: `Please enter ${name}.` }];

  if (isPsw) {
    rules.push({ min: 6, message: "Password's length must be more than 6." });
  }

  if (isEmail) {
    rules.push({ type: "email", message: "Is not a valid email." });
  }

  return (
    <Form.Item
      name={name}
      label={name ? name.charAt(0).toUpperCase() + name.slice(1) : undefined}
      rules={rules}
    >
      {node}
    </Form.Item>
  );
}
