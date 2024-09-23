"use client";

import FormItem from "@/app/_components/form-item";
import { Form } from "antd";
import { Styles } from "@/app/_styles/admin/login";
import { Title } from "@/app/_styles/ui/text";
import { AppButton, AppInput, AppPassword } from "@/app/_styles/ui/element";
import { AdminData } from "@/app/global/types";
import { useLoginAdminMutation } from "@/app/_store/services/admin";
import { useEffect } from "react";
import { errorMsg } from "@/app/global/utils";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function Login() {
  const [login, { error, isLoading }] = useLoginAdminMutation();
  const router = useRouter();

  useEffect(() => errorMsg(error), [error]);

  const submit = async (value: AdminData) => {
    await login(value)
      .unwrap()
      .then(() => router.push("/admin"));
  };

  return (
    <Styles>
      <Form layout="vertical" onFinish={submit}>
        <Title>Log in</Title>
        <FormItem node={<AppInput placeholder="Shoxruh" />} name="name" />
        <FormItem
          node={<AppPassword placeholder="123456" />}
          name="password"
          isPsw
        />
        <FormItem
          node={
            <AppButton disabled={isLoading}>
              {isLoading ? <LoadingOutlined /> : ""} Submit
            </AppButton>
          }
        />
      </Form>
    </Styles>
  );
}
