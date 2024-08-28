"use client";

import FormItem from "../../_components/form-item";
import { Form, Input } from "antd";
import { Styles } from "../../_styles/admin/settings";
import { Title } from "../../_styles/ui/text";
import { AppButton, AppInput } from "../../_styles/ui/element";
import { AdminLoginData } from "../../types";
import { useAdminLoginMutation, useGetAdminDataQuery } from "../../_store/services/admin";
import { useEffect } from "react";
import { errorMsg } from "../../utils";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function Settings() {
  const [adminLogin, { error, isLoading }] = useAdminLoginMutation();
  const {} = useGetAdminDataQuery()
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
        <Title>Edit admin data</Title>
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
