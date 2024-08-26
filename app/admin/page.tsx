"use client";

import Link from "next/link";

import { Divider, Flex } from "antd";
import { SideBar, Item } from "../_styles/sidebar";
import { Title } from "../_styles/ui/text";
import { useRouter } from "next/navigation";
import { Button, IconButton } from "../_styles/ui/element";
import { ArrowLeftOutlined, LogoutOutlined } from "@ant-design/icons";

const links = [
  {
    title: "Dashboard",
    path: "/admin",
  },
  {
    title: "Products",
    path: "/admin/products",
  },
  {
    title: "Settings",
    path: "/admin/settings",
  },
];

export default function Admin() {
  const router = useRouter();

  return (
    <Flex>
      <SideBar>
        <Flex justify="space-between" align="center">
          <Link href="/admin">
            <Title>Logo</Title>
          </Link>
          <IconButton theme="dark">
            <ArrowLeftOutlined />
          </IconButton>
        </Flex>
        <Divider />
        <Flex vertical gap={20}>
          {links.map((item, index) => (
            <Item key={index} onClick={() => router.push(item.path)}>
              {item.title}
            </Item>
          ))}
          <Button theme="dark">
            <LogoutOutlined /> Log out
          </Button>
        </Flex>
      </SideBar>
      {/* <LightContent></LightContent> */}
    </Flex>
  );
}
