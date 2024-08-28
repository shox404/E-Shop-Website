"use client";

import FormItem from "../../_components/form-item";
import { Form, Input } from "antd";
import { Styles } from "../../_styles/admin/settings";
import { Title } from "../../_styles/ui/text";
import { AppButton, AppInput } from "../../_styles/ui/element";
import { AdminLoginData } from "../../types";
import {
  useAdminLoginMutation,
  useGetAdminDataQuery,
} from "../../_store/services/admin";
import { ChangeEvent, useEffect } from "react";
import { errorMsg } from "../../utils";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/_store/hooks";
import { SET_VALUE } from "@/app/_store/reducers/admin";

export default function Settings() {
  const [adminLogin, { error, isLoading }] = useAdminLoginMutation();
  const { data } = useGetAdminDataQuery();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => errorMsg(error), [error]);

  const submit = async (value: AdminLoginData) => {
    await adminLogin(value)
      .unwrap()
      .then(() => {
        router.push("/admin");
      });
  };

  const setValue = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(SET_VALUE(event));

  return (
    <Styles>
      <Form layout="vertical" onFinish={submit}>
        <Title>Edit admin data</Title>
        <FormItem
          node={<AppInput as={Input} value={data?.name} onChange={setValue} />}
          name="name"
        />
        <FormItem
          node={<AppInput as={Input.Password} onChange={setValue} />}
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
