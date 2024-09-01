"use client";

import FormItem from "@/app/_components/form-item";
import { SET_ITEM } from "@/app/_store/reducers/items";
import { Styles } from "@/app/_styles/admin/create";
import { AppButton, AppInput, Navbar } from "@/app/_styles/ui/element";
import { Text, Title } from "@/app/_styles/ui/text";
import { Detail, FormValue } from "@/app/global/types";
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons";
import { Form, Input, message, Upload, UploadProps } from "antd";
import { ChangeEvent, FormEvent, Fragment } from "react";
import { useDispatch } from "react-redux";

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "/api/upload/items",
  maxCount: 3,
  listType: "picture",
};

export default function Create() {
  const dispatch = useDispatch();

  const submit = (value: any) => {
    console.log(value);
  };

  const setValue = ({ key, value }: Detail) =>
    dispatch(SET_ITEM({ key, value }));

  const upload = (info: any) => {
    const { status, name } = info.file;
    setValue({
      key: "images",
      value: info.fileList.map((e: any) => e.response),
    });
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
          onChange={({ target: { name, value } }: FormValue) =>
            setValue({ key: name, value })
          }
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
