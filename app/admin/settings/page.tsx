"use client";

import FormItem from "@/app/_components/form-item";
import Loader from "@/app/_components/loader";
import { Divider, Dropdown, Form, List, Popconfirm } from "antd";
import { Styles } from "@/app/_styles/admin/settings";
import { Text, Title } from "@/app/_styles/ui/text";
import {
  AppButton,
  AppInput,
  AppPassword,
  Navbar,
} from "@/app/_styles/ui/element";
import { AdminData, Category, FormValue } from "@/app/global/types";
import {
  useEditAdminDataMutation,
  useGetAdminDataQuery,
} from "@/app/_store/services/admin";
import { useEffect } from "react";
import { errorMsg } from "@/app/global/utils";
import {
  DeleteOutlined,
  EllipsisOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { SET_VALUE } from "@/app/_store/reducers/admin";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "@/app/_store/services/category";
import { EMPTY_CATEGORY, SET_CATEGORY } from "@/app/_store/reducers/category";
import CategoryEditor from "@/app/_drawers/category-editor";
import DropItem from "@/app/_components/drop-item";

export default function Settings() {
  const dispatch = useAppDispatch();
  const adminData = useGetAdminDataQuery();
  const [edit, { error, isLoading }] = useEditAdminDataMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [createCategory, moreCategory] = useCreateCategoryMutation();
  const {
    admin: { data },
    category: { category, value },
  } = useAppSelector((state) => state);

  useGetCategoryQuery();

  useEffect(() => {
    errorMsg(error);
    errorMsg(adminData.error);
  }, [error, adminData.error]);

  const submit = async (value: AdminData) => {
    await edit(value).unwrap();
  };

  const submitCategory = async (value: Category) => {
    await createCategory(value)
      .unwrap()
      .then(() => dispatch(EMPTY_CATEGORY()));
  };

  const setValue = (value: FormValue) => dispatch(SET_VALUE(value));

  const setCategoryValue = (value: FormValue) => dispatch(SET_CATEGORY(value));

  const drops = (data: Category) => {
    return [
      {
        label: <CategoryEditor data={data} />,
        key: "0",
      },
      {
        label: (
          <Popconfirm
            title="Delete?"
            onConfirm={() => deleteCategory({ id: data.id })}
          >
            <DropItem onClick={() => null}>
              <DeleteOutlined /> Delete
            </DropItem>
          </Popconfirm>
        ),
        key: "1",
      },
    ];
  };

  return (
    <Loader is={adminData.isLoading}>
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
          <FormItem node={<AppInput />} name="name" />
          <FormItem node={<AppPassword />} name="password" isPsw />
          <FormItem
            node={
              <AppButton disabled={isLoading}>
                {isLoading ? <LoadingOutlined /> : ""} Submit
              </AppButton>
            }
          />
        </Form>
        <Form
          layout="vertical"
          onFinish={submitCategory}
          onChange={setCategoryValue}
          initialValues={value}
        >
          <Title>Categories</Title>
          <br />
          <FormItem node={<AppInput />} name="key" />
          <FormItem
            node={
              <AppButton disabled={moreCategory.isLoading}>
                {moreCategory.isLoading ? <LoadingOutlined /> : ""} Create
              </AppButton>
            }
          />
          <Divider type="horizontal">List</Divider>
          <List>
            {category.map((item: Category, index) => (
              <List.Item key={index}>
                <span>
                  {index + 1}. {item.key}
                </span>
                <Dropdown menu={{ items: drops(item) }} trigger={["click"]}>
                  <AppButton className="editBtn" type="button">
                    <EllipsisOutlined />
                  </AppButton>
                </Dropdown>
              </List.Item>
            ))}
          </List>
        </Form>
      </Styles>
    </Loader>
  );
}
