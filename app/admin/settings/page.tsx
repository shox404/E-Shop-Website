"use client";

import FormItem from "@/app/_components/form-item";
import Loader from "@/app/_components/loader";
import { Form, Input } from "antd";
import { Styles } from "@/app/_styles/admin/settings";
import { Text, Title } from "@/app/_styles/ui/text";
import { AppButton, AppInput, Navbar } from "@/app/_styles/ui/element";
import { AdminData } from "@/app/global/types";
import {
  useEditAdminDataMutation,
  useGetAdminDataQuery,
} from "@/app/_store/services/admin";
import { ChangeEvent, Fragment, useEffect } from "react";
import { errorMsg } from "@/app/global/utils";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { SET_VALUE } from "@/app/_store/reducers/admin";

export default function Settings() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const adminData = useGetAdminDataQuery();
  const [edit, { error, isLoading }] = useEditAdminDataMutation();
  const { data } = useAppSelector((state) => state.admin);

  useEffect(() => errorMsg(error), [error]);

  useEffect(() => errorMsg(adminData.error), [adminData.error]);

  const submit = async (value: AdminData) => {
    await edit(value).unwrap();
  };

  const setValue = (e: ChangeEvent<HTMLFormElement>) => dispatch(SET_VALUE(e));

  if (adminData.isLoading) {
    return <Loader />;
  } else {
    return (
      <Fragment>
        <Navbar>
          <Text>Settings</Text>
        </Navbar>
        <Styles>
          <Form
            layout="vertical"
            onFinish={submit}
            onChange={setValue}
            initialValues={data}
          >
            <Title>Edit admin data</Title>
            <FormItem node={<AppInput as={Input} />} name="name" />
            <FormItem
              node={<AppInput as={Input.Password} />}
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
      </Fragment>
    );
  }
}
