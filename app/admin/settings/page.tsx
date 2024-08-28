"use client";

import FormItem from "../../_components/form-item";
import { Form, Input } from "antd";
import { Styles } from "../../_styles/admin/settings";
import { Title } from "../../_styles/ui/text";
import { AppButton, AppInput } from "../../_styles/ui/element";
import { AdminLoginData, CurrentAdminData } from "../../types";
import {
  useAdminLoginMutation,
  useGetAdminDataQuery,
} from "../../_store/services/admin";
import { ChangeEvent, useEffect, useState } from "react";
import { errorMsg } from "../../utils";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { SET_VALUE } from "@/app/_store/reducers/admin";

export default function Settings() {
  const [adminLogin, { error, isLoading }] = useAdminLoginMutation();
  const [adminData, setAdminData] = useState<CurrentAdminData | undefined>({
    name: "",
  });
  const { data } = useGetAdminDataQuery();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {} = useAppSelector((state) => state.admin);

  useEffect(() => errorMsg(error), [error]);

  useEffect(() => {
    setAdminData(data);
  }, [data]);
  console.log(adminData);

  const submit = async (value: AdminLoginData) => {
    await adminLogin(value)
      .unwrap()
      .then(() => {
        router.push("/admin");
      });
  };

  const setValue = (
    key: "password" | "name",
    e: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(SET_VALUE({ key, value: e.target.value }));
  };
  // console.log(data.name);

  return (
    <Styles>
      <Form layout="vertical" onFinish={submit} initialValues={adminData}>
        <Title>Edit admin data</Title>
        <Form.Item name="name">
          <Input name="name" value={adminData?.name} />
        </Form.Item>
        <FormItem
          node={<AppInput as={Input} onChange={(e) => setValue("name", e)} />}
          name="name"
        />
        <FormItem
          node={
            <AppInput as={Input} onChange={(e) => setValue("password", e)} />
          }
          name="password"
          isPsw
        />
        <FormItem
          node={
            <AppButton>{isLoading ? <LoadingOutlined /> : ""} Submit</AppButton>
          }
        />
      </Form>
    </Styles>
  );
}
