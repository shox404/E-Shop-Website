"use client";

import FormItem from "@/app/_components/form-item";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { SET_EDIT, EQUAL_EDIT } from "@/app/_store/reducers/items";
import { useEditItemMutation } from "@/app/_store/services/items";
import {
  AppInput,
  AppSelect,
  AppTextArea,
  Inline,
} from "@/app/_styles/ui/element";
import { Detail, FormValue, Item } from "@/app/global/types";
import { options, errorMsg } from "@/app/global/utils";
import { EditFilled, InboxOutlined } from "@ant-design/icons";
import { Drawer, Form, message, Upload, UploadProps } from "antd";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import FormFooter from "@/app/_components/form-footer";
import DropItem from "../_components/drop-item";

const uploadProps: UploadProps = {
  name: "file",
  multiple: true,
  action: "/api/upload/items",
  maxCount: 3,
  listType: "picture",
};

export default function ItemEditor({ data }: { data: Item }) {
  const [visible, setVisible] = useState(false);
  const [editItem, { isLoading, error }] = useEditItemMutation();
  const { edit } = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(SET_EDIT(data));
  }, [data]);
  useEffect(() => errorMsg(error), [error]);

  const toggle = () => setVisible(!visible);

  const submit = async () => {
    if (edit.images !== undefined) {
      await editItem(edit)
        .unwrap()
        .then(() => {
          router.push("/admin/products");
          dispatch(SET_EDIT({}));
          toggle();
        });
    } else {
      message.warning("Please upload images");
    }
  };

  const setValue = (e: Detail) => dispatch(EQUAL_EDIT(e));

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
      <DropItem onClick={toggle}>
        <EditFilled /> Edit
      </DropItem>
      <Drawer
        title="Edit Item"
        onClose={toggle}
        open={visible}
        footer={<FormFooter act={submit} hide={toggle} loading={isLoading} />}
      >
        <Upload.Dragger
          {...uploadProps}
          onChange={upload}
          defaultFileList={edit.images}
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
          initialValues={edit}
        >
          <FormItem node={<AppInput />} name="title" />
          <FormItem node={<AppSelect options={options} />} name="category" />
          <FormItem
            node={<AppInput type="number" prefix="$" min={0} />}
            name="price"
          />
          <FormItem node={<AppInput type="number" min={1} />} name="amount" />
          <FormItem node={<AppTextArea />} name="description" />
        </Form>
      </Drawer>
    </Fragment>
  );
}
