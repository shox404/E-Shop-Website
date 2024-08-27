"use client";

import Link from "next/link";

import { Flex } from "antd";
import { SideBar, Item, Content } from "../_styles/admin/_layout";
import { Title } from "../_styles/ui/text";
import { usePathname, useRouter } from "next/navigation";
import { Button, IconButton } from "../_styles/ui/element";
import {
  AppstoreOutlined,
  ArrowLeftOutlined,
  LogoutOutlined,
  PlusOutlined,
  SettingOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { ReactNode, useEffect, useState } from "react";
import { getCookie } from "../actions";

const links = [
  {
    icon: <AppstoreOutlined />,
    title: "Dashboard",
    path: "/admin",
  },
  {
    icon: <PlusOutlined />,
    title: "Create",
    path: "/admin/create",
  },
  {
    icon: <ShopOutlined />,
    title: "Products",
    path: "/admin/products",
  },
  {
    icon: <SettingOutlined />,
    title: "Settings",
    path: "/admin/settings",
  },
];

export default function Admin({ children }: { children: ReactNode }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    setIsSideBarOpen(globalThis.innerWidth >= 480);
    const token = getCookie("admin-token");
    if (!token || token == "") router.push("/admin-login");
  }, []);

  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <Flex>
      <SideBar className={isSideBarOpen ? "open" : ""}>
        <Flex justify="space-between" align="center" className="header">
          <Link href="/admin">
            <Title>E Shop</Title>
          </Link>
          <IconButton onClick={toggleSideBar} className="handler">
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
                {item.icon}
                {item.title}
              </Item>
            ))}
          </Flex>
          <Button>
            Log out <LogoutOutlined />
          </Button>
        </Flex>
      </SideBar>
      <Content className={isSideBarOpen ? "open" : ""}>{children}</Content>
    </Flex>
  );
}