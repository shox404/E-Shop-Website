"use client";

import Loader from "@/app/_components/loader";
import { useAppSelector } from "@/app/_store/hooks";
import { useGetItemQuery } from "@/app/_store/services/items";
import { Styles } from "@/app/_styles/admin/products";
import {
  AppButton,
  AppInput,
  Br,
  Inline,
  Navbar,
} from "@/app/_styles/ui/element";
import { Text, Thin, Title } from "@/app/_styles/ui/text";
import { Item } from "@/app/global/types";
import {
  DeleteOutlined,
  EditFilled,
  EllipsisOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Carousel, Dropdown, Image, MenuProps } from "antd";
import { ChangeEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { format } from "@/app/global/utils";
import Tooltip from "@/app/_components/tooltip";

const drops: MenuProps["items"] = [
  {
    label: (
      <div>
        <EditFilled /> Edit
      </div>
    ),
    key: "0",
  },
  {
    label: (
      <div>
        <DeleteOutlined /> Delete
      </div>
    ),
    key: "1",
  },
];

export default function Products() {
  const { items } = useAppSelector((state) => state.items);
  const { isLoading } = useGetItemQuery();
  const [search, setSearch] = useState("");

  const useSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Loader is={isLoading}>
      <Navbar>
        <Text>Products</Text>
        <AppInput
          prefix={<SearchOutlined />}
          placeholder="Search"
          width={200}
          onChange={useSearch}
        />
      </Navbar>
      <Styles layout>
        <AnimatePresence>
          {items
            .filter((item: Item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item: Item) => (
              <motion.div
                className="card"
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="images">
                  <Carousel arrows>
                    {item.images.map((art, index) => (
                      <Image src={art} key={index} className="image" />
                    ))}
                  </Carousel>
                </div>
                <div className="footer">
                  <Title>
                    <Tooltip>{item.title}</Tooltip>
                  </Title>
                  <Br px={5} />
                  <Thin>
                    <Tooltip>{item.description}</Tooltip>
                  </Thin>
                  <Br px={5} />
                  <Inline y="center">
                    <Text>Price</Text>
                    <Text> $ {format(item.price)}</Text>
                  </Inline>
                  <Br px={5} />
                  <Dropdown menu={{ items: drops }} trigger={["click"]}>
                    <Inline y="end">
                      <Text>Actions</Text>
                      <AppButton>
                        <EllipsisOutlined />
                      </AppButton>
                    </Inline>
                  </Dropdown>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </Styles>
    </Loader>
  );
}
