"use client";

import FormItem from "@/app/_components/form-item";
import Loader from "@/app/_components/loader";
import { Form, Input } from "antd";
import { Styles } from "@/app/_styles/admin/settings";
import { Text, Title } from "@/app/_styles/ui/text";
import { AppButton, AppInput, Navbar } from "@/app/_styles/ui/element";
import { AdminData, FormValue } from "@/app/global/types";
import {
  useEditAdminDataMutation,
  useGetAdminDataQuery,
} from "@/app/_store/services/admin";
import { ChangeEvent, Fragment, useEffect } from "react";
import { errorMsg } from "@/app/global/utils";
import { LoadingOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { SET_VALUE } from "@/app/_store/reducers/admin";

export default function Settings() {
  const dispatch = useAppDispatch();
  const [edit, { error, isLoading }] = useEditAdminDataMutation();
  const { data } = useAppSelector((state) => state.admin);
  const adminData = useGetAdminDataQuery();

  useEffect(() => {
    errorMsg(error);
    errorMsg(adminData.error);
  }, [error, adminData.error]);

  const submit = async (value: AdminData) => {
    await edit(value).unwrap();
  };

  const setValue = (e: FormValue) => dispatch(SET_VALUE(e));

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
            <br />
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
