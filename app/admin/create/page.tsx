"use client";

import FormItem from "@/app/_components/form-item";
import { Styles } from "@/app/_styles/admin/create";
import { AppButton, AppInput, Navbar } from "@/app/_styles/ui/element";
import { Text, Title } from "@/app/_styles/ui/text";
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons";
import { Form, Input, message, Upload, UploadProps } from "antd";
import { ChangeEvent, Fragment } from "react";

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "/api/upload/items",
  maxCount: 3,
  listType: "picture",
};

export default function Create() {
  const submit = (value: any) => {
    console.log(value);
  };

  const setValue = (e: ChangeEvent<HTMLFormElement>) => null;

  const upload = (info: any) => {
    const { status, name } = info.file;
    // info.fileList.map((e: any) => e.response)
    // setValue()
    if (status === "done") {
      message.success(`${name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${name} file upload failed.`);
    }
  };

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
          <Title>New item</Title>
          <br />
          <Upload.Dragger {...props} onChange={upload}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Upload.Dragger>
          <br />
          <FormItem node={<AppInput as={Input} />} name="title" />
          <FormItem node={<AppInput as={Input} type="number" />} name="price" />
          <FormItem
            node={<AppInput as={Input.TextArea} />}
            name="description"
          />
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
