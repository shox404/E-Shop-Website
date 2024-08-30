"use client";

import FormItem from "@/app/_components/form-item";
import Loader from "@/app/_components/loader";
import { Styles } from "@/app/_styles/admin/create";
import { AppButton, AppInput, Navbar } from "@/app/_styles/ui/element";
import { Text, Title } from "@/app/_styles/ui/text";
import { LoadingOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { ChangeEvent, Fragment } from "react";

export default function Create() {
  const submit = () => {};

  const setValue = (e: ChangeEvent<HTMLFormElement>) => null;

  if (false) {
    return <Loader />;
  } else {
    return (
      <Fragment>
        <Navbar>
          <Text>Create</Text>
        </Navbar>
        <Styles>
          <Form
            layout="vertical"
            onFinish={submit}
            onChange={setValue}
            initialValues={[]}
          >
            <Title>New product</Title>
            <br />
            <FormItem node={<AppInput as={Input} />} name="title" />
            <FormItem node={<AppInput as={Input.TextArea} />} name="description" />
            <FormItem node={<AppInput as={Input} />} name="description" />
            <FormItem
              node={
                <AppButton disabled={false}>
                  {false ? <LoadingOutlined /> : ""} Submit
                </AppButton>
              }
            />
          </Form>
        </Styles>
      </Fragment>
    );
  }
}
