"use client";

import Link from "next/link";

import { Flex } from "antd";
import { SideBar, Item, Content } from "../_styles/layout";
import { Title } from "../_styles/ui/text";
import { usePathname, useRouter } from "next/navigation";
import { Button, IconButton } from "../_styles/ui/element";
import { ArrowLeftOutlined, LogoutOutlined } from "@ant-design/icons";
import { useState } from "react";

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
  const path = usePathname();
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <Flex>
      <SideBar isOpen={isSideBarOpen}>
        <Flex justify="space-between" align="center" className="header">
          <Link href="/admin">
            <Title>Logo</Title>
          </Link>
          <IconButton theme="dark" onClick={toggleSideBar} className="handler">
            <ArrowLeftOutlined />
          </IconButton>
        </Flex>
        <Flex vertical gap={20} justify="space-between" className="items">
          <Flex vertical gap={10}>
            {links.map((item, index) => (
              <Item
                key={index}
                onClick={() => router.push(item.path)}
                className={path == item.path ? "active" : ""}
              >
                {item.title}
              </Item>
            ))}
          </Flex>
          <Button theme="dark">
            Log out <LogoutOutlined />
          </Button>
        </Flex>
      </SideBar>
      <Content isOpen={isSideBarOpen}>
        frew Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, qui?
        <br />
      </Content>
    </Flex>
  );
}
