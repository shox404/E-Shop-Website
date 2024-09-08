"use client";

import FormItem from "@/app/_components/form-item";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { SET_ITEM } from "@/app/_store/reducers/items";
import { Styles } from "@/app/_styles/admin/create";
import { AppButton, AppInput, Navbar } from "@/app/_styles/ui/element";
import { Text, Title } from "@/app/_styles/ui/text";
import { Detail, FormValue, Item } from "@/app/global/types";
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons";
import { Form, Input, message, Upload, UploadProps } from "antd";
import { Fragment } from "react";

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "/api/upload/items",
  maxCount: 3,
  listType: "picture",
};

export default function Create() {
  const dispatch = useAppDispatch();
  const { item } = useAppSelector((state) => state.items);

  const submit = (value: Item) => {
    console.log(value);
  };

  const setValue = (e: Detail) => dispatch(SET_ITEM(e));

  const upload = (info: any) => {
    const { status, name } = info.file;
    if (status === "done") {
      message.success(`${name} file uploaded successfully.`);
      setValue({ key: "images", value: info.fileList.map((e: any) => e.response) });
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
        <div className="content">
          <Title>New item</Title>
          <br />
          <Upload.Dragger
            {...props}
            onChange={upload}
            defaultFileList={item.images}
          >
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
          <Form
            layout="vertical"
            onFinish={submit}
            onChange={({ target: { id, value } }: FormValue) =>
              setValue({ key: id, value })
            }
            initialValues={item}
          >
            <FormItem node={<AppInput as={Input} />} name="title" />
            <FormItem
              node={<AppInput as={Input} type="number" prefix="$" />}
              name="price"
            />
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
        </div>
      </Styles>
    </Fragment>
  );
}
