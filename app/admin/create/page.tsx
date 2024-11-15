"use client";

import FormItem from "@/app/_components/form-item";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { CLEAR_ITEM, EQUAL_ITEM } from "@/app/_store/reducers/items";
import { useCreateItemMutation } from "@/app/_store/services/items";
import { Styles } from "@/app/_styles/admin/create";
import {
  AppButton,
  AppInput,
  AppSelect,
  AppTextArea,
  Navbar,
} from "@/app/_styles/ui/element";
import { Text, Title } from "@/app/_styles/ui/text";
import { Detail, FormValue } from "@/app/global/types";
import { categoryOptions, errorMsg } from "@/app/global/utils";
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons";
import { Form, message, Upload, UploadProps } from "antd";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";
import { useGetCategoryQuery } from "@/app/_store/services/category";

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "/api/upload/items",
  maxCount: 3,
  listType: "picture",
};

export default function Create() {
  const dispatch = useAppDispatch();
  const {
    items: { item },
    category: { category },
  } = useAppSelector((state) => state);
  const [create, { isLoading, error }] = useCreateItemMutation();
  const router = useRouter();

  useGetCategoryQuery();

  useEffect(() => errorMsg(error), [error]);

  const submit = async () => {
    if (item.images !== undefined) {
      await create(item)
        .unwrap()
        .then(() => {
          router.push("/admin/products");
          dispatch(CLEAR_ITEM());
        });
    } else {
      message.warning("Please upload images");
    }
  };

  const setValue = (e: Detail) => dispatch(EQUAL_ITEM(e));

  const upload = (info: any) => {
    const { status, name } = info.file;
    if (status === "done") {
      message.success(`${name} file uploaded successfully.`);
      setValue({
        key: "images",
        value: info.fileList.map((e: any) => e.response),
      });
    } else if (status === "removed" && info.fileList.length < 1) {
      setValue({ key: "images", value: undefined });
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
            <FormItem node={<AppInput />} name="title" />
            <FormItem
              node={
                <AppSelect
                  options={categoryOptions(category)}
                  onChange={(e) => setValue({ key: "category", value: e })}
                />
              }
              name="category"
            />
            <FormItem
              node={<AppInput type="number" prefix="$" min={0} />}
              name="price"
            />
            <FormItem node={<AppInput type="number" min={1} />} name="amount" />
            <FormItem node={<AppTextArea />} name="description" />
            <FormItem
              node={
                <AppButton disabled={isLoading}>
                  {isLoading ? <LoadingOutlined /> : ""} Submit
                </AppButton>
              }
            />
          </Form>
        </div>
      </Styles>
    </Fragment>
  );
}
